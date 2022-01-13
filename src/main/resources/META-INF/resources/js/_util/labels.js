
function labelReloading(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'ricaricando';
        case 'fr':
            return 'rechargement';
        case 'es':
            return 'cargando';
        case 'no':
            return 'papirbeholder';
        case 'de':
            return 'neu laden';
        case 'en':
            return 'reloading';
        case 'bg':
            return 'презареждане';
        case 'jp':
            return '再ロード';
        case 'tr':
            return 'yeni';
        case 'ar':
            return 'إعادة';
        default:
            return 'labelReloading: lang not found ' + aLang;

    }
}





function labelValueNotFound(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'valore non trovato';
        case 'fr':
            return 'valeur introuvable';
        case 'es':
            return 'no se encontra el valor';
        case 'no':
            return 'verdi ikke funnet';
        case 'de':
            return 'wert wurde nicht gefunden';
        case 'en':
            return 'value not found';
        case 'bg':
            return 'стойност не е намерен';
        case 'jp':
            return '値が見つかりません。';
        case 'tr':
            return 'değeri bulunamadı';
        case 'ar':
            return 'القيمة غير موجودة';
        default:
            return 'labelValueNotFound: lang not found ' + aLang;
    }
}






function labelValueIsntInteger(aLang, aValue) {
    switch (aLang)
    {
        case 'it':
            return 'valore non è un intero: ' + aValue;
        case 'fr':
            return 'valeur n\'est pas un nombre entier: ' + aValue;
        case 'es':
            return 'valor no es un número entero: ' + aValue;
        case 'no':
            return 'verdien er ikke et heltall: ' + aValue;
            ;
        case 'de':
            return 'wert ist keine zahl: ' + aValue;
        case 'en':
            return 'value isn\'t a integer: ' + aValue;

        case 'bg':
            return 'cтойност не е цяло число: ' + aValue;
        case 'jp':
            return '値は整数ではありません。' + aValue;
        case 'tr':
            return 'değeri tam sayı: ' + aValue;
        case 'ar':
            return aValue + ' :' + 'القيمة ليست عددًا صحيحًا';
        default:
            return 'labelValueIsntInteger: lang not found ' + aLang;

    }
}





function labelValueGreater(aLang, aValue) {
    if ((typeof aValue) !== 'number') {
        throw 'labelValueGreater: value not a number ' + aValue;
    }
    switch (aLang)
    {
        case 'it':
            return 'valore > ' + aValue;
        case 'fr':
            return 'valeur > ' + aValue;
        case 'es':
            return 'valor > ' + aValue;
        case 'no':
            return 'verdi > ' + aValue;
        case 'de':
            return 'wert > ' + aValue;
        case 'en':
            return 'value > ' + aValue;
        case 'bg':
            return 'cтойност > ' + aValue;
        case 'jp':
            return '値 > ' + aValue;
        case 'tr':
            return 'değer > ' + aValue;
        case 'ar':
            return aValue + ' < ' + 'القيمة';
        default:
            return 'labelValueGreater: lang not found ' + aLang;
    }
}



function labelValueIsntCommaDecimal(aLang, aValue, aDecimal) {
    switch (aLang)
    {
        case 'it':
            return 'valore non è in virgola decimale ' + aDecimal + ': ' + aValue;
        case 'fr':
            return 'valeur n\'est pas une virgule décimale ' + aDecimal + ': ' + aValue;
        case 'es':
            return 'valor no es una coma decimal ' + aDecimal + ': ' + aValue;
        case 'no':
            return 'verdi er ikke et komma desimal ' + aDecimal + ': ' + aValue;
        case 'de':
            return 'wert ist nicht ein komma dezimalzeichen ' + aDecimal + ': ' + aValue;
        case 'en':
            return 'value isn\'t a comma decimal ' + aDecimal + ': ' + aValue;

        case 'bg':
            return 'cтойност не е знак след десетичната запетая ' + aDecimal + ': ' + aValue;
        case 'jp':
            return '値は、カンマ小数ではありません ' + aDecimal + ': ' + aValue;
        case 'tr':
            return 'değer virgül ondalık ' + aDecimal + ': ' + aValue;
        case 'ar':
            return aValue + ' :' + aDecimal + ' ' + 'القيمة ليست فاصلة عشرية';
        default:
            return 'labelValueIsntCommaDecimal: lang not found ' + aLang;
    }
}



