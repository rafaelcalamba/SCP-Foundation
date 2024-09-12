function formatDateTime(ms) {
    var date = new Date(ms);
    var str = '';
    str += date.getFullYear();
    str += '-';
    if (date.getMonth() < 9) str += '0';
    str += (date.getMonth() + 1);
    str += '-';
    if (date.getDate() < 10) str += '0';
    str += date.getDate();
    str += ' ';
    if (date.getHours() < 10) str += '0';
    str += date.getHours();
    str += ':';
    if (date.getMinutes() < 10) str += '0';
    str += date.getMinutes();
    str += ':';
    if (date.getSeconds() < 10) str += '0';
    str += date.getSeconds();

    return str;
}

function formatTimer(seconds) {
    var minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    var hours = Math.floor(minutes / 60)
    minutes = minutes % 60;
    var text = '';
    if (hours > 0) {
        text += hours;
        text += ':';
    }
    text += minutes < 10 ? '0' + minutes : minutes;
    text += ':';
    text += seconds < 10 ? '0' + seconds : seconds;

    return text;
}

var alt = true;

function tick() {
  var ms = new Date().getTime();
  var elem = $('timestamp');
  elem.innerHTML = formatDateTime(ms);
}

function staticTick() {
  var ms = new Date().getTime();
  var pos = -Math.floor(Math.random() * 2700);
  var elem = $('static');
  elem.style.backgroundPosition = '' + pos + 'px 0';
  staticId = setTimeout('staticTick()', 50);
}

function animTick() {
  var elem = $('silo');
  var pos = alt ? -300 : 0;
  elem.style.backgroundPosition = '' + pos + 'px 0';
  alt = alt ? false : true;
}

var interruptId = 0;
var overlay = 0;

function interruptIn() {
  Effect.Appear('overlay0', {
      duration: 0.50,
      afterFinish: function() {
        setTimeout('interruptOut()', 125 + Math.floor(Math.random() * 125));
      }
  });
}

function interruptOut() {
  var elem;
  if (overlay > 0) {
    elem = $('overlay' + overlay);
    elem.style.display = 'none';
    overlay = 0;
  } else {
    var val = Math.floor(Math.random() * 1400);
    //if (val > 900) overlay = 1;
    if (val > 1200) overlay = 1;
    else if (val > 1000) overlay = 2;
    else if (val > 800) overlay = 3;
    else if (val > 600) overlay = 4;
    else if (val > 400) overlay = 5;
    else if (val > 200) overlay = 6;
    else overlay = 7;
    elem = $('overlay' + overlay);
    elem.style.display = 'block';
  }
  Effect.Fade('overlay0', {
    duration: 2.00,
    afterFinish: function() {
      var interval = overlay > 0 ? Math.floor(Math.random() * 10000) : (10000 + Math.floor(Math.random() * 50000));
      interruptId = setTimeout('interruptIn()', interval);
    }
  });
}

tick();
var tickId = setInterval('tick()', 1000);
var staticId = setTimeout('staticTick()', 50);
var animId = setInterval('animTick()', 1234);
interruptId = setTimeout('interruptIn()', 5000+Math.floor(Math.random() * 5000));
