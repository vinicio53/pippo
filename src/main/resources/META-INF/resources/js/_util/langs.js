
function getRuleLang(aLang) {
    switch (trim(aLang))
    {
        case 'it':
            return 'lat';
        case 'fr':
            return 'lat';
        case 'es':
            return 'lat';
        case 'no':
            return 'sax';
        case 'de':
            return 'sax';
        case 'en':
            return 'sax';
        case 'ar':
            return 'arb';
        case 'bg':
            return 'cir';
        case 'jp':
            return 'nip';
        case 'tr':
            return 'arb';
        default:
            throw 'getRuleLang not found: ' + aLang;
    }
}



function _getFormatPicker_15202(aLang) {
    var myRuleLang = getRuleLang(aLang);
    //alert(myRuleLang);
    switch (myRuleLang)
    {
        case 'lat':
            return 'd/m/Y';
        case 'sax':
            return 'm/d/Y';
        case 'arb':
            return 'd.m.Y';
        case 'cir':
            return 'm.d.Y';
        case 'nip':
            return 'Y年m月d日';
        case 'tr':
            return 'm-d-Y';
        default:
            throw '_getFormatPicker_15202 not found: ' + aLang;
    }
}


function _getFormatPicker_15205(aLang) {
    return _getFormatPicker_15202(aLang) +  ' H:i';
}


