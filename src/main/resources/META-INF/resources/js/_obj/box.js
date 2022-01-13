
function Box(aIdentifier) {
    if ((typeof aIdentifier) !== 'string') {
        throw 'Identifier not a string ' + aIdentifier;
    }
    var myJElem = new JElem(aIdentifier);
    if(!myJElem.getExist()) {
        throw 'Box: identifier not exist ' + aIdentifier;
    }
    this.__theIdentifier = '#' + aIdentifier;
}

Box.prototype.setHide = function () {
    var myElement = $(this.__theIdentifier);
    myElement.hide();
};



Box.prototype.getValue = function () {
    var myElement = $(this.__theIdentifier);
    var mySelected = myElement.is(':checked');
    if (mySelected) {
        return 't';
    }
    return 'f';
};


Box.prototype.setCheck = function (aValue) {
    if ((typeof aValue) !== 'boolean') {
        throw 'value not a boolean ' + aValue;
    }
    //alert('setCheck');
    var myElement = $(this.__theIdentifier);
    myElement.prop('checked', aValue);
};


Box.prototype.setEnabled = function (aValue) {
    if ((typeof aValue) !== 'boolean') {
        throw 'value not a boolean ' + aValue;
    }
    var myElement = $(this.__theIdentifier);
    if (aValue === true) {
        myElement.removeAttr('disabled');
    }
    else {
        myElement.attr('disabled', '');
    }
};



