

function checkNumber(aLang, aValue, aInf, aSup) {
    //alert('checkNumber');
    if (aInf === undefined) {
        throw 'Inf undefined found';
    }
    if (aSup === undefined) {
        throw 'Inf undefined found';
    }
    if ((typeof aValue) !== 'string') {
        throw 'typeof not a string ' + aValue;
    }
    var myValue = trim(aValue);
    var myFilter = /^(\+|\-)?\d+$/;
    if (!myFilter.test(myValue)) {
        throw labelValueIsntInteger(aLang, myValue);
    }
    var myRet = parseInt(myValue);
    if (aInf !== null) {
        if (myRet < aInf) {
            throw labelValueSmaller(aLang, aInf);
        }
    }
    if (aSup !== null) {
        if (myRet > aSup) {
            throw labelValueGreater(aLang, aSup);
        }
    }
    return myRet;
}



function checkPhone(aLang, aValue) {
    if ((typeof aValue) !== 'string') {
        throw 'typeof not a string ' + aValue;
    }
    var myValue = trim(aValue);
    //alert(myValue);
    var myFilter = /^(\d{3,4}|([+]\d{1,3})?[ ]?\d{2,4}[ ,\-,\/]{0,1}\d{6,9})$/;

    if (!myFilter.test(myValue)) {
        throw labelValueIsntPhone(aLang, aValue);

    }
    return myValue;
}

function checkEmail(aLang, aValue) {
    if ((typeof aValue) !== 'string') {
        throw 'typeof not a string ' + aValue;
    }
    var myValue = trim(aValue);
    var myFilter = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$/;
    if (!myFilter.test(myValue)) {
        //throw 'value isn\'t a email ' + myValue;
        throw labelValueIsntEmail(aLang, aValue);
    }
    return myValue;
}


function checkDouble(aValue) {
    //alert('checkDouble');
    //alert('aValue =' + aValue);
    if ((typeof aValue) !== 'string') {
        throw 'typeof not a string ' + aValue;
    }
    var myValue = trim(aValue);
    try {
        var myFilter = new RegExp('^[-+]?\\d+$');
        if (myFilter.test(myValue)) {
            //throw 'value isn\'t a integer ' + myValue;
            return parseInt(aValue);
        }
    }
    catch (e) {
        //alert(e);
    }
    //alert(550);
    var myFilter = new RegExp('^[-+]?\\d+.?\\d+$');
    //alert(551);
    if (!myFilter.test(myValue)) {
        //alert(552);
        throw 'value isn\'t a float ' + myValue;
    }
    var myRet = parseFloat(myValue);
    //alert(myRet);
    return myRet;
}









function checkStrEqual(aLang, aValue, aLen) {
    //alert('aLang =' + aLang);
    var myValue = trim(aValue);
    if (myValue.length !== aLen) {
        throw labelValueLengthIsntLen(aLang, myValue, aLen);
    }
    return myValue;
}















function checkStrInfinity(aLang, aValue) {
    //alert('aLang =' + aLang);
    var myValue = trim(aValue);
    if (myValue.length === 0) {
        throw labelValueNotFound(aLang);
    }
    return myValue;
}





function checkStrLessEqual(aLang, aValue, aLen) {
    //alert('aLang =' + aLang);
    var myValue = trim(aValue);
    if (myValue.length === 0) {
        throw labelValueNotFound(aLang);
    }
    if (myValue.length > aLen) {
        throw labelValueLengthGreater(aLang, aLen);
    }
    return myValue;
}



function checkValue(aLang, aValue) {
    //alert('aLang =' + aLang);
    var myValue = trim(aValue);
    if (myValue.length === 0) {
        throw labelValueNotFound(aLang);
    }
    return myValue;
}

























