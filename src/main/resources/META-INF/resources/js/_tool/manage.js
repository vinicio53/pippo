


function _manageOpError(aLang, aData) {
    if (aData.length === 0) {
        throw 'data_length is 0';
    }
    var myRet = null;
    if (isNaN(aData)) {
        if (aData.includes('timpk_cart_data: item not found')) {
            myRet = labelItemNotAvailable(aLang);
        }
        
        if (aData.includes('update or delete on table')) {
            myRet = labelNotRemovableDataFound(aLang);
        }
        if (aData.includes('duplicate key value violates unique constraint')) {
            myRet = labelValueAlreadyEntered(aLang);
        }
        if (aData.includes('timpk_legend_data: upper2 null found')) {
            myRet = labelRoundMatchEmptyFound(aLang);
        }
        if (aData.includes('match empty found')) {
            myRet = labelRoundMatchEmptyFound(aLang);
        }
        if (aData.includes('trgk_legend_update: number_tourney')) {
            var myTokens = new Tokens(aData, ' ', 32);
            var myT1 = myTokens.next();
            var myT2 = myTokens.next();
            var myData = myTokens.next();
            myRet = labelValueGreater(aLang, parseInt(myData));
        }
        if (myRet === null) {
            myRet = aData;
        }
    }
    else {
        var myCode = parseInt(aData);
        switch (myCode) {
            case J_INDEX_RELOAD:
                myRet =  labelValueNotFound(aLang);//todo test
                break;
            case OP_USER_LOGIN_FAIL:
                myRet = labelFailLogin(aLang);//todo test
                break;
            case OP_USER_CAPTCHA_FAIL:
                myRet = labelFailLogin(aLang) + '/' + labelFailCaptcha(aLang);//todo test
                break;
            case OP_USER_LOGIN_YET_LOGGED:
                myRet = labelCloseOtherSession(aLang);//todo test
                break;

            case OP_USER_RESET_TOKEN_FAIL:
                myRet = labelValueNotFound(aLang);
                break;
            case OP_USER_RESET_CAPTCHA_FAIL:
                myRet = labelFailCaptcha(aLang);
                break;
            case OP_USER_RESET_PWD_FAIL:
                myRet = labelValueNotFound(aLang);
                break;
            case OP_COUPON_NOT_VALID:    //--todo test
                myRet = labelCouponNotValidFoundMsg(aLang);
                break;
            //    
            default:
                myRet = 'default: ' + myCode;//todo test
                break;
        }
    }
    ___popupContent(myRet);
    return myRet;
}