function labelValueIsntPointDecimal(aLang, aValue, aDecimal) {
    switch (aLang)
    {
        case 'it':
            return 'valore non è in punto decimale ' + aDecimal + ': ' + aValue;
        case 'fr':
            return 'valeur n\'est pas un point décimal ' + aDecimal + ': ' + aValue;
        case 'es':
            return 'valor no es un punto decimal ' + aDecimal + ': ' + aValue;
        case 'no':
            return 'verdi er ikke et desimaltegn ' + aDecimal + ': ' + aValue;
        case 'de':
            return 'wert ist nicht ein dezimalpunkt ' + aDecimal + ': ' + aValue;
        case 'en':
            return 'value isn\'t a point decimal ' + aDecimal + ': ' + aValue;
        case 'bg':
            return 'cтойност не е точка знак след десетичната запетая ' + aDecimal + ': ' + aValue;
        case 'jp':
            return '値は、小数ではありません ' + aDecimal + ': ' + aValue;
        case 'tr':
            return 'değer noktası ondalık ' + aDecimal + ': ' + aValue;
        case 'ar':
            return aValue + ' :' + aDecimal + ' ' + 'القيمة ليست نقطة عشرية';
        default:
            return 'labelValueIsntPointDecimal: lang not found ' + aLang;
    }
}






function labelValueLengthIsntLen(aLang, aValue, aLen) {
    switch (aLang)
    {
        case 'it':
            return aValue + ' lunghezza valore non è ' + aLen;
        case 'fr':
            return aValue + ' longueur de la valeur n\'est pas de ' + aLen;
        case 'es':
            return aValue + ' longitud del valor no es de ' + aLen;
        case 'no':
            return aValue + ' verdi lengde ikke er ' + aLen;
        case 'de':
            return aValue + ' länge des wertes ist nicht  ' + aLen;
        case 'en':
            return aValue + ' value length isn\'t ' + aLen;

        case 'bg':
            return aValue + ' cтойност дължина не е ' + aLen;
        case 'jp':
            return aValue + ' 値の長さではありません ' + aLen;
        case 'tr':
            return aValue + ' değer uzunluğu ' + aLen;
        case 'ar':
            return aLen + ' ' + 'طول القيمة ليست' + ' ' + aValue
        default:
            return 'labelValueLengthIsntLen: lang not found ' + aLang;
    }
}





function labelValueIsntEmail(aLang, aValue) {
    switch (aLang)
    {
        case 'it':
            return 'valore non è email: ' + aValue;
        case 'fr':
            return 'valeur n\'est pas un e-mail: ' + aValue;
        case 'es':
            return 'valor no es un correo electrónico: ' + aValue;
        case 'no':
            return 'verdien er ikke en e-post: ' + aValue;
        case 'de':
            return 'wert ist nicht eine e-mail: ' + aValue;
        case 'en':
            return 'value isn\'t a email: ' + aValue;
        case 'bg':
            return 'cтойност не е имейл: ' + aValue;
        case 'jp':
            return '値は、電子メールではありません: ' + aValue;
        case 'tr':
            return 'değer bir e-posta: ' + aValue;
        case 'ar':
            return aValue + ' :' + 'القيمة ليست بريدًا إلكترونيًا';
        default:
            return 'labelValueIsntEmail: lang not found ' + aLang;
    }
}





function labelValueMonthGreater12(aLang, aValue) {
    if ((typeof aValue) !== 'number') {
        throw 'labelValueMonthGreater12: value not a number ' + aValue;
    }
    switch (aLang)
    {
        case 'it':
            return 'valore mese > 12: ' + aValue;
        case 'fr':
            return 'valeur mois > 12: ' + aValue;
        case 'es':
            return 'valor mes > 12: ' + aValue;
        case 'no':
            return 'verdien måned > 12: ' + aValue;
        case 'de':
            return 'wert monat > 12: ' + aValue;
        case 'en':
            return 'value month > 12: ' + aValue;
        case 'bg':
            return 'cтойност месец > 12: ' + aValue;
        case 'jp':
            return '値月 > 12: ' + aValue;
        case 'tr':
            return 'değeri ay > 12: ' + aValue;
        case 'ar':
            return aValue + ' :12 < ' + 'شهر القيمة';
        default:
            return 'labelValueMonthGreater12: lang not found ' + aLang;
    }
}




function labelValueDayGreater31(aLang, aValue) {
    if ((typeof aValue) !== 'number') {
        throw 'labelValueDayGreater31: value not a number ' + aValue;
    }
    switch (aLang) {
        case 'it':
            return 'valore giorno > 31: ' + aValue;
        case 'fr':
            return 'valeur jour > 31: ' + aValue;
        case 'es':
            return 'valor día > 31: ' + aValue;
        case 'no':
            return 'verdien dag > 31: ' + aValue;
        case 'de':
            return 'wert tag > 31: ' + aValue;
        case 'en':
            return 'value day > 31: ' + aValue;
        case 'bg':
            return 'cтойност ден > 31: ' + aValue;
        case 'jp':
            return '値日 > 31: ' + aValue;
        case 'tr':
            return 'değer günü > 31: ' + aValue;
        case 'ar':
            return aValue + ' :31 < ' + 'يوم القيمة';
        default:
            return 'labelValueDayGreater31: lang not found ' + aLang;
    }
}











