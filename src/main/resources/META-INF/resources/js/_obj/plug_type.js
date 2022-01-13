


function PlugType(aLang, aIdPlugin) {
    if ((typeof aLang) !== 'string') {
        throw 'typeof not a string ' + aLang;
    }
    if ((typeof aIdPlugin) !== 'number') {
        throw 'typeof not a number ' + aIdPlugin;
    }
    //
    this.theFunct = null;
    this.theArgs = null;
    this.theIdPlugin = aIdPlugin;
    var myVal = null;
    try {
        //alert('aIdPlugin ==========' + aIdPlugin);
        switch (this.theIdPlugin)
        {
            case 11000:
                this.theFunct = checkNumber;
                this.theArgs = [aLang, myVal, null, null];
                return;
            case 11100:
                this.theFunct = checkNumber;
                this.theArgs = [aLang, myVal, 0, null];
                return;
            case 11101:
                this.theFunct = checkNumber;
                this.theArgs = [aLang, myVal, 1, null];
                return;
            case 11102:
                this.theFunct = checkNumber;
                this.theArgs = [aLang, myVal, 2, null];
                return;
            case 11203:
                this.theFunct = checkNumber;
                this.theArgs = [aLang, myVal, 0, 2];
                return;
            case 11300:
                this.theFunct = checkNumber;
                this.theArgs = [aLang, myVal, 0, 99];
                return;
            case 12002:
                this.theFunct = checkFloat;
                this.theArgs = [aLang, myVal, 2];
                return;
            case 12006:
                this.theFunct = checkFloat;
                this.theArgs = [aLang, myVal, 6];
                return;
            case 12007:
                this.theFunct = checkFloat;
                this.theArgs = ['en', myVal, 6];//05 Septmber 2020
                return;
            case 13002:
                this.theFunct = checkStrEqual;
                this.theArgs = [aLang, myVal, 2];
                return;
            case 13004:
                this.theFunct = checkStrEqual;
                this.theArgs = [aLang, myVal, 4];
                return;
            case 13008:
                this.theFunct = checkStrEqual;
                this.theArgs = [aLang, myVal, 8];
                return;
            case 13340:
                this.theFunct = checkPhone;
                this.theArgs = [aLang, myVal];
                return;
            case 13360:
                this.theFunct = checkEmail;
                this.theArgs = [aLang, myVal];
                return;
            case 14010:
                this.theFunct = checkStrLessEqual;
                this.theArgs = [aLang, myVal, 10];
                return;
            case 14020: //todo test
                this.theFunct = checkStrLessEqual;
                this.theArgs = [aLang, myVal, 20];
                return;
            case 14040:
                this.theFunct = checkStrLessEqual;
                this.theArgs = [aLang, myVal, 40];
                return;
            case 14050:
                this.theFunct = checkStrLessEqual;
                this.theArgs = [aLang, myVal, 50];
                return;
            case 14080:
                this.theFunct = checkStrLessEqual;
                this.theArgs = [aLang, myVal, 80];
                return;
            case 14400:
                this.theFunct = checkStrLessEqual;
                this.theArgs = [aLang, myVal, 400];
                return;
            case 14600:
                this.theFunct = checkStrLessEqual;
                this.theArgs = [aLang, myVal, 800];
                return;
            case 14800:
                this.theFunct = checkStrLessEqual;
                this.theArgs = [aLang, myVal, 2000];
                return;
            case 14900:
                this.theFunct = checkStrInfinity;
                this.theArgs = [aLang, myVal];
                return;
            case 15001:
                //todo test    
                this.theFunct = function(){ return '';};
                this.theArgs = [];
                return;
            case 15002:
                //todo test    
                this.theFunct = function(){ return '';};
                this.theArgs = [];
                return;
            case 15005:
                //todo test    
                this.theFunct = function(){ return '';};
                this.theArgs = [];
                return;
            case 15202:
                this.theFunct = checkShortDate;
                this.theArgs = [aLang, myVal];
                return;
            case 15204:
                this.theFunct = checkLongDate;
                this.theArgs = [aLang, myVal];
                return;
            case 15205://todo test
                this.theFunct = checkLongDate;
                this.theArgs = [aLang, myVal];
                return;
            case 15206://constrain date
                this.theFunct = checkConstrainDate;
                this.theArgs = [aLang, myVal];
                return;
            case 16004://interval HH:MM:SS
                this.theFunct = checkInterval4;
                this.theArgs = [aLang, myVal, null];
                return;
            case 16006://interval HH:MM:SS > 06:00:00
                this.theFunct = checkInterval4;
                this.theArgs = [aLang, myVal, 6];
                return;
            case 17101://large object content-type
                this.theFunct = checkValue;
                this.theArgs = [aLang, myVal];
                return;
            case 17102://large object binary
                this.theFunct = checkValue;
                this.theArgs = [aLang, myVal];
                return;
            case 60100://todo test    
                this.theFunct = function(){ return '';};
                this.theArgs = [];
                return;
            default:
                throw 'idplugin not found: ' + aIdPlugin;
        }
    }
    catch (e) {
        //alert('s');
        throw e.toString();
    }
    ;
}
;




PlugType.prototype.get = function (aValue) {
    if ((typeof aValue) !== 'string') {
        throw 'typeof not a string ' + aValue;
    }
    this.theArgs[1] = aValue;
    if(this.theIdPlugin === 15205){
        this.theArgs[1] += ':00';
    }    
    var myValue = this.theFunct.apply(this, this.theArgs);
    //alert('myValue =' + myValue);
    var myRet = trim(String(myValue));
    if(this.theIdPlugin === 15205){
        return myRet.substring(0, myRet.length - 3);;
    }
    return myRet;
};






