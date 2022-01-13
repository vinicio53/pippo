
function Warn(aIdInput) {
    if ((typeof aIdInput) !== 'string') {
        throw 'Idinput not a string ' + aIdInput;
    }
    this.__theIdInput = '#' + aIdInput;
    if ($(this.__theIdInput).length === 0) {
        throw 'input text not exist: ' + this.__theIdInput;
    }
}




Warn.prototype.addWarn = function (aMessage) {
    //Label section
    var myParent = this._getParent();
    var myChildren = myParent.children('h5');
    if (myChildren.length === 0) {
        var myInputElement = $(this.__theIdInput);
        myInputElement.focus();
        myInputElement.addClass('warning');
        myInputElement.after('<h5>' + aMessage + '</h5>');
    }
};







Warn.prototype.hasWarn = function () {
    var myParent = this._getParent();
    var myChildren = myParent.children('h5');
    var myLen = myChildren.length;
    var myRet = (myLen !== 0);
    return myRet;
};


Warn.prototype.removeWarn = function () {
    //alert('removeWarn');
    var myInputElement = $(this.__theIdInput);
    myInputElement.removeClass();//04-05-2021
    
    var myParent = this._getParent();
    var myChildren = myParent.children('h5');
    if (myChildren.length > 0) {
        var myElement = myChildren.first();
        myElement.remove();
    }
};


Warn.prototype._getParent = function () {
    //alert('getParent');
    var myInputElement = $(this.__theIdInput);
    var myParentElement = myInputElement.parent();
    //return myParentElement;
    return myParentElement;
};


