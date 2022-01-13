

function Writer(aIdInput) {
    if ((typeof aIdInput) !== 'string') {
        throw 'idinput not a string ' + aIdInput;
    }
    this._theWarn = new Warn(aIdInput);
    //this.__theIdInput = JElem(aIdInput);
    this._theJElem = new JElem(aIdInput);
}



Writer.prototype._setIdVal = function (aValue, aIdVal) {
    var myHasAttr = this._theJElem.hasAttr('type');
    if(!myHasAttr){
        this._theJElem.doRemove('option');
        var myNewVal = $('<option>', {text: aValue, value: aIdVal});
        this._theJElem.setAppend(myNewVal);
        
    }
    var myIdVal = aIdVal;
    if ((typeof aIdVal) === 'string') {
        myIdVal = trim(aIdVal);
    }
    this._theJElem.setAttr('idval', myIdVal);
    this._theWarn.removeWarn();
    //alert('ccheckkk');
    //var myVal = trim(aValue);
    //this._theJElem.setVal(myVal);
};



Writer.prototype._setVal = function (aVal) {
    this._theWarn.removeWarn();
    var myVal = trim(aVal);
    if (this._theJElem.hasAttr('maxlength')) {
        var myMaxLength = this._theJElem.getAttr('maxlength');
        if (myVal.length > myMaxLength) {
            this._theWarn.addWarn('length error');
        }
    }
    this._theJElem.setVal(myVal);
};





Writer.prototype.doReset = function () {
    this._theWarn.removeWarn();
    //var myElement = $(this.__theIdInput);
    this._theJElem.setVal('');
    if(this._theJElem.hasAttr('idval')){
        this._setIdVal('', '');
    }
    /*
    var myIdVal = this._theJElem.getAttr('idval');
    alert('myIdVal ===' + myIdVal);
    
    if (myIdVal !== undefined) {
        this._setIdVal('', '');
    }*/
};