function checkFloat(aLang, aValue, aDecimal) {
    if (aDecimal < 1) {
        throw 'getFloat aDecimal < 1: ' + aDecimal;
    }
    var myLang = trim(aLang);
    var myValue = trim(aValue);
    var myRuleLang = getRuleLang(myLang);
    switch (myRuleLang)
    {
        case 'lat':
            return getFloat_lat(myLang, myValue, aDecimal);
        case 'sax':
            return getFloat_sax(myLang, myValue, aDecimal);
        case 'cir':
            return getFloat_cir(myLang, myValue, aDecimal);
        case 'nip':
            return getFloat_nip(myLang, myValue, aDecimal);
        case 'arb':
            return getFloat_arb(myLang, myValue, aDecimal);
        default:
            throw 'getFloat rule not found: ' + myRuleLang;
    }
}








function checkShortDate(aLang, aValue) {
    //alert('getShortdate');
    var myLang = trim(aLang);
    var myValue = trim(aValue);
    var myRuleLang = getRuleLang(myLang);
    //alert(myRule);
    switch (myRuleLang)
    {
        case 'lat':
            return getShortDate_lat(myLang, myValue);
        case 'sax':
            return getShortDate_sax(myLang, myValue);
        case 'cir':
            return getShortDate_cir(myLang, myValue);
        case 'nip':
            return getShortDate_nip(myLang, myValue);
        case 'arb':
            return getShortDate_arb(myLang, myValue);
        default:
            throw 'getShortDate rule not found: ' + myRuleLang;
    }
}





function checkLongDate(aLang, aValue) {
    //alert('checkLongDate');
    var myLang = trim(aLang);
    var myValue = trim(aValue);
    var myRuleLang = getRuleLang(myLang);
    //alert('myRuleLang =' + myRuleLang);
    switch (myRuleLang) {
        case 'lat':
            //return 
            regex_longdate_lat(myLang, myValue);
            break;
        case 'sax':
            //return 
            regex_longdate_sax(myLang, myValue);
            break;
        case 'cir':
            //return 
            regex_longdate_cir(myLang, myValue);
            break;
        case 'nip':
            //return 
            regex_longdate_nip(myLang, myValue);
            break;
        case 'arb':
            //return 
            regex_longdate_arb(myLang, myValue);
            break;
        default:
            throw 'checkkLongDate: rule not found ' + myRuleLang;
    }
    return myValue;
}









function checkInterval4(aLang, aValue, aInf) {
    var myLang = trim(aLang);
    var myValue = trim(aValue);
    var V_LEN = 5;
    if (myValue.length !== V_LEN) {
        throw labelValueLengthIsntLen(aLang, aValue, V_LEN);
    }

    var myRuleLang = getRuleLang(myLang);
    switch (myRuleLang)
    {
        case 'lat':
            regex_interval4_lat(aLang, myValue, aInf);
            break;
        case 'sax':
            regex_interval4_sax(aLang, myValue, aInf);
            break;
        case 'cir':
            regex_interval4_cir(aLang, myValue, aInf);
            break;
        case 'nip':
            regex_interval4_nip(aLang, myValue, aInf);
            break;
        case 'arb':
            regex_interval4_arb(aLang, myValue, aInf);
            break;
        default:
            throw 'getInterval4 rule not found: ' + myRuleLang;
    }
    return myValue;
}


function checkConstrainDate(aLang, aValue) {
    //alert('getConstrainDate');
    var myLang = trim(aLang);
    var myValue = trim(aValue);
    var myRuleLang = getRuleLang(myLang);
    switch (myRuleLang)
    {
        case 'lat':
            return getConstrainDate_lat(myLang, myValue);
        case 'sax':
            return getConstrainDate_sax(myLang, myValue);
        case 'cir':
            return getConstrainDate_cir(myLang, myValue);
        case 'nip':
            return getConstrainDate_nip(myLang, myValue);
        case 'arb':
            return getConstrainDate_arb(myLang, myValue);
        default:
            throw 'getConstrainDate rule not found: ' + myRuleLang;
    }
}

