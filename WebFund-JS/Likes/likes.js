// Like Counter //

var clicks = 9;

function onClick() {
    clicks += 1;
    var counter1 = document.querySelector("#clicks");
    counter1.innerText = clicks;
};

var clicks2 = 8;

function onClick2() {
    clicks2 += 1;
    var counter2 = document.querySelector("#clicks2");
    counter2.innerText = clicks2;
};

var clicks3 = 14;

function onClick3() {
    clicks3 += 1;
    var counter3 = document.querySelector("#clicks3");
    counter3.innerText = clicks3;
};

function cookieGo (element) {
    var cookie1 = document.querySelector('.cookie');
    cookie1.remove();
}