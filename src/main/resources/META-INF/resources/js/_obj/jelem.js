
function JElem(aIdentifier) {
    this.__theIdentifier = aIdentifier;
}


JElem.prototype.getIdentifier = function () {
    return this.__theIdentifier;
};

JElem.prototype.getFirst = function () {
    var myElement = $(this.__theIdentifier);
    var myLen = myElement.length;
    if (myLen > 0) {
        return myElement.first();
    }
    else {
        return null;
    }
};



JElem.prototype.getExist = function () {
    var myElement = $('#' + this.__theIdentifier);
    var myLen = myElement.length;
    return myLen > 0;
};






JElem.prototype.doSubmit = function () {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'doSubmit: not found ' + this.__theIdentifier;
    }
    myElement.submit();
};



JElem.prototype.setClick = function (aFunction) {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'setClick: not found ' + this.__theIdentifier;
    }
    myElement.click(aFunction);
};

JElem.prototype.setUnbind = function () {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'setUnbind: not found ' + this.__theIdentifier;
    }
    myElement.unbind('click');
};



JElem.prototype.getAttr = function (aAttr) {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'getAttr: not found ' + this.__theIdentifier;
    }
    var myRet = myElement.attr(aAttr);
    if (myRet === undefined) {
        throw 'getAttr: attr not found ' + aAttr;
    }
    return myRet;
};



JElem.prototype.getElement = function () {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'getElement: not found ' + this.__theIdentifier;
    }
    return myElement;
};



JElem.prototype.doEmpty = function () {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'doEmpty: not found ' + this.__theIdentifier;
    }
    else {
        myElement.empty('slow');
    }
};


JElem.prototype.getHtml = function () {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'getHtml: not found ' + this.__theIdentifier;
    }
    return trim(myElement.html());
};


JElem.prototype.setHtml = function (aData) {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'setHtml: not found ' + this.__theIdentifier;
    }
    myElement.html(aData);
    
};


JElem.prototype.setVal = function (aVal) {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'setVal: not found ' + this.__theIdentifier;
    }
    myElement.val(aVal);
};

JElem.prototype.setAttr = function (aKey, aVal) {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'setAttr: not found ' + this.__theIdentifier;
    }
    myElement.attr(aKey, aVal);
};


JElem.prototype.doEnable = function () {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'doEnable: not found ' + this.__theIdentifier;
    }
    else {
        myElement.prop('disabled', false);
    }
};

JElem.prototype.doDisable = function () {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'doDisable: not found ' + this.__theIdentifier;
    }
    else {
        myElement.prop('disabled', true);
    }
};



JElem.prototype.tryId = function () {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        return 0;
    }
    var myRet = parseInt(myElement.val());
    if (isNaN(myRet)) {
        return 0;
    }
    else {
        return myRet;
    }
};

JElem.prototype.doRemove = function (aName) {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'doRemove: not found ' + this.__theIdentifier;
    }
    myElement.find(aName).remove();
};


JElem.prototype.setBlur = function () {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'setBlur: not found ' + this.__theIdentifier;
    }
    return myElement.blur();
};



JElem.prototype.doRemove = function (aTag) {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'doRemove: not found ' + this.__theIdentifier;
    }
    myElement.find(aTag).remove();
};


JElem.prototype.setAppend = function (aElement) {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'setAppend: not found ' + this.__theIdentifier;
    }
    myElement.append(aElement);
};




JElem.prototype.isEmptyVal = function () {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'isEmptyVal: not found ' + this.__theIdentifier;
    }
    var myVal = myElement.val();
    if (myVal === null) {
        throw 'isEmptyVal: val null found';
    }
    var myLen = myVal.length;
    return myLen === 0;
};

JElem.prototype.getBox = function () {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'getBox: not found ' + this.__theIdentifier;
    }
    return new Box(this.__theIdentifier).getValue();
};

JElem.prototype.tryBox = function () {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        return 'f';
    }
    return new Box(this.__theIdentifier).getValue();
};







JElem.prototype.doHide = function (aDuration) {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'doHide: not found ' + this.__theIdentifier;
    }
    myElement.fadeOut(aDuration);
};

JElem.prototype.doShow = function (aDuration) {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'doShow: not found ' + this.__theIdentifier;
    }
    myElement.fadeIn(aDuration);
};


JElem.prototype.hasAttr = function (aAttr) {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'hasAttr: not found ' + this.__theIdentifier;
    }
    var myAttr = myElement.attr(aAttr);
    if (typeof myAttr !== typeof undefined && myAttr !== false) {
        return true;
    }
    else {
        return false;
    }
};


JElem.prototype.setCheck = function (aValue) {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'setCheck: not found ' + this.__theIdentifier;
    }
    new Box(this.__theIdentifier).setCheck(aValue);
};

JElem.prototype.getCheck = function () {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'getCheck: not found ' + this.__theIdentifier;
    }
    var mySelected = myElement.is(':checked');
    return mySelected;
};


JElem.prototype.getVal = function () {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'getVal: not found ' + this.__theIdentifier;
    }
    return myElement.val();
};

JElem.prototype.rmAttr = function (aAttr) {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'rmAttr: not found ' + this.__theIdentifier;
    }
    myElement.removeAttr(aAttr);
};




JElem.prototype.setWarn = function (aMessage) {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'setWarn: not found ' + this.__theIdentifier;
    }
    var myIdAttr = myElement.attr('id');
    var myWarn = new Warn(myIdAttr);
    myWarn.addWarn(aMessage);
};


JElem.prototype.removeWarn = function () {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'removeWarn: not found ' + this.__theIdentifier;
    }
    var myIdAttr = myElement.attr('id');
    var myWarn = new Warn(myIdAttr);
    myWarn.removeWarn();
};




JElem.prototype.doModal = function (aParam) {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'doModal: not found ' + this.__theIdentifier;
    }
    if (aParam === true) {
        myElement.modal();
    }
    else {
        myElement.modal('hide');
    }
};



JElem.prototype.setTimeVal = function () {
    var myElement = $('#' + this.__theIdentifier);
    if (myElement.length === 0) {
        throw 'setVal: not found ' + this.__theIdentifier;
    }
    var myValue = myElement.val();
    if (myValue.length > 0) {

        var myNewVal = timeString(myValue);
        myElement.val(myNewVal);
    }
};
