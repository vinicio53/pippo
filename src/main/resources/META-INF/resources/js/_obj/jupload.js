

function Jupload(aIdentifier, aIdPlugin, aMaxSize) {
    if ((typeof aIdentifier) !== 'string') {
        throw 'identifier typeof not a string';
    }
    if ((typeof aMaxSize) !== 'number') {
        throw 'maxsize not a number ' + aMaxSize;
    }
    this.__theIdentifier = removeSpace(aIdentifier);
    this.__theMaxSize = aMaxSize;
    //
    this.__theCxIdCols = [];
    this.__theAddContentType = 'f';
    //
    var myTokens = new Tokens(this.__theIdentifier, '_', 8);
    this.__theIdTable = myTokens.next();
    this.__theIdCol = myTokens.next();
    this.__theCxIdCol = parseInt(myTokens.next());
    this.__theIdData = myTokens.next();
    this.__theLang = myTokens.next();
    this.__theFileName = null;
    //
    this.__theIdPlugin = parseInt(aIdPlugin);
    switch (this.__theIdPlugin) {
        case 50063://8063:
            this.__theAddContentType = 't';
            break;
        default:
            break;
    }
}
;


Jupload.prototype.doStart = function () {
    var myThat = this;
    var myOptions = {
        url: 'upload.jsp',
        allowedTypes: '*',
        autoSubmit: true,
        multiple: false,
        fileName: 'file',
        maxFileSize: this.__theMaxSize,
        dynamicFormData: function () {
            var myDynamicData = {
                add_content_type: myThat.__theAddContentType,
                filename: myThat.getFileName()
            };
            return myDynamicData;
        },
        onSubmit:
                function (aFileName) {
                    myThat.setFileName(aFileName);
                },
        onError:
                function (aData) {
                    myThat.writeError();
                },
        onSuccess:
                function (aFiles, aData) {
                    myThat.writeSuccess(aData);
                }
    };
    $('#' + this.__theIdentifier).uploadFile(myOptions);
};


Jupload.prototype.writeError = function () {
    alert('todo writeError');
    __cleanValue(this.__theIdTable, this.__theIdCol);
};



Jupload.prototype.setFileName = function (aFileName) {
    this.__theFileName = aFileName[0];
};
Jupload.prototype.getFileName = function () {
    return this.__theFileName;
};





Jupload.prototype.getIdentifier = function (aCxIdCol) {
    var myIdentifier = 'vcmp';
    myIdentifier = myIdentifier + this.__theIdTable + '_';
    myIdentifier = myIdentifier + this.__theIdCol + '_';
    myIdentifier = myIdentifier + aCxIdCol + '_';
    myIdentifier = myIdentifier + this.__theIdData;
    if (this.__theLang !== null) {
        myIdentifier += '_' + this.__theLang;
    }
    return myIdentifier;
};




function cleanValue() {
    var myElement = $(this);
    var myIdAttr = myElement.attr('id');
    var myTokens = new Tokens(myIdAttr, '_', 6);
    var myIdTable = myTokens.next();
    var myIdCol = myTokens.next();
    __cleanValue(myIdTable, myIdCol);
}



function __cleanValue(aIdTable, aIdCol) {
    var myInputList = $('input[lvot]');
    myInputList.map(
            function () {
                var myMapElement = $(this);
                var myMapIdAttr = myMapElement.attr('id');
                var myMapTokens = new Tokens(myMapIdAttr, '_', 4);
                var myMapIdTable = myMapTokens.next();
                var myMapIdCol = myMapTokens.next();
                if (parseInt(aIdTable) === parseInt(myMapIdTable)) {
                    if (parseInt(aIdCol) === parseInt(myMapIdCol)) {

                        myMapElement.val('');
                        var myMapIdVal = myMapElement.attr('idval');
                        if (myMapIdVal !== undefined) {
                            myMapElement.attr('idval', '');
                        }
                    }
                }

            }
    );
}




