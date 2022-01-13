
function getConstrainDate_lat(aLang, aValue) {
    var myLangTime = new LangTime(aLang);
    var myDate = myLangTime.getConstrainDate(aValue);
    return __getString_lat(myDate);
}

function getConstrainDate_sax(aLang, aValue) {
    var myLangTime = new LangTime(aLang);
    var myDate = myLangTime.getConstrainDate(aValue);
    return __getString_sax(myDate);
}






function getConstrainDate_cir(aLang, aValue) {
    var myLangTime = new LangTime(aLang);
    var myDate = myLangTime.getConstrainDate(aValue);
    return __getString_cir(myDate);
}





function getConstrainDate_nip(aLang, aValue) {
    var myLangTime = new LangTime(aLang);
    var myDate = myLangTime.getConstrainDate(aValue);
    var myRet = __getString_nip(myDate);
    return myRet;
}








function getConstrainDate_arb(aLang, aValue) {
    var myLangTime = new LangTime(aLang);
    var myDate = myLangTime.getConstrainDate(aValue);
    return __getString_arb(myDate);
}





