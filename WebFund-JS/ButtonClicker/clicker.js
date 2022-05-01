function login(Element) {
    Element.innerText = "Logout";
}

function like(elm) {
    elm.innerText = parseInt(elm.innertext)+1;
    alert ("\n You Liked this Definition!")
}

function hide(Element) {
    Element.remove();
}