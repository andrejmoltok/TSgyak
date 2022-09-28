var count = 0;

function display(val) {
  document.getElementById("textval").value += val;
}

function evaluation() {
  let x = document.getElementById("textval").value;
  let y = eval(x);
  document.getElementById("textval").value = y;
  return count++;
}

function clr() {
  document.getElementById("textval").value = "";
}

var tr = Array.from(document.getElementsByTagName('tr'));
//console.log(tr.length);

var row1 = ['*','7','8','9'];
var row2 = ['/','4','5','6'];
var row3 = ['+','1','2','3'];
var row4 = ['-','.','0','='];

for (let j = 0; j < row1.length; j++) {
  var button = document.createElement('input');
  var td = document.createElement('td');
  button.setAttribute('type','button');
  button.value = row1[j];
  tr[1].appendChild(td);
  td.appendChild(button);
}

for (let k = 0; k < row2.length; k++) {
  var button = document.createElement('input');
  var td = document.createElement('td');
  button.setAttribute('type','button');
  button.value = row2[k];
  tr[2].appendChild(td);
  td.appendChild(button);
}

for (let l = 0; l < row3.length; l++) {
  var button = document.createElement('input');
  var td = document.createElement('td');
  button.setAttribute('type','button');
  button.value = row3[l];
  tr[3].appendChild(td);
  td.appendChild(button);
}

for (let m = 0; m < row4.length; m++) {
  var button = document.createElement('input');
  var td = document.createElement('td');
  button.setAttribute('type','button');
  button.value = row4[m];
  tr[4].appendChild(td);
  td.appendChild(button);
}

var TDs = Array.from(document.getElementsByTagName('input'));
var selectTDs = TDs.slice(2,TDs.length);

for (let a = 0; a < selectTDs.length-1; a++) {
  selectTDs[a].addEventListener('click',function() {
    check();
    display(selectTDs[a].value);
    count = 0;
  });
}

selectTDs[15].addEventListener('click',function() {
  evaluation();
});

function check() {
  if (count > 0) {
    clr();
  }
}