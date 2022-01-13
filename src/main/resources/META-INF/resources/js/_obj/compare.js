
function Compare(aLang) {
    if ((typeof aLang) !== 'string') {
        throw 'Lang not a string ' + aLang;
    }
    this.theLang = aLang;
    this.theRuleLang = getRuleLang(aLang);
}


Compare.prototype.compareLongDate = function (aValue1, aValue2) {
    //alert('compareLongDate');
    var myLongDate1 = null;
    var myLongDate2 = null;
    switch (this.theRuleLang)
    {
        case 'lat':
            myLongDate1 = regex_longdate_lat(this.theLang, aValue1);
            myLongDate2 = regex_longdate_lat(this.theLang, aValue2);
            break;
        case 'sax':
            myLongDate1 = regex_longdate_sax(this.theLang, aValue1);
            myLongDate2 = regex_longdate_sax(this.theLang, aValue2);
            break;
        case 'cir':
            myLongDate1 = regex_longdate_cir(this.theLang, aValue1);
            myLongDate2 = regex_longdate_cir(this.theLang, aValue2);
            break;
        case 'nip':
            myLongDate1 = regex_longdate_nip(this.theLang, aValue1);
            myLongDate2 = regex_longdate_nip(this.theLang, aValue2);
            break;
        case 'arb':
            myLongDate1 = regex_longdate_arb(this.theLang, aValue1);
            myLongDate2 = regex_longdate_arb(this.theLang, aValue2);
            break;
        default:
            throw 'comparekLongtDate: rule not found ' + this.theRuleLang;
    }
    //alert( typeof myLongDate1);
    var myTime1 = myLongDate1.getTime();
    //alert('myTime1 =' + myTime1.toString());
    var myTime2 = myLongDate2.getTime();
    //alert('myTime2 =' + myTime2.toString());
    if(myTime1 === myTime2){
        return 0;
    }
    else{
        if(myTime1 < myTime2){
            return 1;
        }
        else{
            return -1;
        }
    }
}




Compare.prototype.compareShortDate = function (aValue1, aValue2) {
    var myDate1 = null;
    var myDate2 = null;
    switch (this.theRuleLang)
    {
        case 'lat':
            myDate1 = regex_shortdate_lat(this.theLang, aValue1);
            myDate2 = regex_shortdate_lat(this.theLang, aValue2);
            break;
        case 'sax':
            myDate1 = regex_shortdate_sax(this.theLang, aValue1);
            myDate2 = regex_shortdate_sax(this.theLang, aValue2);
            break;
        case 'cir':
            myDate1 = regex_shortdate_cir(this.theLang, aValue1);
            myDate2 = regex_shortdate_cir(this.theLang, aValue2);
            break;
        case 'nip':
            myDate1 = regex_shortdate_nip(this.theLang, aValue1);
            myDate2 = regex_shortdate_nip(this.theLang, aValue2);
            break;
        case 'arb':
            myDate1 = regex_shortdate_arb(this.theLang, aValue1);
            myDate2 = regex_shortdate_arb(this.theLang, aValue2);
            break;
        default:
            throw 'comparekShortDate: rule not found ' + this.theRuleLang;
    }
    var myTime1 = myDate1.getTime();
    //alert('myTime1 =' + myTime1.toString());
    var myTime2 = myDate2.getTime();
    //alert('myTime2 =' + myTime2.toString());
    if(myTime1 === myTime2){
        return 0;
    }
    else{
        if(myTime1 < myTime2){
            return 1;
        }
        else{
            return -1;
        }
    }
};



Compare.prototype.compareDateTimeCurrent = function (aDate, aTime) {
    var myDate = null;
    var myInterval = null;
    //var myRuleLang = getRuleLang(aLang);
    switch (this.theRuleLang)
    {
        case 'lat':
            myDate = regex_shortdate_lat(this.theLang, aDate);
            myInterval = regex_interval4_lat(this.theLang, aTime, null);
            break;
        case 'sax':
            myDate = regex_shortdate_sax(this.theLang, aDate);
            myInterval = regex_interval4_sax(this.theLang, aTime, null);
            break;
        case 'cir':
            myDate = regex_shortdate_cir(this.theLang, aDate);
            myInterval = regex_interval4_cir(this.theLang, aTime, null);
            break;
        case 'nip':
            myDate = regex_shortdate_nip(this.theLang, aDate);
            myInterval = regex_interval4_nip(this.theLang, aTime, null);
            break;
        case 'arb':
            myDate = regex_shortdate_arb(this.theLang, aDate);
            myInterval = regex_interval4_arb(this.theLang, aTime, null);
            break;
        default:
            throw 'comparekDateTimeCurrent: rule not found ' + this.theRuleLang;
    }
    //
    var myHours = parseInt(myInterval[0]);
    //alert('myHours =' + myHours);
    myDate.setHours(myDate.getHours() + myHours);
    var myMinutes = parseInt(myInterval[1]) - 1;
    //alert('myMinutes =' + myMinutes);
    myDate.setMinutes(myDate.getMinutes() + myMinutes);
    //alert('myDate4 =' + myDate4.toString());
    var myTime = new Date();
    //alert('myTime =' + myTime.toString());
    return (myTime < myDate);


};

