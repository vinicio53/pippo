

function JFunct(aFunct, aParam) {
    this.__theFunct = aFunct;
    this.__theParam = aParam;
}
JFunct.prototype.getFunct = function () {
    return this.__theFunct;
};
JFunct.prototype.getParam = function () {
    return this.__theParam;
};
 

////////////////////////////////////////////////////////////////////////////////
function JConfirm(aTitle, aJFunct1, aJFunct2) {
    this.__theJFunct1 = aJFunct1;
    this.__theJFunct2 = aJFunct2;
    new JElem('div_title').setHtml(aTitle);
    new JElem('confirmModal').doModal(true);
}

JConfirm.prototype.doApply1 = function () {
    if (this.__theJFunct1 !== null) {
        this.__theJFunct1.getFunct().apply(this, [this.__theJFunct1.getParam()]);
    }
    new JElem('confirmModal').doModal(false);
};


JConfirm.prototype.doApply2 = function () {
    this.__theJFunct2.getFunct().apply(this, [this.__theJFunct2.getParam()]);
    new JElem('confirmModal').doModal(false);
};