function labelValueHoursGreater23(aLang, aValue) {
    if ((typeof aValue) !== 'number') {
        throw 'labelValueHoursGreater23: value not a number ' + aValue;
    }
    switch (aLang)
    {
        case 'it':
            return 'valore ora > 23: ' + aValue;
        case 'fr':
            return 'valeur heure > 23: ' + aValue;
        case 'es':
            return 'valor hora > 23: ' + aValue;
        case 'no':
            return 'verdi time > 23: ' + aValue;
        case 'de':
            return 'wert stunde > 23: ' + aValue;
        case 'en':
            return 'value hour > 23: ' + aValue;

        case 'bg':
            return 'cтойност час > 23: ' + aValue;
        case 'jp':
            return '時間値 > 23: ' + aValue;
        case 'tr':
            return 'değer saat > 23: ' + aValue;
        case 'ar':
            return aValue + ' :23 < ' + 'قيمة الساعة';
        default:
            return 'labelValueHoursGreater23: lang not found ' + aLang;
    }
}


function labelValueMinutesGreater59(aLang, aValue) {
    if ((typeof aValue) !== 'number') {
        throw 'labelValueMinutesGreater59: value not a number ' + aValue;
    }
    switch (aLang)
    {
        case 'it':
            return 'valore minuti > 59: ' + aValue;
        case 'fr':
            return 'valeur minutes > 59: ' + aValue;
        case 'es':
            return 'valor minutos > 59: ' + aValue;
        case 'no':
            return 'verdi minutter > 59: ' + aValue;
        case 'de':
            return 'wert minuten > 59: ' + aValue;
        case 'en':
            return 'value minutes > 59: ' + aValue;
        case 'bg':
            return 'cтойност минути > 59: ' + aValue;
        case 'jp':
            return '値は分単位 > 59: ' + aValue;
        case 'tr':
            return 'değer dakika > 59: ' + aValue;
        case 'ar':
            return aValue + ' :59 <' + 'دقائق القيمة';
        default:
            return 'labelValueMinutesGreater59: lang not found ' + aLang;
    }
}


function labelValueSecondsGreater59(aLang, aValue) {
    switch (aLang)
    {
        case 'it':
            return 'valore secondi > 59: ' + aValue;
        case 'fr':
            return 'valeur secondes > 59: ' + aValue;
        case 'es':
            return 'valor segundos > 59: ' + aValue;
        case 'no':
            return 'verdi sekunder > 59: ' + aValue;
        case 'de':
            return 'wert sekunden > 59: ' + aValue;
        case 'en':
            return 'value seconds > 59: ' + aValue;
        case 'bg':
            return 'cтойност секунди > 59: ' + aValue;
        case 'jp':
            return '値は、秒単位 > 59: ' + aValue;
        case 'tr':
            return 'değer saniye > 59: ' + aValue;
        case 'ar':
            return aValue + ' :59 < ' + 'قيمة ثانية';
        default:
            return 'labelValueSecondsGreater59: lang not found ' + aLang;
    }
}







function labelDoneMsg(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'eseguito';
        case 'fr':
            return 'fait';
        case 'es':
            return 'hecho';
        case 'no':
            return 'ferdig';
        case 'de':
            return 'fertig';
        case 'en':
            return 'done';
        case 'bg':
            return 'cъставено';
        case 'jp':
            return '実行';
        case 'tr':
            return 'yapildi';
        case 'ar':
            return 'منجز';
        default:
            return 'labelDoneMsg: lang not found ' + aLang;

    }
}



function labelFailLogin(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'login fallita';
        case 'fr':
            return 'échec de connexion';
        case 'es':
            return 'error en el inicio de sesión';

        case 'no':
            return 'pålogging mislyktes';
        case 'de':
            return 'anmeldung fehlgeschlagen';
        case 'en':
            return 'login failed';
        case 'bg':
            return 'hеуспешно влизане';
        case 'jp':
            return 'ログインに失敗しました';
        case 'tr':
            return 'oturum açılamadı';
        case 'ar':
            return 'فشل عملية الدخول';

        default:
            return 'labelFailLogin: lang not found ' + aLang;

    }
}


function labelFailCaptcha(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'codice fallito';
        case 'fr':
            return 'code a échoué';
        case 'es':
            return 'error de código';

        case 'no':
            return 'kode mislyktes';
        case 'de':
            return 'code fehlgeschlagen';
        case 'en':
            return 'code failed';
        case 'bg':
            return 'код е неуспешно';
        case 'jp':
            return 'コード失敗しました。';
        case 'tr':
            return 'kodu başarısız';
        case 'ar':
            return 'فشل الرمز';
        default:
            return 'labelFailCaptcha: lang not found ' + aLang;

    }
}



