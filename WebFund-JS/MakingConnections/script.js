console.log("page loaded...");

function hide(element) {
    element.remove();
}

// funcitons for accept and decline //

function decline (elem) {
    var contLine = document.querySelector(elem);
    contLine.remove ();
    var reqTop = document.querySelector('.req1');
    reqTop.innerText = parseInt (reqTop.innerText) - 1;
} 

function accept (elem) {
    var contLine = document.querySelector(elem);
    contLine.remove ();
    var reqTop = document.querySelector('.req1');
    reqTop.innerText = parseInt (reqTop.innerText) - 1;
    var myCon = document.querySelector ('.uCon');
    myCon.innerText = parseInt (myCon.innerText) + 1;
}

// function to change Name //

function changeName (elem) {
    var uName = document.querySelector (elem);
    uName.innerText = "The one who Stares";
}