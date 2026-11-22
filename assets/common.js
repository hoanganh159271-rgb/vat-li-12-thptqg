/* Hệ sinh thái Vật lí 12 GDPT 2018 — Tiện ích dùng chung 100% Offline */
(function (global) {
  'use strict';

  var STORAGE_KEY = 'ly12_ecosystem_v1';
  var THEME_KEY = 'ly12_theme';

  var ERROR_GROUPS = [
    'Hổng kiến thức',
    'Hổng bản chất',
    'Thiếu ý tưởng',
    'Lỗi vận dụng',
    'Tính toán ẩu',
    'Đọc sót dữ kiện',
    'Quản lý thời gian',
    'Bất cẩn'
  ];

  var PHYSICS_SUBTAGS = [
    'Lỗi đơn vị/thứ nguyên',
    'Quên điều kiện mô hình'
  ];

  var CHAPTER_NAMES = {
    '1': 'Chương 1: Vật lí nhiệt',
    '2': 'Chương 2: Khí lí tưởng',
    '3': 'Chương 3: Từ trường',
    '4': 'Chương 4: Vật lí hạt nhân'
  };

  function defaultStore() {
    return {
      version: 1,
      kbProgress: {
        c1: false,
        c2: false,
        c3: false,
        c4: false,
        l11: false
      },
      examHistory: [],
      errorLogs: []
    };
  }

  function loadStore() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultStore();
      var parsed = JSON.parse(raw);
      var base = defaultStore();
      return {
        version: 1,
        kbProgress: Object.assign(base.kbProgress, parsed.kbProgress || {}),
        examHistory: Array.isArray(parsed.examHistory) ? parsed.examHistory : [],
        errorLogs: Array.isArray(parsed.errorLogs) ? parsed.errorLogs : []
      };
    } catch (e) {
      return defaultStore();
    }
  }

  function saveStore(store) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
      return true;
    } catch (e) {
      return false;
    }
  }

  function toggleKbCheck(key, value) {
    var store = loadStore();
    store.kbProgress[key] = Boolean(value);
    saveStore(store);
    return store;
  }

  function addErrorLog(entry) {
    var store = loadStore();
    var item = {
      id: 'err_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
      createdAt: new Date().toISOString(),
      chapter: String(entry.chapter || '1'),
      questionId: String(entry.questionId || ''),
      questionTitle: String(entry.questionTitle || 'Câu hỏi luyện tập'),
      group: ERROR_GROUPS.indexOf(entry.group) >= 0 ? entry.group : ERROR_GROUPS[1],
      subtags: Array.isArray(entry.subtags)
        ? entry.subtags.filter(function (t) { return PHYSICS_SUBTAGS.indexOf(t) >= 0; })
        : [],
      trapKey: String(entry.trapKey || entry.questionId || entry.group),
      note: String(entry.note || '').trim()
    };
    store.errorLogs.unshift(item);
    saveStore(store);
    return item;
  }

  function deleteErrorLog(id) {
    var store = loadStore();
    store.errorLogs = store.errorLogs.filter(function (x) { return x.id !== id; });
    saveStore(store);
    return store;
  }

  function recordExamResult(result) {
    var store = loadStore();
    store.examHistory.unshift({
      id: 'exam_' + Date.now(),
      createdAt: new Date().toISOString(),
      title: String(result.title || 'Đề luyện tập'),
      filter: String(result.filter || 'all'),
      totalScore: Number(result.totalScore || 0),
      maxScore: Number(result.maxScore || 0),
      p1Score: Number(result.p1Score || 0),
      p2Score: Number(result.p2Score || 0),
      p3Score: Number(result.p3Score || 0),
      elapsedSec: Number(result.elapsedSec || 0)
    });
    if (store.examHistory.length > 50) {
      store.examHistory = store.examHistory.slice(0, 50);
    }
    saveStore(store);
    return store;
  }

  function getErrorStats() {
    var store = loadStore();
    var groupCounts = {};
    ERROR_GROUPS.forEach(function (g) { groupCounts[g] = 0; });
    var subtagCounts = {};
    PHYSICS_SUBTAGS.forEach(function (t) { subtagCounts[t] = 0; });

    var patternMap = {};

    store.errorLogs.forEach(function (log) {
      if (typeof groupCounts[log.group] === 'number') {
        groupCounts[log.group] += 1;
      }
      (log.subtags || []).forEach(function (t) {
        if (typeof subtagCounts[t] === 'number') {
          subtagCounts[t] += 1;
        }
      });

      var pKey = log.chapter + '::' + log.group + (log.subtags && log.subtags.length ? '::' + log.subtags.join('+') : '');
      if (!patternMap[pKey]) {
        patternMap[pKey] = {
          key: pKey,
          chapter: log.chapter,
          group: log.group,
          subtags: log.subtags || [],
          count: 0,
          latestNote: log.note || log.questionTitle,
          latestTitle: log.questionTitle
        };
      }
      patternMap[pKey].count += 1;
    });

    var repeated = Object.keys(patternMap)
      .map(function (k) { return patternMap[k]; })
      .filter(function (p) { return p.count >= 2; })
      .sort(function (a, b) { return b.count - a.count; });

    return {
      totalLogs: store.errorLogs.length,
      groupCounts: groupCounts,
      subtagCounts: subtagCounts,
      repeated: repeated,
      recentLogs: store.errorLogs.slice(0, 12),
      examCount: store.examHistory.length,
      latestExam: store.examHistory[0] || null
    };
  }

  function generateErrorLogMarkdown() {
    var store = loadStore();
    var lines = [
      '# Nhật ký lỗi sai (Xuất từ trình duyệt)',
      '',
      '| Thời gian | Chương | Câu hỏi | Nhóm lỗi | Thẻ phụ Lý | Lý do nhầm |',
      '| :--- | :--- | :--- | :--- | :--- | :--- |'
    ];
    if (store.errorLogs.length === 0) {
      lines.push('| - | - | Chưa có dữ liệu lỗi | - | - | - |');
    } else {
      store.errorLogs.forEach(function (log) {
        var dt = log.createdAt ? log.createdAt.slice(0, 10) : '';
        var ch = CHAPTER_NAMES[log.chapter] || ('Chương ' + log.chapter);
        var subs = (log.subtags && log.subtags.length) ? log.subtags.join(', ') : 'Không';
        var note = (log.note || '-').replace(/\|/g, '/').replace(/\r?\n/g, ' ');
        var title = (log.questionTitle || '-').replace(/\|/g, '/');
        lines.push('| ' + dt + ' | ' + ch + ' | ' + title + ' | ' + log.group + ' | ' + subs + ' | ' + note + ' |');
      });
    }
    return lines.join('\n');
  }

  function exportBackupJSON() {
    var payload = {
      exportedAt: new Date().toISOString(),
      theme: getTheme(),
      data: loadStore()
    };
    var blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'vatli12_sao_luu_' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  function importBackupJSON(file, callback) {
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var parsed = JSON.parse(String(reader.result || '{}'));
        var data = parsed.data ? parsed.data : parsed;
        if (!data || typeof data !== 'object') {
          callback(new Error('Tệp JSON không đúng cấu trúc sao lưu.'));
          return;
        }
        var merged = Object.assign(defaultStore(), {
          kbProgress: Object.assign(defaultStore().kbProgress, data.kbProgress || {}),
          examHistory: Array.isArray(data.examHistory) ? data.examHistory : [],
          errorLogs: Array.isArray(data.errorLogs) ? data.errorLogs : []
        });
        saveStore(merged);
        if (parsed.theme === 'dark' || parsed.theme === 'light') {
          setTheme(parsed.theme);
        }
        callback(null, merged);
      } catch (err) {
        callback(err);
      }
    };
    reader.readAsText(file, 'utf-8');
  }

  /* Giao diện Sáng / Tối */
  function getTheme() {
    try {
      var saved = localStorage.getItem(THEME_KEY);
      if (saved === 'dark' || saved === 'light') return saved;
    } catch (e) {}
    return 'light';
  }

  function setTheme(theme) {
    var next = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch (e) {}
    var btn = document.getElementById('ly-theme-toggle');
    if (btn) {
      btn.textContent = next === 'dark' ? 'Chế độ Sáng' : 'Chế độ Tối';
      btn.setAttribute('aria-pressed', next === 'dark' ? 'true' : 'false');
    }
    try {
      window.dispatchEvent(new CustomEvent('ly-theme-change', { detail: { theme: next } }));
    } catch (e) {}
  }

  function initTheme() {
    setTheme(getTheme());
  }

  function toggleTheme() {
    setTheme(getTheme() === 'dark' ? 'light' : 'dark');
  }

  function initShell(options) {
    initTheme();
    var opts = options || {};
    var themeBtn = document.getElementById('ly-theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', toggleTheme);
    }
    var exportBtn = document.getElementById('ly-export-json');
    if (exportBtn) {
      exportBtn.addEventListener('click', exportBackupJSON);
    }
    var importInput = document.getElementById('ly-import-json');
    var importBtn = document.getElementById('ly-import-trigger');
    if (importBtn && importInput) {
      importBtn.addEventListener('click', function () {
        importInput.value = '';
        importInput.click();
      });
      importInput.addEventListener('change', function (e) {
        var file = e.target.files && e.target.files[0];
        if (!file) return;
        importBackupJSON(file, function (err) {
          if (err) {
            alert('Không thể nhập dữ liệu: ' + err.message);
            return;
          }
          if (typeof opts.onImportSuccess === 'function') {
            opts.onImportSuccess();
          } else {
            location.reload();
          }
        });
      });
    }

    registerServiceWorkerOffline();
  }

  function registerServiceWorkerOffline() {
    if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) return;
    var proto = location.protocol;
    var host = location.hostname;
    if (proto !== 'https:' && host !== 'localhost' && host !== '127.0.0.1') return;

    var swPath = './sw.js';
    var commonScript = document.querySelector('script[src$="common.js"]');
    if (commonScript) {
      var srcAttr = commonScript.getAttribute('src') || '';
      if (srcAttr.indexOf('../') === 0) {
        swPath = '../sw.js';
      }
    }
    navigator.serviceWorker.register(swPath).catch(function () {});
  }

  /* Định dạng số chuẩn Việt Nam */
  function fmt(val, dec) {
    if (!Number.isFinite(val)) return '—';
    var d = typeof dec === 'number' ? dec : 2;
    var rounded = Number(val.toFixed(d));
    if (Object.is(rounded, -0)) rounded = 0;
    return rounded.toFixed(d).replace('.', ',');
  }

  function fmtTrim(val, maxDec) {
    if (!Number.isFinite(val)) return '—';
    var d = typeof maxDec === 'number' ? maxDec : 3;
    var s = Number(val.toFixed(d)).toString();
    return s.replace('.', ',');
  }

  function fmtSci(val, sig) {
    if (!Number.isFinite(val) || val === 0) return '0';
    var abs = Math.abs(val);
    if (abs >= 0.01 && abs < 100000) {
      return fmtTrim(val, sig || 3);
    }
    var exp = Math.floor(Math.log10(abs));
    var mant = val / Math.pow(10, exp);
    return fmt(mant, sig || 2) + ' × 10^' + exp;
  }

  /* Tiện ích Canvas HiDPI & Trục tọa độ chuẩn */
  function getColors() {
    var cs = getComputedStyle(document.documentElement);
    function pick(name, fallback) {
      var v = cs.getPropertyValue(name);
      return v ? v.trim() : fallback;
    }
    return {
      bg: pick('--surface', '#FFFFFF'),
      bgAlt: pick('--surface-alt', '#EEF1F5'),
      ink: pick('--ink', '#141923'),
      muted: pick('--ink-muted', '#4A5568'),
      grid: pick('--border', 'rgba(20,25,35,0.12)'),
      accent: pick('--accent', '#184E8A'),
      warm: pick('--phys-warm', '#C23B22'),
      cold: pick('--phys-cold', '#1D63B8'),
      phase: pick('--phys-phase', '#A85B06'),
      ok: pick('--phys-ok', '#157A4C')
    };
  }

  function setupCanvas(canvas, cssHeight) {
    var parent = canvas.parentElement;
    var width = Math.max(240, Math.floor((parent ? parent.clientWidth : canvas.clientWidth) - 24));
    if (parent && parent.classList.contains('canvas-raw')) {
      width = Math.max(240, Math.floor(parent.clientWidth));
    }
    var height = cssHeight || 320;
    var dpr = Math.min(window.devicePixelRatio || 1, 2.5);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    var ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx: ctx, width: width, height: height, dpr: dpr };
  }

  function drawArrow(ctx, x1, y1, x2, y2, color, lineWidth, headLen) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    var len = Math.hypot(dx, dy);
    if (len < 1) return;
    var hl = headLen || 8;
    var angle = Math.atan2(dy, dx);
    ctx.save();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = lineWidth || 2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - hl * Math.cos(angle - Math.PI / 6), y2 - hl * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(x2 - hl * Math.cos(angle + Math.PI / 6), y2 - hl * Math.sin(angle + Math.PI / 6));
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function drawAxes(ctx, width, height, opts) {
    var colors = getColors();
    var pad = Object.assign({ left: 58, right: 26, top: 28, bottom: 44 }, opts.pad || {});
    var plotW = Math.max(80, width - pad.left - pad.right);
    var plotH = Math.max(80, height - pad.top - pad.bottom);

    var xMin = opts.xMin !== undefined ? opts.xMin : 0;
    var xMax = opts.xMax !== undefined ? opts.xMax : 10;
    var yMin = opts.yMin !== undefined ? opts.yMin : 0;
    var yMax = opts.yMax !== undefined ? opts.yMax : 10;

    if (xMax <= xMin) xMax = xMin + 1;
    if (yMax <= yMin) yMax = yMin + 1;

    function toX(x) {
      return pad.left + ((x - xMin) / (xMax - xMin)) * plotW;
    }
    function toY(y) {
      return pad.top + plotH - ((y - yMin) / (yMax - yMin)) * plotH;
    }

    ctx.save();
    ctx.fillStyle = colors.bg;
    ctx.fillRect(0, 0, width, height);

    var xTicks = opts.xTicks || 5;
    var yTicks = opts.yTicks || 5;

    ctx.font = '12px ' + getComputedStyle(document.body).fontFamily;
    ctx.strokeStyle = colors.grid;
    ctx.lineWidth = 1;

    var i;
    for (i = 0; i <= xTicks; i++) {
      var xv = xMin + (i / xTicks) * (xMax - xMin);
      var xp = toX(xv);
      ctx.beginPath();
      ctx.moveTo(xp, pad.top);
      ctx.lineTo(xp, pad.top + plotH);
      ctx.stroke();

      ctx.fillStyle = colors.muted;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      var xTxt = opts.xFormat ? opts.xFormat(xv) : fmtTrim(xv, 2);
      ctx.fillText(xTxt, xp, pad.top + plotH + 7);
    }

    for (i = 0; i <= yTicks; i++) {
      var yv = yMin + (i / yTicks) * (yMax - yMin);
      var yp = toY(yv);
      ctx.beginPath();
      ctx.moveTo(pad.left, yp);
      ctx.lineTo(pad.left + plotW, yp);
      ctx.stroke();

      ctx.fillStyle = colors.muted;
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      var yTxt = opts.yFormat ? opts.yFormat(yv) : fmtTrim(yv, 2);
      ctx.fillText(yTxt, pad.left - 8, yp);
    }

    var axisX_y = (yMin <= 0 && yMax >= 0 && opts.zeroAxisY) ? toY(0) : (pad.top + plotH);
    var axisY_x = (xMin <= 0 && xMax >= 0 && opts.zeroAxisX) ? toX(0) : pad.left;

    drawArrow(ctx, pad.left, axisX_y, pad.left + plotW + 12, axisX_y, colors.ink, 1.5, 7);
    drawArrow(ctx, axisY_x, pad.top + plotH, axisY_x, pad.top - 12, colors.ink, 1.5, 7);

    if (opts.xLabel) {
      ctx.fillStyle = colors.ink;
      ctx.font = '600 13px ' + getComputedStyle(document.body).fontFamily;
      ctx.textAlign = 'right';
      ctx.textBaseline = 'bottom';
      ctx.fillText(opts.xLabel, width - 6, height - 4);
    }
    if (opts.yLabel) {
      ctx.fillStyle = colors.ink;
      ctx.font = '600 13px ' + getComputedStyle(document.body).fontFamily;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      ctx.fillText(opts.yLabel, Math.max(8, axisY_x - 36), 4);
    }

    ctx.restore();
    return {
      pad: pad,
      plotW: plotW,
      plotH: plotH,
      xMin: xMin,
      xMax: xMax,
      yMin: yMin,
      yMax: yMax,
      toX: toX,
      toY: toY
    };
  }

  /* Trình dựng Markdown & Công thức Vật lí 100% Ngoại tuyến */
  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function readBraceGroup(str, pos) {
    if (pos >= str.length) return { content: '', next: pos };
    if (str[pos] !== '{') {
      if (str[pos] === '\\') {
        var m = str.slice(pos).match(/^\\[a-zA-Z]+|^\\./);
        if (m) return { content: m[0], next: pos + m[0].length };
      }
      return { content: str[pos], next: pos + 1 };
    }
    var depth = 0;
    var i = pos;
    while (i < str.length) {
      if (str[i] === '\\') {
        i += 2;
        continue;
      }
      if (str[i] === '{') depth += 1;
      else if (str[i] === '}') {
        depth -= 1;
        if (depth === 0) {
          return { content: str.slice(pos + 1, i), next: i + 1 };
        }
      }
      i += 1;
    }
    return { content: str.slice(pos + 1), next: str.length };
  }

  var TEX_SYMBOLS = {
    Delta: 'Δ',
    Phi: 'Φ',
    Omega: 'Ω',
    alpha: 'α',
    beta: 'β',
    gamma: 'γ',
    lambda: 'λ',
    omega: 'ω',
    mu: 'μ',
    pi: 'π',
    theta: 'θ',
    varphi: 'φ',
    varepsilon: 'ε',
    times: '×',
    cdot: '·',
    approx: '≈',
    ne: '≠',
    le: '≤',
    ge: '≥',
    Rightarrow: '⇒',
    Leftrightarrow: '⇔',
    to: '→',
    perp: '⊥',
    pm: '±',
    circ: '°',
    gg: '≫',
    sim: '~',
    sin: 'sin',
    cos: 'cos',
    tan: 'tan',
    ln: 'ln'
  };

  function convertMathBody(tex) {
    var out = '';
    var i = 0;
    var len = tex.length;

    while (i < len) {
      var ch = tex[i];

      if (ch === '\\') {
        if (tex.slice(i, i + 16) === '\\uparrow\\uparrow') {
          out += '⇈';
          i += 16;
          continue;
        }
        if (tex.slice(i, i + 18) === '\\uparrow\\downarrow') {
          out += '⇅';
          i += 18;
          continue;
        }
        if (tex[i + 1] === ',' || tex[i + 1] === ' ' || tex[i + 1] === ';' || tex[i + 1] === ':') {
          out += ' ';
          i += 2;
          continue;
        }
        if (tex[i + 1] === '{' || tex[i + 1] === '}') {
          out += tex[i + 1];
          i += 2;
          continue;
        }
        var cmdMatch = tex.slice(i).match(/^\\([a-zA-Z]+)/);
        if (cmdMatch) {
          var cmd = cmdMatch[1];
          i += cmdMatch[0].length;
          if (cmd === 'qquad') { out += ' &nbsp;&nbsp; '; continue; }
          if (cmd === 'quad') { out += ' &nbsp; '; continue; }
          if (cmd === 'left' || cmd === 'right') {
            if (tex.slice(i, i + 2) === '\\{' || tex.slice(i, i + 2) === '\\}') {
              out += tex[i + 1];
              i += 2;
            }
            continue;
          }
          if (cmd === 'uparrow') { out += '↑'; continue; }
          if (cmd === 'downarrow') { out += '↓'; continue; }
          if (cmd === 'text') {
            while (i < len && tex[i] === ' ') i += 1;
            var gText = readBraceGroup(tex, i);
            i = gText.next;
            out += '<span class="doc-mtext">' + escapeHtml(gText.content) + '</span>';
            continue;
          }
          if (cmd === 'mathcal') {
            while (i < len && tex[i] === ' ') i += 1;
            var gCal = readBraceGroup(tex, i);
            i = gCal.next;
            out += gCal.content === 'E' ? 'ℰ' : escapeHtml(gCal.content);
            continue;
          }
          if (cmd === 'vec') {
            while (i < len && tex[i] === ' ') i += 1;
            var gVec = readBraceGroup(tex, i);
            i = gVec.next;
            out += convertMathBody(gVec.content) + '&#8407;';
            continue;
          }
          if (cmd === 'overline') {
            while (i < len && tex[i] === ' ') i += 1;
            var gOver = readBraceGroup(tex, i);
            i = gOver.next;
            out += '<span class="doc-overline">' + convertMathBody(gOver.content) + '</span>';
            continue;
          }
          if (cmd === 'sqrt') {
            while (i < len && tex[i] === ' ') i += 1;
            var gSqrt = readBraceGroup(tex, i);
            i = gSqrt.next;
            var innerS = convertMathBody(gSqrt.content);
            out += gSqrt.content.length <= 2 ? ('√' + innerS) : ('√(' + innerS + ')');
            continue;
          }
          if (cmd === 'frac' || cmd === 'dfrac') {
            while (i < len && tex[i] === ' ') i += 1;
            var gNum = readBraceGroup(tex, i);
            i = gNum.next;
            while (i < len && tex[i] === ' ') i += 1;
            var gDen = readBraceGroup(tex, i);
            i = gDen.next;
            out += '<span class="doc-frac"><span class="doc-frac-num">' + convertMathBody(gNum.content) + '</span><span class="doc-frac-den">' + convertMathBody(gDen.content) + '</span></span>';
            continue;
          }
          if (TEX_SYMBOLS[cmd]) {
            out += TEX_SYMBOLS[cmd];
            continue;
          }
          out += escapeHtml(cmd);
          continue;
        }
        i += 1;
        continue;
      }

      if (ch === '{') {
        var grp = readBraceGroup(tex, i);
        i = grp.next;
        if (grp.content === ',') {
          out += ',';
        } else if (grp.content !== '') {
          out += convertMathBody(grp.content);
        }
        continue;
      }

      if (ch === '^') {
        i += 1;
        while (i < len && tex[i] === ' ') i += 1;
        var gSup = readBraceGroup(tex, i);
        i = gSup.next;
        if (gSup.content.trim() === '\\circ') {
          out += '°';
        } else {
          out += '<sup>' + convertMathBody(gSup.content) + '</sup>';
        }
        continue;
      }

      if (ch === '_') {
        i += 1;
        while (i < len && tex[i] === ' ') i += 1;
        var gSub = readBraceGroup(tex, i);
        i = gSub.next;
        out += '<sub>' + convertMathBody(gSub.content) + '</sub>';
        continue;
      }

      if (ch === '-') {
        out += '−';
        i += 1;
        continue;
      }

      out += escapeHtml(ch);
      i += 1;
    }
    return out;
  }

  function formatMathOffline(tex, isDisplay) {
    var html = convertMathBody(String(tex || '').trim());
    if (isDisplay) {
      return '<div class="doc-math-block">' + html + '</div>';
    }
    return '<span class="doc-math-inline">' + html + '</span>';
  }

  function renderInlineMd(rawLine) {
    var tokens = [];
    var placeholderText = String(rawLine || '')
      .replace(/`([^`]+)`/g, function (_, code) {
        var id = '@@LYTOK' + tokens.length + '@@';
        tokens.push('<code>' + escapeHtml(code) + '</code>');
        return id;
      })
      .replace(/\$\$([\s\S]+?)\$\$/g, function (_, tex) {
        var id = '@@LYTOK' + tokens.length + '@@';
        tokens.push(formatMathOffline(tex, false));
        return id;
      })
      .replace(/\$([^$\n]+?)\$/g, function (_, tex) {
        var id = '@@LYTOK' + tokens.length + '@@';
        tokens.push(formatMathOffline(tex, false));
        return id;
      });

    var safe = escapeHtml(placeholderText)
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>');

    return safe.replace(/@@LYTOK(\d+)@@/g, function (_, idx) {
      return tokens[Number(idx)] || '';
    });
  }

  function renderMarkdownOffline(md) {
    var lines = String(md || '').replace(/\r\n/g, '\n').split('\n');
    var html = [];
    var i = 0;

    function isTableLine(line) {
      return /^\s*\|.*\|\s*$/.test(line);
    }

    function isTableSep(line) {
      return /^\s*\|[\s:|\-]+\|\s*$/.test(line) && line.indexOf('-') >= 0;
    }

    function splitTableCells(line) {
      return line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(function (c) {
        return c.trim();
      });
    }

    while (i < lines.length) {
      var line = lines[i];
      var trimmed = line.trim();

      if (!trimmed) {
        i += 1;
        continue;
      }

      /* Khối công thức $$ ... $$ đứng riêng hoặc nhiều dòng */
      if (trimmed.indexOf('$$') === 0) {
        var blockLines = [];
        var rest = trimmed.slice(2);
        if (rest.indexOf('$$') >= 0) {
          var endPos = rest.indexOf('$$');
          html.push(formatMathOffline(rest.slice(0, endPos), true));
          i += 1;
          continue;
        }
        blockLines.push(rest);
        i += 1;
        while (i < lines.length) {
          var t2 = lines[i].trim();
          var closeIdx = t2.indexOf('$$');
          if (closeIdx >= 0) {
            blockLines.push(t2.slice(0, closeIdx));
            i += 1;
            break;
          }
          blockLines.push(t2);
          i += 1;
        }
        html.push(formatMathOffline(blockLines.join(' '), true));
        continue;
      }

      /* Kẻ ngang */
      if (/^---+$/.test(trimmed)) {
        html.push('<hr class="doc-hr">');
        i += 1;
        continue;
      }

      /* Tiêu đề */
      var hMatch = trimmed.match(/^(#{1,4})\s+(.+)$/);
      if (hMatch) {
        var level = hMatch[1].length;
        html.push('<h' + level + '>' + renderInlineMd(hMatch[2]) + '</h' + level + '>');
        i += 1;
        continue;
      }

      /* Bảng Markdown */
      if (isTableLine(line) && i + 1 < lines.length && isTableSep(lines[i + 1])) {
        var headers = splitTableCells(line);
        i += 2;
        var rows = [];
        while (i < lines.length && isTableLine(lines[i])) {
          rows.push(splitTableCells(lines[i]));
          i += 1;
        }
        var tbl = ['<div class="table-wrap"><table><thead><tr>'];
        headers.forEach(function (h) { tbl.push('<th>' + renderInlineMd(h) + '</th>'); });
        tbl.push('</tr></thead><tbody>');
        rows.forEach(function (r) {
          tbl.push('<tr>');
          headers.forEach(function (_, ci) {
            tbl.push('<td>' + renderInlineMd(r[ci] || '') + '</td>');
          });
          tbl.push('</tr>');
        });
        tbl.push('</tbody></table></div>');
        html.push(tbl.join(''));
        continue;
      }

      /* Danh sách (- hoặc 1.) hỗ trợ mục lồng cấp 1 */
      if (/^\s*([-*]|\d+\.)\s+/.test(line)) {
        var isOrdered = /^\s*\d+\./.test(line);
        var listTag = isOrdered ? 'ol' : 'ul';
        var listOut = ['<' + listTag + ' class="doc-list">'];
        while (i < lines.length && /^\s*([-*]|\d+\.)\s+/.test(lines[i])) {
          var cur = lines[i];
          var indent = cur.match(/^(\s*)/)[1].length;
          var itemTxt = cur.replace(/^\s*([-*]|\d+\.)\s+/, '');
          if (indent >= 2) {
            listOut.push('<li class="doc-subitem">' + renderInlineMd(itemTxt) + '</li>');
          } else {
            listOut.push('<li>' + renderInlineMd(itemTxt) + '</li>');
          }
          i += 1;
        }
        listOut.push('</' + listTag + '>');
        html.push(listOut.join(''));
        continue;
      }

      /* Đoạn văn */
      var pLines = [trimmed];
      i += 1;
      while (i < lines.length) {
        var next = lines[i].trim();
        if (!next || /^#{1,4}\s/.test(next) || /^---+$/.test(next) || next.indexOf('$$') === 0 || isTableLine(lines[i]) || /^\s*([-*]|\d+\.)\s+/.test(lines[i])) {
          break;
        }
        pLines.push(next);
        i += 1;
      }
      html.push('<p>' + renderInlineMd(pLines.join(' ')) + '</p>');
    }

    return html.join('\n');
  }

  global.LY_COMMON = {
    ERROR_GROUPS: ERROR_GROUPS,
    PHYSICS_SUBTAGS: PHYSICS_SUBTAGS,
    CHAPTER_NAMES: CHAPTER_NAMES,
    loadStore: loadStore,
    saveStore: saveStore,
    toggleKbCheck: toggleKbCheck,
    addErrorLog: addErrorLog,
    deleteErrorLog: deleteErrorLog,
    recordExamResult: recordExamResult,
    getErrorStats: getErrorStats,
    generateErrorLogMarkdown: generateErrorLogMarkdown,
    exportBackupJSON: exportBackupJSON,
    importBackupJSON: importBackupJSON,
    getTheme: getTheme,
    setTheme: setTheme,
    initTheme: initTheme,
    toggleTheme: toggleTheme,
    initShell: initShell,
    fmt: fmt,
    fmtTrim: fmtTrim,
    fmtSci: fmtSci,
    getColors: getColors,
    setupCanvas: setupCanvas,
    drawArrow: drawArrow,
    drawAxes: drawAxes,
    formatMathOffline: formatMathOffline,
    renderMarkdownOffline: renderMarkdownOffline
  };
})(window);
