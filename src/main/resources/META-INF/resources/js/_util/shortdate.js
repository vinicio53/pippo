
function getShortDate_lat(aLang, aValue) {
    var myLangTime = new LangTime(aLang);
    var myDate = myLangTime.getShortDate(aValue);
    var myMonth = myDate.getMonth() + 1;
    return myDate.getDate() + '/' + myMonth + '/' + myDate.getFullYear();
}


function getShortDate_sax(aLang, aValue) {
    var myLangTime = new LangTime(aLang);
    var myDate = myLangTime.getShortDate(aValue);
    var myMonth = myDate.getMonth() + 1;
    return myMonth + '/' + myDate.getDate() + '/' +  myDate.getFullYear();
}





function getShortDate_cir(aLang, aValue) {
    var myLangTime = new LangTime(aLang);
    //alert('myLangTime =' + myLangTime);
    var myDate = myLangTime.getShortDate(aValue);
    //alert('myDate =' + myDate);
    var myMonth = myDate.getMonth() + 1;
    return myMonth + '.' + myDate.getDate() + '.' +  myDate.getFullYear();
}



function getShortDate_nip(aLang, aValue) {
    var myLangTime = new LangTime(aLang);
    var myDate = myLangTime.getShortDate(aValue);
    var myMonth = myDate.getMonth() + 1;
    return myDate.getFullYear() + '年' + myMonth + '月' + myDate.getDate() + '日';
}








function getShortDate_arb(aLang, aValue) {
    var myLangTime = new LangTime(aLang);
    var myDate = myLangTime.getShortDate(aValue);
    var myMonth = myDate.getMonth() + 1;
    return myMonth + '.' + myDate.getDate() + '.' + myDate.getFullYear();
}