Jupload.prototype.writeSuccess = function (aData) {
    var myTokens = new Tokens(aData, ' ', 0);
    switch (this.__theIdPlugin) {
        case 50000://obligatory image 
            this.setXv2(myTokens, 0);
            break;
        case 50001://nullable image 
            this.setXv2(myTokens, 0);
            break;
        case 50020://document
            var myVal1 = myTokens.next();
            var myVal2 = myTokens.next();
            if (myVal2 !== null) {
                alert(labelMediaNotValid(theLang));
            }
            else {
                new Writer(this.getIdentifier(1))._setVal(myVal1);
            }
            break;
        case 50023://9_023://document image langs 
            var myVal1 = myTokens.next();
            var myVal2 = myTokens.next();
            if (this.__theCxIdCol === 1) {
                if (myVal2 === null) {
                    myAlert(labelMediaNotValid(theLang));
                }
                new Writer(this.getIdentifier(1))._setVal(myVal1);
                new Writer(this.getIdentifier(2))._setVal(myVal2);
                new Writer(this.getIdentifier(3))._setVal(myTokens.next());
            }
            else {
                if (this.__theCxIdCol !== 4) {
                    throw 'CxIdCol !== 4';
                }
                new Writer(this.getIdentifier(4))._setVal(myVal1);
                if (myVal2 === null) {
                    alert(labelMediaNotValid(theLang));
                }
            }
            break;
        case 50060://gallery
            this.setXv2(myTokens, 0);
            break;
        case 50063://9_063://media
            var myVal1 = myTokens.next();
            var myVal2 = myTokens.next();
            var myVal3 = myTokens.next();
            if (myVal3 === null) {
                alert(labelMediaNotValid(theLang));
            }
            else {
                new Writer(this.getIdentifier(1))._setVal(myVal1);
                new Writer(this.getIdentifier(2))._setVal(myVal2);
                new Writer(this.getIdentifier(3))._setVal(myVal3);
                new Writer(this.getIdentifier(4))._setVal(myTokens.next());
            }
            break;
        case 50160://presentation1 03 March 2020
            this.setXv2(myTokens, 0);
            break;
        case 50162://9_160://presentation2
            this.setXv2(myTokens, 0);
            break;
        case 54180://9_180://item sipalax
            this.setXv2(myTokens, 0);
            break;
        case 54184://9_184://item alcott1
            //alert('item alcott1');
            if (this.__theCxIdCol === 1) {
                this.setXv2(myTokens, 0);
            }
            else {
                this.setXv2(myTokens, 3);
            }
            break;
        case 54186://9_186://item alcott2
            //alert('item alcott2');
            if (this.__theCxIdCol === 1) {
                this.setXv2(myTokens, 0);
            }
            else {
                this.setXv2(myTokens, 3);
            }
            break;
        case 54188://9_188://item alcott1
            //alert('item alcott1');
            if (this.__theCxIdCol === 1) {
                this.setXv2(myTokens, 0);
            }
            else {
                this.setXv2(myTokens, 3);
            }
            break;
        case 54190://grubbe 21 July 2020
            this.setXv2(myTokens, 0);
            break;
        case 52400://9400://color-1
            new Writer(this.getIdentifier(1))._setVal(myTokens.next());//qui butto via medium e icon 
            break;
        case 52402://9_402://color-2
            new Writer(this.getIdentifier(1))._setVal(myTokens.next());//qui butto via medium e icon 
            break;
        default:
            throw 'writeSuccess idPlugin not found: ' + this.__theIdPlugin;
    }
};



Jupload.prototype.setXv2 = function (aTokens, aIndex) {
    var myVal1 = aTokens.next();
    var myVal2 = aTokens.next();
    if (myVal2 === null) {
        alert(labelMediaNotValid(theLang));
    }
    else {
        new Writer(this.getIdentifier(aIndex + 1))._setVal(myVal1);
        new Writer(this.getIdentifier(aIndex + 2))._setVal(myVal2);
        new Writer(this.getIdentifier(aIndex + 3))._setVal(aTokens.next());
    }
};