function labelAreYouReallySure(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'siete davvero sicuri?';
        case 'fr':
            return 'êtes-vous vraiment sûr?';
        case 'es':
            return '¿Está realmente seguro?';
        case 'no':
            return 'er du helt sikker på?';
        case 'de':
            return 'sind sie wirklich sicher?';
        case 'en':
            return 'are you really sure?';
        case 'bg':
            return 'наистина ли сте сигурни?';
        case 'jp':
            return 'あなたは本当によろしいですか？';
        case 'tr':
            return 'siz gerçekten emin misiniz?';
        case 'ar':
            return 'هل انت حقا متاكد؟';
        default:
            return 'labelAreYouReallySure: lang not found ' + aLang;

    }
}




function labelSelectValuePlease(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'selezionare un valore per favore';
        case 'fr':
            return 'sélectionner une valeur se il vous plaît';
        case 'es':
            return 'seleccionar un valor de por favor';

        case 'no':
            return 'velg en verdi kan';
        case 'de':
            return 'wählen sie einen wert bitte';
        case 'en':
            return 'select a value please';
        case 'bg':
            return 'изберете стойност моля';
        case 'jp':
            return '値を選択してください';
        case 'tr':
            return 'bir değer lütfen seçin';
        case 'ar':
            return 'اختر قيمة من فضلك';
        default:
            return 'labelSelectValuePlease: lang not found ' + aLang;

    }
}







function labelMenuValueForbidden(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'menu valore vietato';
        case 'fr':
            return 'menu valeur interdite';
        case 'es':
            return 'menú valor prohibido';
        case 'no':
            return 'verdi menyen forbudt';
        case 'de':
            return 'wertmenü verboten';
        case 'en':
            return 'value menu forbidden';
        case 'bg':
            return 'меню стойност забранено';
        case 'jp':
            return '値メニューが禁止さ';
        case 'tr':
            return 'değer menü yasak';
        case 'ar':
            return 'قائمة القيمة ممنوع';
        default:
            return 'labelMenuValueForbidden: lang not found ' + aLang;

    }
}





function labelFilterValueForbidden(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'filtro valore vietato';
        case 'fr':
            return 'filtre valeur interdite';
        case 'es':
            return 'filtro valor prohibido';
        case 'no':
            return 'verdi filter forbudt';
        case 'de':
            return 'wertfilter verboten';
        case 'en':
            return 'value filter forbidden';
        case 'bg':
            return 'стойност филтър забранено';
        case 'jp':
            return '値フィルタは禁止します';
        case 'tr':
            return 'değer filtresi yasak';
        case 'ar':
            return 'مرشح قيمة ممنوع';
        default:
            return 'labelFilterValueForbidden: lang not found ' + aLang;

    }
}






function labelDateStartEnd(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'data inizio >= data fine';
        case 'fr':
            return 'date de début> = date de fin';
        case 'es':
            return 'fecha inicio> = fecha inalización';
        case 'no':
            return 'startdato> = sluttdato';
        case 'de':
            return 'startdatum> = enddatum';
        case 'en':
            return 'start date> = end date';
        case 'bg':
            return 'начална дата> = крайна дата';
        case 'jp':
            return '開始日 >= 終了日';
        case 'tr':
            return 'tarih >= bitiş tarihi başlangıç';
        case 'ar':
            return 'تاريخ البدء> = تاريخ الانتهاء';
        default:
            return 'labelDateStartEnd: lang not found ' + aLang;

    }
}






function labelTimeout(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'tempo scaduto';
        case 'fr':
            return 'temps libre';
        case 'es':
            return 'tiempo acabado';
        case 'no':
            return 'pause';
        case 'de':
            return 'auszeit';
        case 'en':
            return 'time out';
        case 'bg':
            return 'време';
        case 'jp':
            return 'タイムアウト';
        case 'tr':
            return 'zaman aşımı';
        case 'ar':
            return 'نفذ الوقت';
        default:
            return 'labelTimeout: lang not found ' + aLang;

    }
}






function labelCloseOtherSession(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'chiudere altra sessione';
        case 'fr':
            return 'fermer autre séance';
        case 'es':
            return 'cerrar otra sesión';
        case 'no':
            return 'lukke andre økten';
        case 'de':
            return 'anderen sitzung zu schließen';
        case 'en':
            return 'close other session';
        case 'bg':
            return 'закрие друга сесия';
        case 'jp':
            return '他のセッションを閉じます';
        case 'tr':
            return 'oturumu kapatmak için';
        case 'ar':
            return 'إغلاق الجلسة الأخرى';
        default:
            return 'labelCloseOtherSession: lang not found ' + aLang;

    }
}





function labelPasswordError(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'errore di password';
        case 'fr':
            return 'erreur de mot de passe';
        case 'es':
            return 'error de contraseña';
        case 'no':
            return 'passord feil';
        case 'de':
            return 'passwort-fehler';
        case 'en':
            return 'password error';
        case 'bg':
            return 'грешка парола';
        case 'jp':
            return 'パスワードエラー';
        case 'tr':
            return 'şifre hatası';
        case 'ar':
            return 'خطأ كلمة المرور';
        default:
            return 'labelPasswordError: lang not found ' + aLang;

    }
}



