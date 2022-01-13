


function jGET_login(aUrl, aType, aSuccessFunction, aErrorFunction) {//_jopLogin
    if (aType === undefined) {
        throw 'aType === undefined';
    }
    //
    theJRoller.rollerOpen();
    $.ajax(
            {
                type: 'GET',
                url: aUrl,
                error:
                        function (aError) {
                            ___popupContent(aError.responseText);
                        },
                success:
                        function (aData) {
                            var myData = trim(aData);
                            if (myData.length === 0) {
                                if (aType === true) {
                                    theJRoller.rollerClose();
                                }
                                else {
                                    ___popupContent(labelDoneMsg(theLang));
                                }
                                aSuccessFunction.apply();
                            }
                            else {
                                aErrorFunction.apply();
                                _manageOpError(theLang, myData);
                                theJRoller.rollerClose();
                            }
                        }

            }
    );
}






function _jGET_popup(aJElem, aUrl) {
    if (aJElem !== null) {
        aJElem.setBlur();
    }
    theJRoller.rollerOpen();
    $.ajax(
            {
                type: 'GET', url: aUrl,
                error:
                        function (aError) {
                            ___popupContent(aError.responseText);
                            theJRoller.rollerClose();
                        },
                success:
                        function (aData) {
                            var myData = trim(aData);
                            if (parseInt(myData) === J_INDEX_RELOAD) {
                                reloadApplication();
                            }
                            else {
                                ___popupContent(myData);
                                theJRoller.rollerClose();
                            }
                        }
            }
    );
}








function jGET_value(aUrl, aFunction) {
    theJRoller.rollerOpen();
    $.ajax(
            {
                type: 'GET',
                url: aUrl,
                error:
                        function (aData) {
                            ___popupContent(aData.responseText);
                            theJRoller.rollerClose();
                        },
                success:
                        function (aData) {
                            var myData = trim(aData);
                            if (parseInt(myData) === J_INDEX_RELOAD) {
                                reloadApplication();
                            }
                            else {
                                var myArgs = [myData];
                                aFunction.apply(this, myArgs);
                                theJRoller.rollerClose();
                            }
                        }
            }
    );

}





function jGET_op(aUrl, aType, aFunction) {
    if (aType === undefined) {
        throw 'aType === undefined';
    }
    //
    theJRoller.rollerOpen();
    $.ajax(
            {
                type: 'GET',
                url: aUrl,
                error:
                        function (aError) {
                            ___popupContent(aError.responseText);
                            theJRoller.rollerClose();
                        },
                success:
                        function (aData) {
                            var myData = trim(aData);
                            //alert('myData =' + myData);
                            if (myData.length === 0) {
                                if (aType !== null) {
                                    if (aType === true) {
                                        __doMessage(labelDoneMsg(theLang));
                                    }
                                    else {
                                        ___popupContent(labelDoneMsg(theLang));
                                    }
                                }
                                aFunction.apply();
                                theJRoller.rollerClose();
                            }
                            else {
                                _manageOpError(theLang, myData);
                                theJRoller.rollerClose();
                            }
                        }
            }
    );
}



function _jPOST_op(aParams, aType, aMessage, aFunction) {
    console.log('*********_jPOST_op');
    for(var k in aParams){
        console.log(k + '=' + aParams[k]);
    }
    //
    //
    theJRoller.rollerOpen();
    $.ajax(
            {
                type: 'POST',
                url: 'opm.jsp',
                data: aParams,
                error:
                        function (aData) {
                            ___popupContent(aData.responseText);
                            theJRoller.rollerClose();
                        },
                success:
                        function (aData) {
                            var myData = trim(aData);
                            console.log('succes: ' + myData + '|');
                            var myLen = myData.length;
                            if (myLen === 0) {
                                if (aType !== null) {
                                    if (aType === true) {
                                        __doMessage(aMessage);
                                    }
                                    else {
                                        ___popupContent(aMessage);
                                    }
                                }
                                aFunction.apply();
                                theJRoller.rollerClose();
                            }
                            else {
                                _manageOpError(theLang, myData);
                                theJRoller.rollerClose();
                            }
                        }
            }
    );

}



