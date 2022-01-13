


function getFloat_lat(aLang, aValue, aDecimal) {
    var myRuleLang = getRuleLang(aLang);
    if (myRuleLang !== 'lat') {
        throw 'getFloat_lat rule: ' + myRuleLang;
    }
    var myValue = trim(aValue);
    var myRegex = '^[-]?\\d+\\,\\d{1,' + aDecimal + '}$';
    var myFilter = new RegExp(myRegex);
    if (!myFilter.test(myValue)) {
        throw labelFloat(aLang, myValue, aDecimal);
    }

    if (aDecimal !== 6) {
        var myFloat = parseFloat(myValue.replace(',', '.'));
        if (myFloat <= 0.0) {
            throw labelValueSmaller(aLang, 0.0);
        }
    }
    return myValue;
}



function getFloat_sax(aLang, aValue, aDecimal) {
    //alert('getFloat_sax');
    var myRuleLang = getRuleLang(aLang);
    if (myRuleLang !== 'sax') {
        throw 'getFloat_sax rule: ' + myRuleLang;
    }
    var myValue = trim(aValue);
    var myRegex = '^[-]?\\d+\\.\\d{1,' + aDecimal + '}$';
    var myFilter = new RegExp(myRegex);
    if (!myFilter.test(myValue)) {
        //alert('aDecimal ' + aDecimal);
        throw labelFloat(aLang, myValue, aDecimal);
    }
    if (aDecimal !== 6) {
        if (parseFloat(myValue.replace(',', '.')) <= 0.0) {
            throw labelValueSmaller(aLang, 0.0);
        }
    }
    return myValue;
}






function getFloat_cir(aLang, aValue, aDecimal) {
    //alert('getFloat_cir');
    var myRuleLang = getRuleLang(aLang);
    if (myRuleLang !== 'cir') {
        throw 'getFloat_cir rule: ' + myRuleLang;
    }
    var myValue = trim(aValue);
    var myRegex = '^[-]?\\d+\\,\\d{1,' + aDecimal + '}$';
    var myFilter = new RegExp(myRegex);
    if (!myFilter.test(myValue)) {
        throw labelFloat(aLang, myValue, aDecimal);
    }
    if (aDecimal !== 6) {
        if (parseFloat(myValue.replace(',', '.')) <= 0.0) {
            throw labelValueSmaller(aLang, 0.0);
        }
    }
    return myValue;
}



function getFloat_nip(aLang, aValue, aDecimal) {
    //alert('getFloat_nip');
    //alert('aDecimal = ' + aDecimal);
    var myRuleLang = getRuleLang(aLang);
    if (myRuleLang !== 'nip') {
        throw 'getFloat_nip rule: ' + myRuleLang;
    }
    var myValue = trim(aValue);
    var myRegex = '^[-]?\\d+\\.\\d{1,' + aDecimal + '}$';
    var myFilter = new RegExp(myRegex);
    if (!myFilter.test(myValue)) {
        throw labelFloat(aLang, myValue, aDecimal);
    }
    if (aDecimal !== 6) {
        if (parseFloat(myValue.replace(',', '.')) <= 0.0) {
            throw labelValueSmaller(aLang, 0.0);
        }
    }
    return myValue;
}








function getFloat_arb(aLang, aValue, aDecimal) {
    var myRuleLang = getRuleLang(aLang);
    if (myRuleLang !== 'arb') {
        throw 'getFloat_arb rule: ' + myRuleLang;
    }
    var myValue = trim(aValue);
    var myRegex = '^[-]?\\d+\\,\\d{1,' + aDecimal + '}$';
    var myFilter = new RegExp(myRegex);
    if (!myFilter.test(myValue)) {
        throw labelFloat(aLang, myValue, aDecimal);
    }
    if (aDecimal !== 6) {
        //alert('myValue ' + myValue);
        if (parseFloat(myValue.replace(',', '.')) <= 0.0) {
            throw labelValueSmaller(aLang, 0.0);
        }
    }
    return myValue;
}