function labelLenghtError(aLang, aLen) {
    switch (aLang)
    {
        case 'it':
            return 'lunghezza password < ' + aLen;
        case 'fr':
            return 'longueur du mot de passe < ' + aLen;
        case 'es':
            return 'longitud contraseña < ' + aLen;
        case 'no':
            return 'passord lengde < ' + aLen;

        case 'de':
            return 'kennwortlänge < ' + aLen;
        case 'en':
            return 'password length < ' + aLen;
        case 'bg':
            return 'дължина на паролата < ' + aLen;
        case 'jp':
            return 'パスワードの長さ < ' + aLen;
        case 'tr':
            return 'şifre uzunluğu < ' + aLen;
        case 'ar':
            return aLen + '> ' + 'طول كلمة المرور';
        default:
            return 'labelLenghtError: lang not found ' + aLang;
    }
}






function labelValueIsntPhone(aLang, aValue) {
    switch (aLang)
    {
        case 'it':
            return 'valore non è telefono: ' + aValue;
        case 'fr':
            return 'la valeur est pas un téléphone: ' + aValue;
        case 'es':
            return 'el valor no es un teléfono: ' + aValue;
        case 'no':
            return 'verdi er ikke en telefon: ' + aValue;
        case 'de':
            return 'wert ist kein telefon: ' + aValue;
        case 'en':
            return 'value isn\'t a phone: ' + aValue;
        case 'bg':
            return 'стойност не е телефон: ' + aValue;
        case 'jp':
            return '値は、携帯電話ではありません: ' + aValue;
        case 'tr':
            return 'vaue t mide s ah p kemik: ' + aValue;
        case 'ar':
            return aValue + ' :' + 'القيمة ليست هاتفًا';
        default:
            return 'labelValueIsntPhone: lang not found ' + aLang;
    }
}








function labelEmailSentTo(aLang, aValue) {
    switch (aLang)
    {
        case 'it':
            return 'e-mail inviata a: ' + aValue;
        case 'fr':
            return 'email envoyé à: ' + aValue;
        case 'es':
            return 'correo electrónico enviado a: ' + aValue;
        case 'no':
            return 'e-post sendt til: ' + aValue;
        case 'de':
            return 'e-mail verschickt an: ' + aValue;
        case 'en':
            return 'email sent to: ' + aValue;
        case 'bg':
            return 'имейл, изпратен до:' + aValue;
        case 'jp':
            return 'に送信される電子メール: ' + aValue;
        case 'tr':
            return 've emai l t yapmak: ' + aValue;
        case 'ar':
            return aValue + ': ' + 'تم إرسال البريد الإلكتروني إلى';
        default:
            return 'labelEmailSentTo: lang not found ' + aLang;
    }
}







function labelCouponNotValidFoundMsg(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'coupon non valido trovato';
        case 'fr':
            return 'coupon non valide trouvé';
        case 'es':
            return 'cupón no válido encontrado';

        case 'no':
            return 'kupongen er ikke gyldig funnet';
        case 'de':
            return 'gutschein nicht gültig gefunden';
        case 'en':
            return 'coupon not valid found';
        case 'bg':
            return 'купонът не е валиден';
        case 'jp':
            return '無効なクーポンが見つかりました';
        case 'tr':
            return 'kupon geçerli değil bulundu';
        case 'ar':
            return 'قسيمة غير صالحة وجدت';
        default:
            return 'labelCouponNotValidFoundMsg: lang not found ' + aLang;

    }
}



function labelQuantity(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'quantità';
        case 'fr':
            return 'quantité';
        case 'es':
            return 'cantidad';
        case 'no':
            return 'kvantitet';
        case 'de':
            return 'menge';
        case 'en':
            return 'quantity';
        case 'bg':
            return 'количество';
        case 'jp':
            return '数量。';
        case 'tr':
            return 'miktar';
        case 'ar':
            return 'كمية';
        default:
            return 'labelQuantity: lang not found ' + aLang;
    }
}




function labelMediaNotValid(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'media non valido';
        case 'fr':
            return 'support non valide';
        case 'es':
            return 'medio no valido';
        case 'no':
            return 'media er ikke gyldig';
        case 'de':
            return 'medien nicht gültig';
        case 'en':
            return 'media not valid';
        case 'bg':
            return 'носителят не е валиден';
        case 'jp':
            return 'メディアが無効です';
        case 'tr':
            return 'medya geçerli değil';
        case 'ar':
            return 'الوسائط غير صالحة';
        default:
            return 'labelMediaNotValid: lang not found ' + aLang;
    }
}








function labelOk(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'ok';
        case 'fr':
            return 'd\'accord';
        case 'es':
            return 'okay';
        case 'no':
            return 'ok';
        case 'de':
            return 'okay';
        case 'en':
            return 'ok';
        case 'bg':
            return 'Добре';
        case 'jp':
            return 'ok';
        case 'tr':
            return 'tamam';
        case 'ar':
            return 'حسنا';
        default:
            return 'ok: lang not found ' + aLang;
    }
}


