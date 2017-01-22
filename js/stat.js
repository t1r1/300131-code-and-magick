'use strict';

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'White';
  ctx.fillRect(100, 10, 420, 270);
  ctx.strokeStyle = 'Black';
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 55);
  var max = -1;
  for (var each = 0; each < times.length; each++ ) {
    var maxTime = times[each];
    if (maxTime > max) {
      max = maxTime;
    }
  }
  var histoHeight = 140;
  var histoX = 140;
  var step = histoHeight / max; // не стала делать нmin, как в вебинаре. как правильно?
  var columnIndent = 90;

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];
    var height = step * time;

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = ['rgba(0,0,', ((Math.random() * 5) * 50).toFixed(0), ',1)'].join('');
    }
    ctx.fillRect(histoX + columnIndent * i, 240 - height, 40, height);
    ctx.fillStyle = '#000';
    ctx.fillText(name, histoX + columnIndent * i, 100 + histoHeight + 20);
    ctx.fillText(time.toFixed(0), histoX + columnIndent * i, 230 - height);
  }
};
