
function trim(aString) {
    return aString.replace(/^\s+|\s+$/g, '');
}


function removeSpace(aString) {
    var myRet = aString.replace(/\s/g, '');
    return myRet;
}




function replaceComma(aString) {
    var myRet = aString.replace(',', '.');
    return myRet;
}


function cutString(aString, aLen) {//todo test
    if (aString.length > aLen) {
        var myRet = aString.substring(0, aLen);
        return myRet + '...';

    }
    return aString;
}


function decimalString(aString) {
    var myString = aString.toString();
    var myIndex = myString.indexOf('.');
    //alert('myIndex =' + myIndex);
    if(myIndex === -1){
        return myString;
    }
    else{
        var myVal1 = myString.substring(0, myIndex);
        //alert('myVal1 =' + myVal1);
        var myVal2 = myString.substring(myIndex + 1, myString.length);
        //alert('myVal2 =' + myVal2);
        var myLen = myVal2.length;
        //alert('myLen =' + myLen);
        if(myLen > 6){
            myVal2 = myVal2.substring(0, 6);
        }
        
        return myVal1 + '.' + myVal2;
    }
}


//21/05/2021 16:56

function timeString(aValue) {
    //21/05/2021 16:56
    console.log('aValue =' + aValue);
    var myTokens1 = new Tokens(aValue, ' ', 0);
    var myDate = myTokens1.next();
    console.log('myDate =' + myDate);
    var myTime = myTokens1.next();
    console.log('myTime =' + myTime);

    var myTokens2 = new Tokens(myTime, ':', 0);
    var myHour = myTokens2.next();
    console.log('myHour =' + myHour);
    var myMinute = parseInt(myTokens2.next());
    console.log('myMinute =' + myMinute);
    
    var myNewMinute = '00';
    if(myMinute >= 30){
        myNewMinute = '30';
    }
    
    
    //myElement.val(myHour + ':' + myMinute);
    
    var myRet = '';
    myRet += myDate;
    myRet += ' ';
    myRet += myHour;
    myRet += ':';
    myRet += myNewMinute;
    
    return myRet;
    
    
}