function labelCancel(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'annulla';
        case 'fr':
            return 'annuler';
        case 'es':
            return 'cancelar';
        case 'no':
            return 'avbryt';
        case 'de':
            return 'stornieren';
        case 'en':
            return 'cancel';
        case 'bg':
            return 'анулира';
        case 'jp':
            return 'キャンセル';
        case 'tr':
            return 'iptal etmek';
        case 'ar':
            return 'إلغاء';
        default:
            return 'cancel: lang not found ' + aLang;
    }
}



function labelPurchaseInProgress(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'acquisto in corso';
        case 'fr':
            return 'achat en cours';
        case 'es':
            return 'compra en progreso';
        case 'no':
            return 'kjøp pågår';
        case 'de':
            return 'kauf in bearbeitung';
        case 'en':
            return 'purchase in progress';
        case 'bg':
            return 'покупка в ход';
        case 'jp':
            return '購入中';
        case 'tr':
            return 'satın alma işlemi devam ediyor';
        case 'ar':
            return 'شراء في التقدم';
        default:
            return 'labelPurchaseInProgress: lang not found ' + aLang;

    }
}







function labelTooLongPeriod(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'Periodo troppo esteso';
        case 'fr':
            return 'Période trop longue';
        case 'es':
            return 'Periodo demasiado largo';
        case 'no':
            return 'For lang periode';
        case 'de':
            return 'Zu lange zeit';
        case 'en':
            return 'Too long period';
        case 'bg':
            return 'Твърде дълъг период';
        case 'jp':
            return '期間が長すぎる';
        case 'tr':
            return 'Çok uzun süre';
        case 'ar':
            return 'فترة طويلة جدا';
        default:
            return 'labelTooLongPeriod: lang not found ' + aLang;

    }
}




function labelValueLengthGreater(aLang, aLen) {
    if ((typeof aLen) !== 'number') {
        throw 'labelValueLengthGreater: value not a number ' + aLen;
    }
    switch (aLang)
    {
        case 'it':
            return 'lunghezza del valore > ' + aLen;
        case 'fr':
            return 'longueur de la valeur > ' + aLen;
        case 'es':
            return 'longitud del valor > ' + aLen;
        case 'no':
            return 'verdi lengde > ' + aLen;
        case 'de':
            return 'länge des wertes > ' + aLen;
        case 'en':
            return 'value length > ' + aLen;
        case 'bg':
            return 'cтойност дължина > ' + aLen;
        case 'jp':
            return '値の長さ > ' + aLen;
        case 'tr':
            return 'değer uzunluğu > ' + aLen;
        case 'ar':
            return aLen + ' < ' + 'طول القيم<ة';
        default:
            return 'labelValueLengthGreater: lang not found ' + aLang;
    }
}

function labelValueAlreadyEntered(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'valore già inserito';
        case 'fr':
            return 'valeur déjà saisie';
        case 'es':
            return 'valor ya ingresado';
        case 'no':
            return 'verdi allerede lagt inn';
        case 'de':
            return 'wert bereits eingegeben';
        case 'en':
            return 'value already entered';
        case 'bg':
            return 'вече въведена стойност';
        case 'jp':
            return '入力済みの値';
        case 'tr':
            return 'önceden girilmiş değer';
        case 'ar':
            return 'تم إدخال القيمة بالفعل';
        default:
            return 'labelCategoryAlreadyEntered: lang not found ' + aLang;
    }
}


function labelNotRemovableDataFound(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'non removibile dato trovato';
        case 'fr':
            return 'données non amovibles trouvées';
        case 'es':
            return 'no se encontraron datos extraíbles';
        case 'no':
            return 'ikke flyttbare data funnet';
        case 'de':
            return 'nicht entfernbare daten gefunden';
        case 'en':
            return 'not removable data found';
        case 'bg':
            return 'не са намерени сменяеми данни';
        case 'jp':
            return 'リムーバブルデータが見つかりません';
        case 'tr':
            return 'çıkarılabilir veri bulunamadı';
        case 'ar':
            return 'لم يتم العثور على بيانات قابلة للإزالة';
        default:
            return 'labelNotRemovableDataFound: lang not found ' + aLang;
    }
}





function labelUpdate(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'aggiorna';
        case 'fr':
            return 'mettre à jour';
        case 'es':
            return 'actualizar';
        case 'no':
            return 'oppdater';
        case 'de':
            return 'aktualisieren';
        case 'en':
            return 'update';
        case 'bg':
            return 'актуализация';
        case 'jp':
            return '更新';
        case 'tr':
            return 'güncelleme';
        case 'ar':
            return 'تحديث';
        default:
            return 'labelUpdate: lang not found ' + aLang;
    }
}



