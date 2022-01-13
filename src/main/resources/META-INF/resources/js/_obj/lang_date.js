//todo test
function LangDate(aLang) {
    if ((typeof aLang) !== 'string') {
        throw 'LangDate not a string ' + aLang;
    }
    this.__theLang = aLang;
}
;

LangDate.prototype.getDateString = function (aDate) {
    //alert(typeof aDate);
    if ((typeof aDate) !== Date) {
        //throw 'LangDate not a Date ' + aDate;
    }
    //var myDate = aDate.getDate();
    var myRuleLang = getRuleLang(this.__theLang);
    //alert('myRuleLang ' + myRuleLang);
    switch (myRuleLang)
    {
        case 'lat':
            //return myDate + '/' + myMonth + '/' + myYear + ' ' + myHours + ':' + myMinutes;
            return __getString_lat(aDate);
        case 'sax':
            return __getString_sax(aDate);
        case 'cir':
            return __getString_cir(aDate);
        case 'nip':
            return __getString_nip(aDate);
        case 'arb':
            return __getString_arb(aDate);
        default:
            throw 'LangTime.getDateString: rule not found ' + myRuleLang;
    }
};

