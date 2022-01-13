
function __doMessage(aMessage) {
    var myJElem = new JElem('div_message');
    myJElem.setHtml(aMessage);
    myJElem.doShow('slow');
    setTimeout(function () {
        myJElem.doHide('slow');
    }, 1240);
}



