
function __getString_lat(aDate) {
    var myMonth = aDate.getMonth() + 1;
    var myRet = aDate.getDate() + '/' + myMonth + '/' + aDate.getFullYear() + ' ' + aDate.getHours() + ':' + aDate.getMinutes();
    return myRet;
}


function __getString_sax(aDate) {
    var myMonth = aDate.getMonth() + 1;
    var myRet = myMonth + '/' + aDate.getDate() + '/' + aDate.getFullYear() + ' ' + aDate.getHours() + ':' + aDate.getMinutes();
    return myRet;
}


function __getString_cir(aDate) {
    var myMonth = aDate.getMonth() + 1;
    var myRet = aDate.getDate() + '.' + myMonth + '.' + aDate.getFullYear() + ' ' + aDate.getMinutes() + ':' + aDate.getHours();
    return myRet;
}

function __getString_nip(aDate) {
    var myMonth = aDate.getMonth() + 1;
    //return aDate.getFullYear() + '年' + myMonth + '月' + aDate.getDate() + '日' + ' ' + aDate.getHours() + ':' + aDate.getMinutes();
    return aDate.getFullYear() + '年' + myMonth + '月' + aDate.getDate() + '日' + ' ' + aDate.getMinutes() + ':' + aDate.getHours();
}

function __getString_arb(aDate) {
    var myMonth = aDate.getMonth() + 1;
    return myMonth + '.' + aDate.getDate() + '.' + aDate.getFullYear() + ' ' + aDate.getHours() + ':' + aDate.getMinutes();
}
