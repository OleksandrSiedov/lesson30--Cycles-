'use strict'

const colorGrid = document.getElementById('colorGrid');

// fillColorGrid(60, 60);

const fill = function (rowCount, colCount) {

  const rowStep = 256 / rowCount;
  const colStep = 256 / colCount;

  let html = '';

  for (let i = 0; i < rowCount; i++) {
    html += '<tr>'

    for (let j = 0; j < colCount; j++) {

      let cellColor = `rgb(${i * rowStep}, ${j * colStep}, 0)`;

      html += `<td style="background:${cellColor}; width: ${colStep * 2}px; height:${rowStep * 2}px"> </td>`;

    }
    html += '</tr>'

  }

  colorGrid.innerHTML = html;

};

fill(60, 60);