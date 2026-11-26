(function () {
  'use strict';
  var C = window.LY_COMMON;
  C.initShell();

  function el(id) {
    return document.getElementById(id);
  }

  function read(id, unit, precision) {
    var value = Number(el(id).value);
    el(id + '-value').textContent = C.fmtTrim(value, precision || 0) + ' ' + unit;
    return value;
  }

  function axes(canvas, options) {
    var chart = C.setupCanvas(canvas, 204);
    return { ctx: chart.ctx, axis: C.drawAxes(chart.ctx, chart.width, chart.height, options) };
  }

  function trace(chart, points, color, dash) {
    var ctx = chart.ctx;
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    if (dash) ctx.setLineDash(dash);
    ctx.beginPath();
    points.forEach(function (point, index) {
      var x = chart.axis.toX(point[0]);
      var y = chart.axis.toY(point[1]);
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
    ctx.restore();
  }

  function drawHeating() {
    var power = read('heat-power', 'W');
    var warm = 0.1 * 2500 * 20 / power;
    var melt = 0.1 * 60000 / power;
    var liquid = 0.1 * 4000 * 30 / power;
    var chart = axes(el('heat-plot'), { xLabel: 'Thời gian (s)', yLabel: 'Nhiệt độ (°C)', xMax: 650, yMax: 80, xTicks: 4, yTicks: 4 });
    var palette = C.getColors();
    trace(chart, [[0, 20], [warm, 40]], palette.cold);
    trace(chart, [[warm, 40], [warm + melt, 40]], palette.phase);
    trace(chart, [[warm + melt, 40], [warm + melt + liquid, 70]], palette.warm);
    el('heat-result').textContent = 'Mẫu bắt đầu nóng chảy ở 40 °C sau ' + C.fmtTrim(warm, 1) +
      ' s. Đoạn nằm ngang kéo dài ' + C.fmtTrim(melt, 1) + ' s. Cấp công suất lớn hơn làm đoạn này ngắn đi.';
  }

  function balanceIce() {
    var waterTemp = read('water-temp', '°C');
    var iceMass = read('ice-mass', 'kg', 2);
    var available = 4200 * waterTemp;
    var warmIce = iceMass * 2100 * 10;
    var forMelting = available - warmIce;
    var latent = 334000;
    var melted = Math.min(iceMass, forMelting / latent);
    var remaining = iceMass - melted;
    var finalTemp = Math.max(0, (forMelting - iceMass * latent) / ((1 + iceMass) * 4200));
    el('ice-melted').style.width = 100 * melted / iceMass + '%';
    el('ice-result').textContent = 'Nước có thể tỏa ' + C.fmtTrim(available / 1000, 1) +
      ' kJ đến 0 °C. Dùng ' + C.fmtTrim(warmIce / 1000, 2) + ' kJ để làm ấm đá. ' +
      (remaining > 1e-9
        ? 'Còn lại ' + C.fmtTrim(remaining * 1000, 1) + ' g đá ở 0 °C.'
        : 'Đá tan hết. Nhiệt độ cân bằng là ' + C.fmtTrim(finalTemp, 1) + ' °C.');
  }

  function compareMeltingMeasurements() {
    var roomHeat = read('room-heat', 'J');
    var time = 120;
    var first = 30 * time;
    var second = 50 * time;
    var m1 = (first + roomHeat) / 300000;
    var m2 = (second + roomHeat) / 300000;
    el('error-result').textContent = 'Lần 1 tan ' + C.fmtTrim(1000 * m1, 1) +
      ' g, lần 2 tan ' + C.fmtTrim(1000 * m2, 1) + ' g. Chỉ dùng lần 1: ' +
      C.fmtTrim(first / (1000 * m1), 1) + ' kJ/kg. Lấy hiệu hai lần: ' +
      C.fmtTrim((second - first) / (1000 * (m2 - m1)), 1) + ' kJ/kg.';
  }

  function updateSolar() {
    var morning = read('shade-morning', 'phút');
    var evening = read('shade-evening', 'phút');
    var dayMinutes = 12 * 60;
    var active = dayMinutes - morning - evening;
    var heat = 600 * 2 * active * 60 * 0.4 * 0.9;
    var temperatureRise = heat / (100 * 4200);
    function timeLabel(minutes) {
      return String(Math.floor(minutes / 60)).padStart(2, '0') + ':' + String(minutes % 60).padStart(2, '0');
    }
    el('sun-window').style.left = 100 * morning / dayMinutes + '%';
    el('sun-window').style.width = 100 * active / dayMinutes + '%';
    el('solar-result').textContent = 'Thu từ ' + timeLabel(360 + morning) + ' đến ' +
      timeLabel(1080 - evening) + ', trong ' + active * 60 + ' s. Nước tăng ' +
      C.fmtTrim(temperatureRise, 1) + ' °C.';
  }

  function drawState() {
    var temperature = read('gas-temperature', 'K');
    var pressure = read('gas-pressure', 'kPa');
    var chart = axes(el('gas-plot'), { xLabel: 'T (K)', yLabel: 'p (kPa)', xMax: 640, yMax: 200, xTicks: 4, yTicks: 4 });
    var palette = C.getColors();
    trace(chart, [[0, 0], [300, 100]], palette.muted, [7, 5]);
    trace(chart, [[0, 0], [temperature, pressure]], palette.accent);
    var volume = 8.31 * temperature / pressure;
    el('gas-result').textContent = 'Độ dốc p/T = ' + C.fmtTrim(pressure / temperature, 3) +
      ' kPa/K. Thể tích khí là ' + C.fmtTrim(volume, 2) + ' L, so với 24,93 L ở mốc.';
  }

  function updateBell() {
    var depth = read('bell-depth', 'm');
    var height = 2;
    var area = 0.5;
    var atmospheric = 100000;
    var waterWeight = 10000;
    var basePressure = atmospheric + waterWeight * depth;
    // Nghiệm dương được viết ở dạng tránh lấy hiệu hai số gần nhau.
    var airHeight = 2 * atmospheric * height /
      (basePressure + Math.sqrt(basePressure * basePressure + 4 * waterWeight * atmospheric * height));
    var interfaceDepth = depth + airHeight;
    var interfacePressure = atmospheric + waterWeight * interfaceDepth;
    var finalPressure = atmospheric + waterWeight * (depth + height);
    var pumpLitres = ((finalPressure - atmospheric) / atmospheric) * area * height * 1000;
    el('bell-air').style.height = 100 * airHeight / height + '%';
    el('bell-interface').style.top = 'calc(' + 100 * airHeight / height + '% - 1em)';
    el('bell-result').textContent = 'Cột khí cao ' + C.fmtTrim(airHeight, 2) +
      ' m. Mặt phân cách sâu ' + C.fmtTrim(interfaceDepth, 2) + ' m nên áp suất khí là ' +
      C.fmtTrim(interfacePressure / 1000, 1) + ' kPa. Để đẩy hết nước, cần bơm thêm ' +
      C.fmtTrim(pumpLitres, 0) + ' L khí quy về áp suất khí quyển.';
  }

  function controls(ids, update) {
    ids.forEach(function (id) { el(id).addEventListener('input', update); });
    update();
  }

  controls(['heat-power'], drawHeating);
  controls(['water-temp', 'ice-mass'], balanceIce);
  controls(['room-heat'], compareMeltingMeasurements);
  controls(['shade-morning', 'shade-evening'], updateSolar);
  controls(['gas-temperature', 'gas-pressure'], drawState);
  controls(['bell-depth'], updateBell);
  ['resize', 'ly-theme-change'].forEach(function (event) {
    window.addEventListener(event, function () {
      drawHeating();
      drawState();
    });
  });
})();
