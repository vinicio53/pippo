



function labelLongDate(aLang, aValue) {
    switch (aLang)
    {
        case 'it':
            return 'data valore non è dd/mm/aaaa hh:mm:ss: ' + aValue;
        case 'fr':
            return 'date de valeur n\'est pas jj/mm/aaaa hh:mm:ss: ' + aValue;
        case 'es':
            return 'fecha de valor no es dd/mm/aaaa hh:mm:ss: ' + aValue;
        case 'no':
            return 'datoen verdien ikke er mm/dd/åååå hh:mm:ss: ' + aValue;
        case 'de':
            return 'datum wert ist nicht tt/mm/jjjj hh:mm:ss: ' + aValue;
        case 'en':
            return 'date value is not mm/dd/yyyy hh:mm:ss: ' + aValue;
        case 'bg':
            return 'дата стойност не е дд.мм.гггг мм:чч:ss: ' + aValue;
        case 'jp':
            return '日付値ではありません YYYY年MM月DD日 mm:hh:ss: ' + aValue;
        case 'ar':
            return  aValue + ' :dd.mm.yyyy mm ss:ss ' + 'قيمة التاريخ';
        case 'tr':
            return 'tarihi değeri dd.mm.yyyy mm:ss:ss: ' + aValue;
        default:
            throw 'labelLongDate: lang not found ' + aLang;
   }
}



function labelShortDate(aLang, aValue) {
    switch (aLang)
    {
        case 'no':
            return 'datoen verdien ikke er mm/dd/åååå: ' + aValue;
        case 'de':
            return 'datum wert ist nicht mm/tt/jjjj: ' + aValue;
        case 'en':
            return 'date value is not mm/dd/yyyy: ' + aValue;
        case 'bg':
            return 'дата стойност не е дд.мм.гггг: ' + aValue;
        case 'jp':
            return '日付値ではありません yyyy年mm月dd日: ' + aValue;
        case 'tr':
            return 'tarihi değeri gg.aa.yyyy: ' + aValue;
        case 'ar':
            return aValue + ' :gg.aa.yyyy ' + 'قيمة التاريخ ليست';
        case 'it':
            return 'data valore non è gg/mm/aaaa: ' + aValue;
        case 'fr':
            return 'date de valeur n\'est pas jj/mm/aaaa: ' + aValue;
        case 'es':
            return 'fecha de valor no es dd/mm/aaaa: ' + aValue;
        default:
            throw 'labelShortDate: lang not found ' + aLang;
   }
}


function labelFloat(aLang, aValue, aDecimal) {
    switch (aLang)
    {
        case 'no':
            return 'nummeret er ikke et desimaltegn ' + aDecimal + ': ' + aValue;
        case 'de':
            return 'nummer ist kein dezimalpunkt ' + aDecimal + ': ' + aValue;
        case 'en':
            return 'number is not a decimal ' + aDecimal + ': ' + aValue;
        case 'jp':
            return '番号は 10 進数ではありません ' + aDecimal + ': ' + aValue;
        case 'bg':
            return 'номер не е на десетичен знак ' + aDecimal + ': ' + aValue;
        case 'ar':
            return aValue + ' :' + aDecimal + ' ' +  'الرقم ليس عشري';
        case 'tr':
            return 'numarası olmayan bir ondalık ' + aDecimal + ': ' + aValue;
        case 'it':
            return 'numero non è un decimale ' + aDecimal + ': ' + aValue;
        case 'fr':
            return 'numéro n\'est pas d\'un nombre décimal ' + aDecimal + ': ' + aValue;
        case 'es':
            return 'no es un número decimal ' + aDecimal + ': ' + aValue;
        default:
            throw 'labelFloat: lang not found ' + aLang;
   }
}


function labelInterval4(aLang, aValue) {
    switch (aLang)
    {
        case 'no':
            return 'verdien er ikke en intervall hh:mm: ' + aValue;
        case 'de':
            return 'wert ist kein intervall hh:mm: ' + aValue;
        case 'en':
            return 'value is not a interval hh:mm: ' + aValue;
        case 'jp':
            return '値は間隔ではありません mm:hh: ' + aValue;
        case 'bg':
            return 'cтойността не е интервал чч:мм: ' + aValue;
        case 'it':
            return 'valore non è un intervallo hh:mm: ' + aValue;
        case 'fr':
            return 'valeur n\'est pas un intervalle hh:mm: ' + aValue;
        case 'es':
            return 'valor no es un intervalo hh:mm: ' + aValue;
        case 'ar':
            return aValue + ' :hh: mm ' + 'القيمة هي مجموعة ';
        case 'tr':
            return 'değer bir aralık ss:dd: ' + aValue;
        default:
            throw 'labelInterval4: lang not found ' + aLang;
    }
}



function labelConstrainDate(aLang, aValue) {
    switch (aLang)
    {
        case 'it':
            return 'data valore non è dd/mm/aaaa hh:[00,30]: ' + aValue;
        case 'fr':
            return 'date de valeur n\'est pas jj/mm/aaaa hh:[00,30]: ' + aValue;
        case 'es':
            return 'fecha de valor no es dd/mm/aaaa hh:[00,30]: ' + aValue;
        case 'no':
            return 'datoen verdien ikke er mm/dd/åååå hh:[00,30]: ' + aValue;
        case 'de':
            return 'datum wert ist nicht tt/mm/jjjj hh:[00,30]: ' + aValue;
        case 'en':
            return 'date value is not mm/dd/yyyy hh:[00,30]: ' + aValue;
        case 'bg':
            return 'дата стойност не е дд.мм.гггг мм:[00,30]: ' + aValue;
        case 'jp':
            return '日付値ではありません YYYY年MM月DD日 mm:[00,30]: ' + aValue;
        case 'ar':
            return  aValue + ' :dd.mm.yyyy mm [00,30] ' + 'قيمة التاريخ';
        case 'tr':
            return 'tarihi değeri dd.mm.yyyy mm:[00,30]: ' + aValue;
        default:
            throw 'labelConstrainDate: lang not found ' + aLang;
   }
}


