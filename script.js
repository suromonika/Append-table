'use strict';

//Add new row
function addData() {
  var table = document.getElementById('myTable');
  if (
    document.getElementById('name').value == 0 ||
    document.getElementById('surname').value == 0 ||
    document.getElementById('age').value <= 0
  ) {
    alert('Įveskite duomenis');
  } else {
    var rowCount = table.rows.length;
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = document.getElementById('name').value;
    cell2.innerHTML = document.getElementById('surname').value;
    cell3.innerHTML = document.getElementById('age').value;
  }
}

//Delete first row
function removeFirstRow(myTable) {
  var table = document.getElementById('myTable');
  var rowCount = table.rows.length;
  if (rowCount > 1) {
    table.deleteRow(1);
  } else {
    alert('Nebėra ką trinti.');
  }
}

//Delete last row
function removeLastRow(myTable) {
  var table = document.getElementById('myTable');
  var rowCount = table.rows.length;
  if (rowCount > 1) {
    table.deleteRow(rowCount - 1);
  } else {
    alert('Nebėra ką trinti.');
  }
}
