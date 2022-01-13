
function CheckComplex(aIdAttr) {//todo test
    var myTokens = new Tokens(aIdAttr, '_', 5);
    //
    this.theIdPlugin = myTokens.next();
    this.theIdTable = myTokens.next();
    this.theIdCol = myTokens.next();
    this.theIdData = myTokens.next();
}



CheckComplex.prototype.doCheckComplex = function () {
    var myIdPlugin = parseInt(this.theIdPlugin);
    switch (myIdPlugin) {
        case 50120:
            return this.__check50120Cx();
        case 50124:
            return this.__chek50124Cx();
        case 60100:
            return this.__check60100Cx();
        default:
            throw 'idplugin not implemented: ' + myIdPlugin;
    }
};


CheckComplex.prototype.__check50120Cx = function () {
    var myBeg = new JElem('vcmp' + this.theIdTable + '_' + this.theIdCol + '_1_' + this.theIdData).getVal();
    var myEnd = new JElem('vcmp' + this.theIdTable + '_' + this.theIdCol + '_2_' + this.theIdData).getVal();
    var myRet = compareShortDate(theLang, myBeg, myEnd);
    if (!myRet) {
        myAlert(labelDateStartEnd(theLang));
    }
    return myRet;
};

CheckComplex.prototype.__chek50124Cx = function () {
    var myDate = new JElem('vcmp' + this.theIdTable + '_' + this.theIdCol + '_1_' + this.theIdData).getVal();
    var myTime = new JElem('vcmp' + this.theIdTable + '_' + this.theIdCol + '_2_' + this.theIdData).getVal();
    var myRet = compareDateTimeCurrent(theLang, myDate, myTime);
    if (!myRet) {
        myAlert(labelDateStartEnd(theLang));
    }
    return myRet;
};


CheckComplex.prototype.__check60100Cx = function () {
    var myNum1 = new JElem('vwiz' + this.theIdTable + '_' + this.theIdCol + '_1_' + this.theIdData).getVal();
    var myIdentifier2 = 'vwiz' + this.theIdTable + '_' + this.theIdCol + '_2_' + this.theIdData;
    var myNum2 = new JElem(myIdentifier2).getVal();
    var myNumber1 = parseInt(myNum1);
    var myNumber2 = parseInt(myNum2);
    var myRet = myNumber1 >= myNumber2;
    if (!myRet) {
        var myWarn = new Warn(myIdentifier2);
        myWarn.addWarn(labelOperationNotPermitted(theLang) + ' ' + myNumber2 + ' > ' + myNumber1);
    }
    return myRet;
};

