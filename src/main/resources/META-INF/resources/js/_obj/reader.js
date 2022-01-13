

function Reader(aIdInput) {
    if ((typeof aIdInput) !== 'string') {
        throw 'idinput not a string ' + aIdInput;
    }
    this.__theIdInput = aIdInput;
    this.__theWarn = new Warn(aIdInput);
}





Reader.prototype.setWarn = function(aMessage) {
    //return his.__theWarn;
    this.__theWarn.addWarn(aMessage);
};





Reader.prototype.getIdVal = function(aLang) {
    
    if ((typeof aLang) !== 'string') {
        throw 'lang not a string ' + aLang;
    }
    var myJElem = new JElem(this.__theIdInput);
    var myInputElement = myJElem.getElement();
    var myObligatory = myInputElement.attr('obligatory');
    //alert('myObligatory ' + myObligatory);
    if (myObligatory === undefined){
        throw 'obligatory not found';
    }
    this.__theWarn.removeWarn();
    //
    var myIdVal = myInputElement.attr('idval');
    if (myIdVal === undefined) {
        this.__theWarn.addWarn(labelValueNotFound(aLang));
        return null;
    }
    var myValue = trim(myIdVal);
    if (myObligatory === 't') {
        if (myValue.length === 0) {
            this.__theWarn.addWarn(labelValueNotFound(aLang));
            return null;
        }
        return myValue;
    }
    else {
        if (myValue.length === 0) {
            return myValue;
        }
        else {
            if (myValue.length === 0) {
                this.__theWarn.addWarn(labelValueNotFound(aLang));
                return null;
            }
            return myValue;
        }
    }

};

Reader.prototype.getCheck = function(aLang) {
    //alert('getCheck: ' + aLang);
    if ((typeof aLang) !== 'string') {
        throw 'lang not a string ' + aLang;
    }
    
    var myJElem = new JElem(this.__theIdInput);
    var myInputElement = myJElem.getElement();
    var myObligatory = myInputElement.attr('obligatory');
    //alert('myObligatory =' + myObligatory);
    if (myObligatory === undefined){
        throw 'obligatory not found';
    }
    //
    this.__theWarn.removeWarn();
    var myValue = this.__getVal(myInputElement);
    //alert('myValue =====' + myValue);
    try {
        var myIdPlugin = myInputElement.attr('idnumber');
        //alert('myIdPlugin =' + myIdPlugin);
        var myPlugType = new PlugType(aLang, parseInt(myIdPlugin));
        //alert('myPlugType =' + myPlugType);
        if (myObligatory === 't') {
            var myRet = this.__valueIdPlugin(myPlugType, myValue);
            //alert('myRet ======' + myRet);
            return myRet;
        }
        else {
            if (myValue.length === 0) {
                return myValue;
            }
            else {
                return this.__valueIdPlugin(myPlugType, myValue);
            }
        }
    }
    catch (e) {
        //alert('ett =' + e);
        this.__theWarn.addWarn(e.toString());
        return undefined;
    }

};


Reader.prototype.__getVal = function(aElement) {
    //alert('__getVal');
    var myIdVal = aElement.attr('idval');
    if(myIdVal !== undefined){
        //alert('myIdVal =' + myIdVal);
        return myIdVal;
    }
    var myValue = aElement.val();
    //alert('myValue =' + myValue);
    return myValue;
};

Reader.prototype.__valueIdPlugin = function(aPlugType, aValue) {
    //alert('__valueIdPlug');
    //alert('aPlugType =' + aPlugType);
    //alert('aValue =' + aValue);
    try {
        var myRet = aPlugType.get(aValue);
        return myRet;
    }
    catch (e) {
        this.__theWarn.addWarn(e.toString());
        return null;
    }
};


