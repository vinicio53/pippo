

//todo test
function LangTime(aLang) {
    if ((typeof aLang) !== 'string') {
        throw 'LangTime not a string ' + aLang;
    }
    this.__theLang = aLang;
}
;

LangTime.prototype.getShortDate = function (aValue) {
    var myValue = trim(aValue);
    var myRuleLang = getRuleLang(this.__theLang);
    switch (myRuleLang)
    {
        case 'lat':
            return regex_shortdate_lat(this.__theLang, myValue);
        case 'sax':
            return regex_shortdate_sax(this.__theLang, myValue);
        case 'cir':
            return regex_shortdate_cir(this.__theLang, aValue);
        case 'nip':
            return regex_shortdate_nip(this.__theLang, myValue);
        case 'arb':
            return regex_shortdate_arb(this.__theLang, myValue);
        default:
            throw 'LangTime.getShortDate: rule not found ' + myRuleLang;
    }
};



LangTime.prototype.getConstrainDate = function (aValue) {
    //alert('getConstrainDate');
    var myValue = trim(aValue);
    var myRule = getRuleLang(this.__theLang);
    //alert('myRule =' + myRule);
    switch (myRule)
    {
        case 'lat':
            return regex_constraindate_lat(this.__theLang, myValue);
        case 'sax':
            return regex_constraindate_sax(this.__theLang, myValue);
        case 'cir':
            return regex_constraindate_cir(this.__theLang, aValue);
        case 'nip':
            return regex_constraindate_nip(this.__theLang, myValue);
        case 'arb':
            return regex_constraindate_arb(this.__theLang, myValue);
        default:
            throw 'LangTime.getConstrainDate: rule not found ' + myLang;
    }
};




