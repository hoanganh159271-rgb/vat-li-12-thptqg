/* Mô hình kiểm tra từng ý của tám câu phần II. */
(function (global) {
  'use strict';
  var C = global.LY_COMMON;
  var graphData = new WeakMap();

  function number(value, digits) { return C.fmtTrim(value, digits === undefined ? 2 : digits); }

  var models = {
    nk_a_II_1: {
      title: 'Cân bằng nhiệt và cách đo',
      description: 'Giả sử A và B cùng vật liệu. Đọc mỗi số chỉ sau khi đầu dò đã cân bằng với vật. Sau đó cho A và B tiếp xúc với nhau.',
      fields: [
        ['ta', 'Nhiệt độ A', '°C', 15, 35, 0.5, 22.5],
        ['tb', 'Nhiệt độ B', '°C', 15, 35, 0.5, 22.5],
        ['mass', 'Khối lượng B so với A', 'lần', 1, 4, 0.5, 2]
      ],
      run: function (v) {
        var equal = v.ta === v.tb;
        return {
          values: [
            ['Số chỉ khi đo A', number(v.ta) + ' °C'],
            ['Số chỉ khi đo B', number(v.tb) + ' °C'],
            ['Chiều truyền nhiệt ròng', equal ? 'Không có' : v.ta > v.tb ? 'Từ A sang B' : 'Từ B sang A'],
            ['Nhiệt dung C_B/C_A', number(v.mass) + ' lần']
          ],
          bars: [['A', v.ta, '°C'], ['B', v.tb, '°C']],
          points: [
            'Đặt hai thanh nhiệt độ về 22,5 °C. So sánh hai số chỉ khi đầu dò cân bằng.',
            'Kéo T_B lên trên T_A rồi trả về bằng nhau. Quan sát chiều truyền nhiệt ròng.',
            'Giữ nguyên hai nhiệt độ, tăng khối lượng B. Tỉ số nhiệt dung đổi nhưng số chỉ giữ nguyên.',
            'Mô hình cho đầu dò tiếp xúc lần lượt với vật. Đo hồng ngoại dựa trên bức xạ và không cần tiếp xúc.'
          ]
        };
      }
    },
    nk_a_II_2: {
      title: 'Đồ thị đun nóng kim loại',
      description: 'Các mốc nhiệt độ và thời gian lấy theo đồ thị đề. Năng lượng nhận thêm từ đầu được minh họa với công suất hữu ích 60 W.',
      fields: [['time', 'Thời điểm trên đồ thị', 'phút', 0, 15, 0.5, 7]],
      run: function (v) {
        var time = v.time;
        var temperature = time < 2 ? 100 + 100 * time : time <= 12 ? 300 : 300 + (time - 12) * 200 / 3;
        var fraction = Math.max(0, Math.min(1, (time - 2) / 10));
        return {
          values: [
            ['Nhiệt độ', number(temperature, 1) + ' °C'],
            ['Nhiệt đã nhận từ đầu', number(3.6 * time, 1) + ' kJ'],
            ['Khối lượng đã nóng chảy', number(fraction * 100, 0) + '%'],
            ['Độ dốc rắn / lỏng', '100 / 66,7 °C/phút']
          ],
          points: [
            'Kéo từ phút 5 tới phút 10. Nhiệt kế đứng yên nhưng năng lượng nhận tăng.',
            'So hai đoạn nghiêng. Cùng m và P, đoạn dốc hơn có c nhỏ hơn.',
            'Đưa con trỏ vào đoạn ngang và đọc đơn vị trên trục đứng.',
            'Thử phút 5 và phút 10. Tỉ lệ đã nóng chảy đều nằm giữa 0% và 100%.'
          ],
          graph: { points: [[0, 100], [2, 300], [12, 300], [15, 500]], marker: [time, temperature] }
        };
      }
    },
    nk_a_II_3: {
      title: 'Đo nhiệt nóng chảy bằng hai công suất',
      description: 'Đun 120 s mỗi lượt. Lượt 1 dùng 30 W. Mẫu đang ở nhiệt độ nóng chảy, nồi giữ nguyên nhiệt độ và λ dùng để tạo số liệu là 300 kJ/kg.',
      fields: [
        ['room', 'Nhiệt nhận từ phòng mỗi lượt', 'J', 0, 1200, 200, 600],
        ['power', 'Công suất lượt 2', 'W', 45, 65, 5, 50],
        ['drift', 'Thay đổi nhiệt phòng ở lượt 2', 'J', 0, 600, 100, 0]
      ],
      run: function (v) {
        var q1 = 30 * 120 + v.room;
        var q2 = v.power * 120 + v.room + v.drift;
        var m1 = q1 / 300;
        var m2 = q2 / 300;
        var measured = (v.power - 30) * 120 / (m2 - m1);
        return {
          values: [
            ['Khối lượng tan lượt 1', number(m1) + ' g'],
            ['Khối lượng tan lượt 2', number(m2) + ' g'],
            ['Điện năng / tổng nhiệt lượt 2', number(v.power * 120, 0) + ' / ' + number(q2, 0) + ' J'],
            ['λ đo từ hiệu hai lượt', number(measured) + ' kJ/kg']
          ],
          bars: [['Lượt 1', m1, 'g'], ['Lượt 2', m2, 'g']],
          points: [
            'Tăng nhiệt nhận từ phòng. Nhiệt thêm vào làm cả hai khối lượng tan tăng.',
            'So điện năng và tổng nhiệt lượt 2. Chúng chỉ trùng khi không có thêm nhiệt từ phòng.',
            'Nồi giữ nguyên nhiệt độ nên phần tích lũy do tăng nhiệt độ bằng 0. Vỏ vẫn có thể truyền nhiệt.',
            'Giữ ô thay đổi nhiệt phòng bằng 0 rồi kéo công suất. Sau đó đổi nhiệt phòng giữa hai lượt để xem khi nào phép trừ lệch.'
          ]
        };
      }
    },
    nk_a_II_4: {
      title: 'Vật liệu mềm, thể tích và lực tương tác',
      description: 'Mô hình định tính dùng thang gia nhiệt tương đối. Các mốc chỉ minh họa sự khác nhau giữa mẫu tinh khiết kết tinh và vật liệu mềm dần, không phải thông số xử lý nhựa.',
      fields: [
        ['heat', 'Mức gia nhiệt minh họa', '%', 0, 100, 5, 50],
        ['volume', 'Thể tích so với ban đầu', '%', 80, 120, 5, 100],
        ['spacing', 'Khoảng cách hạt so với vị trí cân bằng', '%', 80, 120, 5, 100]
      ],
      run: function (v) {
        var softening = v.heat < 35 ? 'Còn cứng' : v.heat < 70 ? 'Đang mềm dần' : 'Đã mềm nhiều';
        var crystal = v.heat < 50 ? 'Chưa tới mốc nóng chảy' : v.heat === 50 ? 'Tới mốc nóng chảy' : 'Trên mốc nóng chảy';
        var force = v.spacing < 100 ? 'Lực đẩy trội' : v.spacing > 100 ? 'Lực hút trội gần điểm cân bằng' : 'Lực tổng hợp bằng 0';
        return {
          values: [
            ['Mẫu vô định hình', softening],
            ['Mẫu kết tinh tinh khiết', crystal],
            ['Khối lượng riêng ρ/ρ₀', number(100 / v.volume * 100, 1) + '%'],
            ['Tương tác của cặp hạt', force]
          ],
          bars: [['Thể tích V/V₀', v.volume, '%'], ['Khối lượng riêng ρ/ρ₀', 10000 / v.volume, '%']],
          points: [
            'Kéo mức gia nhiệt từ 35% tới 70%. Mẫu vô định hình đi qua cả một khoảng mềm dần.',
            'Đổi thể tích trong khi giữ khối lượng. Khi V tăng thì ρ giảm.',
            'Đưa khoảng cách hạt về 100%. Hai thành phần tương tác cân bằng tại vị trí này.',
            'Công suất làm thay đổi tốc độ cấp năng lượng. Nhiệt độ cục bộ quá cao có thể gây phân hủy, nên công suất cao không bảo đảm an toàn.'
          ]
        };
      }
    },
    nk_b_II_1: {
      title: 'Nhiệt dung C và nhiệt dung riêng c',
      description: 'Cấp cùng nhiệt lượng Q cho mẫu nước A và mẫu vật liệu B. Dùng c gần như không đổi trong khoảng đun nhỏ. Đặt c_B = 4200 J/(kg·K) để so cùng vật liệu.',
      fields: [
        ['energy', 'Nhiệt cấp cho mỗi mẫu', 'J', 420, 1680, 420, 840],
        ['mass', 'Khối lượng B', 'kg', 0.1, 0.6, 0.1, 0.4],
        ['specific', 'Nhiệt dung riêng của B', 'J/(kg·K)', 600, 4200, 600, 1200]
      ],
      run: function (v) {
        var ca = 0.2 * 4200;
        var cb = v.mass * v.specific;
        return {
          values: [
            ['Nhiệt dung của A / B', number(ca, 0) + ' / ' + number(cb, 0) + ' J/K'],
            ['Mức nóng lên của A', number(v.energy / ca) + ' K'],
            ['Mức nóng lên của B', number(v.energy / cb) + ' K'],
            ['c nước A', '4200 J/(kg·K)']
          ],
          bars: [['ΔT của A', v.energy / ca, 'K'], ['ΔT của B', v.energy / cb, 'K']],
          points: [
            'Tăng nhiệt cấp. Chỉ ΔT thay đổi khi khối lượng và vật liệu giữ nguyên.',
            'Chọn c_B = 4200 rồi thay đổi m_B. Cùng c nhưng C_B thay đổi theo m_B.',
            'Mô hình giữ c cố định cho khoảng đun nhỏ. Nếu c ở 300 K và 1000 K khác nhau thì cùng ΔT = 1 K cũng đòi hỏi Q khác nhau.',
            'Đặt m_B = 0,2 kg như A và c_B nhỏ hơn c_A. Nước nóng lên ít hơn với cùng Q.'
          ]
        };
      }
    },
    nk_b_II_2: {
      title: 'Cân nhiệt khi đo λ bằng nước ấm',
      description: 'Bình và 350 g nước ban đầu ở 22 °C. Có 60 g đá ở 0 °C và có thể có nước bám cùng nhiệt độ. Mô hình luôn đủ nhiệt làm tan hết đá.',
      fields: [
        ['film', 'Nước bám khi cân đá', 'g', 0, 12, 1, 0],
        ['cup', 'Nhiệt dung của bình và que khuấy', 'J/K', 0, 120, 20, 60],
        ['room', 'Nhiệt hệ nhận thêm từ phòng', 'J', 0, 1200, 200, 400]
      ],
      run: function (v) {
        var mass = 0.06;
        var weighed = mass + v.film / 1000;
        var waterCapacity = 0.35 * 4200;
        var t = ((waterCapacity + v.cup) * 22 + v.room - mass * 334000) /
          (waterCapacity + v.cup + weighed * 4200);
        var inferred = (waterCapacity * (22 - t) - weighed * 4200 * t) / weighed / 1000;
        return {
          values: [
            ['Khối lượng cân được', number(1000 * weighed, 0) + ' g'],
            ['Nhiệt độ cân bằng', number(t) + ' °C'],
            ['Nhiệt do dụng cụ tỏa', number(v.cup * (22 - t), 0) + ' J'],
            ['λ nếu bỏ qua các sai số', number(inferred) + ' kJ/kg']
          ],
          bars: [['λ thật của mô hình', 334, 'kJ/kg'], ['λ tính gần đúng', inferred, 'kJ/kg']],
          points: [
            'Tăng nước bám. Cân tăng số chỉ nhưng phần đá thực sự phải nóng chảy vẫn là 60 g.',
            'Đá giữ ở 0 °C trong lúc tan, vẫn nhận năng lượng nóng chảy. Phần thế năng tương tác tăng trong mô hình.',
            'Đặt nước bám và nhiệt dung bình về 0. Tăng nhiệt nhận từ phòng rồi quan sát λ tính gần đúng.',
            'Đặt nhiệt phòng và nước bám về 0. Tăng nhiệt dung dụng cụ để xem tác động khi bỏ qua phần nhiệt bình tỏa.'
          ]
        };
      }
    },
    nk_b_II_3: {
      title: 'Cân bằng lực và năng lượng của pít-tông',
      description: 'Khí lí tưởng đơn nguyên tử ở dưới pít-tông, ban đầu có 1 L và 300 K. Tiết diện 50 cm², p₀ = 100 kPa, g = 10 m/s². Gia nhiệt chậm, không ma sát. Đổi khối lượng pít-tông để so sánh các lượt riêng.',
      fields: [
        ['load', 'Khối lượng pít-tông', 'kg', 0, 10, 1, 5],
        ['temperature', 'Nhiệt độ sau khi đun', 'K', 300, 450, 10, 390]
      ],
      run: function (v) {
        var extra = v.load * 10 / 0.005 / 1000;
        var dv = v.temperature / 300 - 1;
        var airWork = 100 * dv;
        var pistonWork = extra * dv;
        var internal = 1.5 * (airWork + pistonWork);
        return {
          values: [
            ['Áp suất của khí', number(100 + extra) + ' kPa'],
            ['Thể tích cuối / mật độ so với đầu', number(1 + dv) + ' L / ' + number(100 / (1 + dv), 1) + '%'],
            ['Công đẩy khí quyển / nâng pít-tông', number(airWork) + ' / ' + number(pistonWork) + ' J'],
            ['Nội năng tăng / nhiệt nhận', number(internal) + ' / ' + number(internal + airWork + pistonWork) + ' J']
          ],
          diagram: { kind: 'piston', scale: (1 + dv) / 1.5 },
          bars: [['Đẩy khí quyển', airWork, 'J'], ['Nâng pít-tông', pistonWork, 'J'], ['Tăng nội năng', internal, 'J']],
          points: [
            'Tăng khối lượng pít-tông. Áp suất khí vượt p₀ một lượng mg/S.',
            'Tăng nhiệt độ. So hai phần công nâng tải và đẩy khí quyển, đều dùng đơn vị J.',
            'Khi pít-tông đi lên, V tăng nhưng khối lượng và số hạt giữ nguyên. Cả ρ và N/V đều giảm.',
            'So mức tăng nội năng với nhiệt nhận. Khí giữ một phần năng lượng để tăng nội năng.'
          ]
        };
      }
    },
    nk_b_II_4: {
      title: 'Túi khí mềm lặn chậm và lực nổi',
      description: 'Túi kín, đủ nhỏ để lấy áp suất tại một độ sâu đại diện. Ban đầu có 2 L khí ở mặt nước và 100 kPa. Nước 1000 kg/m³, g = 10 m/s², quá trình đẳng nhiệt.',
      fields: [['depth', 'Độ sâu của túi', 'm', 0, 30, 1, 10]],
      run: function (v) {
        var pressure = 100 + 10 * v.depth;
        var volume = 200 / pressure;
        var uplift = 10 * volume;
        var work = 200 * Math.log(pressure / 100);
        return {
          values: [
            ['Áp suất tuyệt đối / thể tích túi', number(pressure, 0) + ' kPa / ' + number(volume) + ' L'],
            ['Lực nổi F', number(uplift) + ' N'],
            ['Tích pF', number(pressure * uplift, 0) + ' kPa·N'],
            ['Công nhận A / nhiệt lượng Q', number(work, 1) + ' / ' + number(work ? -work : 0, 1) + ' J']
          ],
          diagram: { kind: 'bag', scale: Math.cbrt(volume / 2) },
          bars: [['Thể tích lúc đầu', 2, 'L'], ['Thể tích hiện tại', volume, 'L']],
          points: [
            'Kéo túi xuống sâu. V giảm với số hạt không đổi, nên khoảng cách điển hình giữa các hạt giảm.',
            'Ở độ sâu dương khí nhận công A > 0. Vì T không đổi nên ΔU = 0 và Q = −A.',
            'So lực nổi ở mặt nước và khi lặn. F = ρgV giảm theo thể tích chiếm chỗ.',
            'Thử 0 m, 10 m và 30 m. p và F đổi, còn pF = ρg·pV không đổi.'
          ]
        };
      }
    }
  };

  function element(tag, text, className) {
    var node = document.createElement(tag);
    if (text) node.textContent = text;
    if (className) node.className = className;
    return node;
  }

  function drawGraph(canvas, graph) {
    var ctx = canvas.getContext('2d');
    var colors = C.getColors();
    var chart = C.drawAxes(ctx, canvas.width, canvas.height, {
      xMax: 15, yMax: 500, xTicks: 3, yTicks: 5, xLabel: 'Thời gian (phút)', yLabel: 'T (°C)'
    });
    var x = chart.toX;
    var y = chart.toY;
    ctx.strokeStyle = colors.accent;
    ctx.lineWidth = 4;
    ctx.beginPath();
    graph.points.forEach(function (point, index) {
      if (!index) ctx.moveTo(x(point[0]), y(point[1]));
      else ctx.lineTo(x(point[0]), y(point[1]));
    });
    ctx.stroke();
    ctx.fillStyle = colors.warm;
    ctx.beginPath();
    ctx.arc(x(graph.marker[0]), y(graph.marker[1]), 8, 0, 2 * Math.PI);
    ctx.fill();
  }

  function mount(container, id) {
    var model = models[id];
    if (!model) return false;

    var description = element('p', model.description, 'muted');
    var fields = element('div', null, 'ds-lab-fields');
    var values = element('dl', null, 'ds-lab-values');
    var picture = element('div', null, 'ds-lab-picture');
    var directions = element('ol', null, 'ds-lab-directions');
    directions.type = 'a';
    directions.setAttribute('aria-label', 'Cách kiểm tra từng ý');
    var selected = {};
    var graph;

    function update() {
      var result = model.run(selected);
      values.replaceChildren();
      result.values.forEach(function (row) {
        var pair = element('div');
        pair.append(element('dt', row[0]), element('dd', row[1]));
        values.appendChild(pair);
      });
      if (result.bars) {
        picture.replaceChildren();
        if (result.diagram) {
          var scene = element('div', null, 'ds-lab-scene ds-lab-scene-' + result.diagram.kind);
          var shape = element('div', null, 'ds-lab-shape');
          shape.style.setProperty('--size', 100 * result.diagram.scale + '%');
          scene.setAttribute('aria-hidden', 'true');
          scene.appendChild(shape);
          picture.appendChild(scene);
        }
        var max = Math.max(1, ...result.bars.map(function (bar) { return bar[1]; }));
        result.bars.forEach(function (bar) {
          var row = element('div', null, 'ds-lab-bar');
          var caption = element('span', bar[0] + ' · ' + number(bar[1], 1) + ' ' + bar[2]);
          var track = element('div', null, 'ds-lab-track');
          var fill = element('div', null, 'ds-lab-fill');
          fill.style.width = 100 * bar[1] / max + '%';
          track.setAttribute('aria-hidden', 'true');
          track.appendChild(fill);
          row.append(caption, track);
          picture.appendChild(row);
        });
      }
      if (result.graph) {
        graphData.set(graph, result.graph);
        drawGraph(graph, result.graph);
      }
    }

    model.fields.forEach(function (field) {
      var wrapper = element('label', null, 'ds-lab-control');
      var wording = element('span', field[1]);
      var input = element('input');
      var out = element('output');
      out.setAttribute('aria-hidden', 'true');
      input.type = 'range';
      input.min = field[3];
      input.max = field[4];
      input.step = field[5];
      input.value = field[6];
      input.setAttribute('aria-label', field[1]);
      function read() {
        var value = Number(input.value);
        selected[field[0]] = value;
        var valueText = number(value) + ' ' + field[2];
        out.textContent = valueText;
        input.setAttribute('aria-valuetext', valueText);
      }
      input.addEventListener('input', function () { read(); update(); });
      read();
      wrapper.append(wording, out, input);
      fields.appendChild(wrapper);
    });

    var state = model.run(selected);
    if (state.graph) {
      graph = element('canvas');
      graph.width = 640;
      graph.height = 280;
      graph.setAttribute('role', 'img');
      graph.setAttribute('aria-label', 'Đồ thị nhiệt độ theo thời gian với vị trí đang chọn');
      picture.appendChild(graph);
    }
    state.points.forEach(function (tip) { directions.appendChild(element('li', tip)); });
    container.append(element('h3', model.title), description, fields, picture, values,
      element('h4', 'Đối chiếu với các ý a–d'), directions);
    update();
    return true;
  }

  global.addEventListener('ly-theme-change', function () {
    document.querySelectorAll('.ds-lab-picture canvas').forEach(function (canvas) {
      var graph = graphData.get(canvas);
      if (graph) drawGraph(canvas, graph);
    });
  });

  global.LY_DS_MODELS = { mount: mount };
})(window);
