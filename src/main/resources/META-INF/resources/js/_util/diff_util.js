




function getDifference(aLang, aBlockTime, aDateTime1, aDateTime2) {
    console.log('getDifference');
    console.log('aBlockTime =' + aBlockTime);
    console.log('aDateTime1 =' + aDateTime1);
    console.log('aDateTime2 =' + aDateTime2);
    var myLangTime = new LangTime(aLang);
    var myDate1 = myLangTime.getConstrainDate(aDateTime1);
    console.log('myDate1 ' + typeof myDate1);
    var myDate2 = myLangTime.getConstrainDate(aDateTime2);
    console.log('myDate2 ' + myDate2);
    var myOffset1 = myDate1.getTimezoneOffset() * 60000;
    console.log('myOffset1 ' + myOffset1);
    var myOffset2 = myDate2.getTimezoneOffset() * 60000;
    console.log('myOffset2 ' + myOffset2);
    var myDifference = (myDate2.getTime() - myOffset2) - (myDate1.getTime() - myOffset1);
    console.log('myDifference ' + myDifference);
    var myDayDifference = myDifference / (aBlockTime * 1000);
    console.log('myDayDifference ' + myDayDifference);
    return myDayDifference;
}
