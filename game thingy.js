//-    -
function myFunction() {
    if (x.innerHTML === x.innerHTML) {
        x.innerHTML = attackEnemy;
        fade_in();
        fade_in2();
    }
}

function fade_in() {
    var q = document.getElementById("enemyAttacked");
    var v = document.getElementById("enemyAttacked1");
    if (q.outerHTML === q.outerHTML) {
        q.outerHTML = `<td id="enemyAttacked"><div align="center" color: white;">You have attacked the enemy!</div></td>`;
        setTimeout(function () { y.innerHTML = enemyAttack; }, 1000);
    }
}
function fade_in2() {
    var v = document.getElementById("enemyAttacked1");
    var q = document.getElementById("enemyAttacked");
    var vv = document.getElementById("enemyAttacked1");
    var qq = document.getElementById("enemyAttacked");
    if (v.innerHTML === 'The enemy has attacked you!') {
        setTimeout(function () { v.outerHTML = `<div id="enemyAttacked1" align="center" style="color: white;">The enemy has attacked you!</div>`; }, 1000);
        setTimeout(function () {document.getElementById("enemyAttacked").outerHTML = `<td id="enemyAttacked"><div align="center" display="none" color: white;">You have attacked the enemy!</div></td>`; }, 2000);
        setTimeout(function () {document.getElementById("enemyAttacked1").outerHTML = `<div id="enemyAttacked1" align="center" display="none" style="color: white;">The enemy has attacked you!</div>`; }, 2000);
    }
}


function potion255() {
    var x = document.getElementById("potion25");
    if (x.innerHTML === "Heal 25 (5)") {
        x.innerHTML = `<button onclick="potion254()" id="potion25">Heal 25 (4)</button>`;
    }
}
function potion254() {
    var x = document.getElementById("potion25");
    if (x.innerHTML === "Heal 25 (4)") {
        x.innerHTML = `<button onclick="potion253()" id="potion25">Heal 25 (3)</button>`;
    }
}
function potion253() {
    var x = document.getElementById("potion25");
    if (x.innerHTML === "Heal 25 (3)") {
        x.innerHTML = `<button onclick="potion252()" id="potion25">Heal 25 (2)</button>`;
    }
}
function potion252() {
    var x = document.getElementById("potion25");
    if (x.innerHTML === "Heal 25 (2)") {
        x.innerHTML = `<button onclick="potion251()" id="potion25">Heal 25 (1)</button>`;
    }
}
function potion251() {
    var x = document.getElementById("potion25");
    if (x.innerHTML === "Heal 25 (1)") {
        x.outerHTML = "";
    }
}

var x = document.getElementById("enemy");
var xx = x.innerHTML;
var xxx = x.innerHTML - 10;
var y = document.getElementById("player");
var yy = y.innerHTML;
var yyy = y.innerHTML - 15;
var z = document.getElementById("enemyAttacked");
var zz = z.innerHTML;
var ba = document.getElementById("button");
var attackEnemy = Math.floor(Math.random() * (xx - xxx + 1) + xxx);
var enemyAttack = Math.floor(Math.random() * (yy - yyy + 1) + yyy);
