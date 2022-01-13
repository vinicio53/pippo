



 function Tokens(aString, aChar, aOffset) {
    if ((typeof aOffset) !== 'number') {
        throw 'aOffset not a number ' + aOffset;
    }
    //
    if (aChar.length !== 1) {
        throw 'cahar length error: > ' + aChar.length;
    }
    if (aOffset > aString.length) {
        throw 'offset length error: ' + aOffset + ' > ' + aString.length;
    }
    //
    this.__theChar = aChar;
    this.__theValues = aString.substring(aOffset, aString.length);
};




Tokens.prototype.next = function () {
    //alert('next');
    if (this.__theValues === null) {
        return null;
    }

    var myIndexOf = this.__theValues.indexOf(this.__theChar);
    if (myIndexOf === -1) {
        var myRet = this.__theValues;
        this.__theValues = null;
        return myRet;
    }
    var myRet = this.__theValues.substring(0, myIndexOf);
    this.__theValues = this.__theValues.substring(myIndexOf + 1, this.__theValues.length);
    return myRet;
};