function labelRemove(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'rimuovi';
        case 'fr':
            return 'supprimer';
        case 'es':
            return 'remove';
        case 'no':
            return 'remove';
        case 'de':
            return 'entfernen';
        case 'en':
            return 'remove';
        case 'bg':
            return 'премахване';
        case 'jp':
            return '削除';
        case 'tr':
            return 'kaldır';
        case 'ar':
            return 'إزالة';
        default:
            return 'labelRemove: lang not found ' + aLang;
    }
}


function labelOperationNotPermitted(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'operazione non permessa';
        case 'fr':
            return 'opération non autorisée';
        case 'es':
            return 'operación no permitida';
        case 'no':
            return 'drift ikke tillatt';
        case 'de':
            return 'betrieb nicht erlaubt';
        case 'en':
            return 'operation not permitted';
        case 'bg':
            return 'операция не е разрешена';
        case 'jp':
            return '操作は許可されていません';
        case 'tr':
            return 'işleme izin verilmiyor';
        case 'ar':
            return 'العملية غير مسموح بها';
        default:
            return 'labelOperationNotPermitted: lang not found ' + aLang;

    }
}


function labelRoundMatchEmptyFound(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'girone vuoto trovato';
        case 'fr':
            return 'groupe vide trouvé';
        case 'es':
            return 'grupo vacío encontrado';
        case 'no':
            return 'tom gruppe funnet';
        case 'de':
            return 'leere gruppe gefunden';
        case 'en':
            return 'empty round found';
        case 'bg':
            return 'намерена празна група';
        case 'jp':
            return '空のグループが見つかりました';
        case 'tr':
            return 'boş grup bulundu';
        case 'ar':
            return 'تم العثور على مجموعة فارغة';
        default:
            return 'labelRoundMatchEmptyFound: lang not found ' + aLang;
    }
}




function labelPhaseEnded(aLang, aIdDataPhase) {
    switch (aLang)
    {
        case 'it':
            return 'fase ' + aIdDataPhase + ' terminata';
        case 'fr':
            return 'phase ' + aIdDataPhase + ' terminée';
        case 'es':
            return 'fase ' + aIdDataPhase + ' terminó';
        case 'no':
            return 'fase ' + aIdDataPhase + ' ble avsluttet';
        case 'de':
            return 'phase ' + aIdDataPhase + ' endete';
        case 'en':
            return 'phase ' + aIdDataPhase + ' ended';
        case 'bg':
            return 'фаза ' + aIdDataPhase + ' приключи';
        case 'jp':
            return 'フェーズ ' + aIdDataPhase + ' が終了しました';
        case 'tr':
            return 'faz ' + aIdDataPhase + ' sona erdi';
        case 'ar':
            return 'انتهت ' + aIdDataPhase + 'المرحلة ';
        default:
            return 'labelPhaseEnded: lang not found ' + aLang;
    }
}


function labelInsert(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'inserisci';
        case 'fr':
            return 'insérer';
        case 'es':
            return 'insertar';
        case 'no':
            return 'sett inn';
        case 'de':
            return 'einfügen';
        case 'en':
            return 'insert';
        case 'bg':
            return 'вложка';
        case 'jp':
            return 'インサート';
        case 'tr':
            return 'insert';
        case 'ar':
            return 'إدراج';
        default:
            return 'labelInsert: lang not found ' + aLang;

    }
}

function labelDetails(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'dettagli';
        case 'fr':
            return 'détails';
        case 'es':
            return 'detalles';
        case 'no':
            return 'detaljer';
        case 'de':
            return 'einzelheiten';
        case 'en':
            return 'details';
        case 'bg':
            return 'детайли';
        case 'jp':
            return '細部';
        case 'tr':
            return 'ayrıntılar';
        case 'ar':
            return 'تفاصيل';
        default:
            return 'labelDetails: lang not found ' + aLang;

    }
}




function labelItemAddedToCart(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'articolo inserito nel carrello';
        case 'fr':
            return 'article ajouté au panier';
        case 'es':
            return 'artículo agregado al carrito';
        case 'no':
            return 'varen lagt i handlekurven';
        case 'de':
            return 'artikel in den warenkorb gelegt';
        case 'en':
            return 'item added to cart';
        case 'bg':
            return 'Артикулът е добавен в количката';
        case 'jp':
            return 'カートに追加されたアイテム';
        case 'tr':
            return 'ürün sepete eklendi';
        case 'ar':
            return 'تمت إضافة العنصر إلى سلة التسوق';
        default:
            return 'labelItemAddedToCart: lang not found ' + aLang;

    }
}




function labelItemRemovedFromCart(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'articolo rimosso dal carrello';
        case 'fr':
            return 'article retiré du panier';
        case 'es':
            return 'artículo eliminado del carrito';
        case 'no':
            return 'varen fjernet fra handlekurven';
        case 'de':
            return 'trtikel aus dem Warenkorb entfernt';
        case 'en':
            return 'item removed from cart';
        case 'bg':
            return 'артикулът е премахнат от количката';
        case 'jp':
            return 'カートから削除されたアイテム';
        case 'tr':
            return 'öğe sepetten kaldırıldı';
        case 'ar':
            return 'تمت إزالة العنصر من سلة التسوق';
        default:
            return 'labelItemRemovedFromCart: lang not found ' + aLang;

    }
}






