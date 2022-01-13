
function ___popupContent(aData) {
    var myJElem = new JElem('div_modal');
    var myElement = myJElem.getElement();
    myElement.html(aData);
    new JElem('boxModal').doModal(true);
}

function popupClose() {
    new JElem('boxModal').doModal(false);
}