function labelGlutenFree(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'senza glutine';
        case 'fr':
            return 'sans gluten';
        case 'es':
            return 'sin gluten';
        case 'no':
            return 'glutenfri';
        case 'de':
            return 'gluten-frei';
        case 'en':
            return 'gluten free';
        case 'bg':
            return 'без глутен';
        case 'jp':
            return '無グルテンの';
        case 'tr':
            return 'glütensiz';
        case 'ar':
            return 'خالي من الغلوتين';
        default:
            return 'labelGlutenFree: lang not found ' + aLang;

    }
}

function labelBookNow(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'prenota ora';
        case 'fr':
            return 'reserve maintenant';
        case 'es':
            return 'reservar ahora';
        case 'no':
            return 'bestill nå';
        case 'de':
            return 'buchen sie jetzt';
        case 'en':
            return 'book now';
        case 'bg':
            return 'pезервирайте сега';
        case 'jp':
            return '今予約する';
        case 'tr':
            return 'şimdi rezervasyon yap';
        case 'ar':
            return 'احجز الآن';
        default:
            return 'labelBookNow: lang not found ' + aLang;

    }
}


function labelExports(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'esporta';
        case 'fr':
            return 'exportations';
        case 'es':
            return 'exportaciones';
        case 'no':
            return 'eksport';
        case 'de':
            return 'exporte';
        case 'en':
            return 'exports';
        case 'bg':
            return 'износ';
        case 'jp':
            return '輸出';
        case 'tr':
            return 'ihracat';
        case 'ar':
            return 'صادرات';
        default:
            return 'labelExport: lang not found ' + aLang;

    }
}


function labelApply(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'applica';
        case 'fr':
            return 'appliquer';
        case 'es':
            return 'aplicar';
        case 'no':
            return 'søke om';
        case 'de':
            return 'anwenden';
        case 'en':
            return 'apply';
        case 'bg':
            return 'Приложи';
        case 'jp':
            return '適用する';
        case 'tr':
            return 'uygulamak';
        case 'ar':
            return 'تطبيق';
        default:
            return 'labelApply: lang not found ' + aLang;
    }
}


function labelItemNotAvailable(aLang) {
    switch (aLang)
    {
        case 'it':
            return 'articolo non disponibile';
        case 'fr':
            return 'objet non disponible';
        case 'es':
            return 'artículo no disponible';
        case 'no':
            return 'gjenstand ikke tilgjengelig';
        case 'de':
            return 'objekt nicht verfügbar';
        case 'en':
            return 'item not available';
        case 'bg':
            return 'продуктът не е в наличност';
        case 'jp':
            return 'アイテムはありません';
        case 'tr':
            return 'madde mevcut değil';
        case 'ar':
            return 'العنصر غير متاح';
        default:
            return 'labelItemNotAvailable: lang not found ' + aLang;

    }
}


function labelValueSmaller(aLang, aValue) {
    if ((typeof aValue) !== 'number') {
    //    throw 'labelValueSmaller: value not a number ' + aValue;
    }
    switch (aLang)
    {
        case 'it':
            return 'valore < ' + aValue;
        case 'fr':
            return 'valeur < ' + aValue;
        case 'es':
            return 'valor < ' + aValue;
        case 'no':
            return 'verdi < ' + aValue;
        case 'de':
            return 'wert < ' + aValue;
        case 'en':
            return 'value < ' + aValue;
        case 'bg':
            return 'стойност < ' + aValue;
        case 'jp':
            return '値 < ' + aValue;
        case 'tr':
            return 'değer < ' + aValue;
        case 'ar':
            return aValue + ' > ' + 'القيمة';
        default:
            return 'labelValueSmaller: lang not found ' + aLang;
    }
}


function labelValueEquals(aLang, aValue) {//todo test
    if ((typeof aValue) !== 'number') {
    //    throw 'labelValueSmaller: value not a number ' + aValue;
    }
    switch (aLang)
    {
        case 'it':
            return 'valore = ' + aValue;
        case 'fr':
            return 'valeur = ' + aValue;
        case 'es':
            return 'valor = ' + aValue;
        case 'no':
            return 'verdi = ' + aValue;
        case 'de':
            return 'wert = ' + aValue;
        case 'en':
            return 'value = ' + aValue;
        case 'bg':
            return 'стойност = ' + aValue;
        case 'jp':
            return '値 = ' + aValue;
        case 'tr':
            return 'değer = ' + aValue;
        case 'ar':
            return aValue + ' = ' + 'القيمة';
        default:
            return 'labelValueEquals: lang not found ' + aLang;
    }
}

