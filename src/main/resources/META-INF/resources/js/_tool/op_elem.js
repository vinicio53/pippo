//necessary window-edge
$.ajaxSetup({cache: false});



function jreadPage(aJElem, aUrl, aXslPath____) {
    //alert('jreadPage');
    theJRoller.rollerOpen();
    $.ajax(
            {
                type: 'GET', 
                url: aUrl,
                datatype: 'text/html',
                error:
                        function (aError) {
                            alert(aError.responseText);
                            theJRoller.rollerClose();
                        },
                success:
                        function (aData) {
                            //alert('aData ' + aData);
                            //var x = new XMLSerializer().serializeToString(aData.documentElement);
                            //var x = new XMLSerializer().serializeToString(aData);
                            //alert('x ' + x);
                            
                            //var xml_string = jQuery(aData).text();
                            aJElem.setHtml(aData);
                            
                            //alert(xml_string);
                            //alert($.parseXML( aData ));

                            
                        /*
                            var myData = trim(aData);
                            alert('myData =' + myData);
                            //var myRet = new Transform(true).doApply(myData, aXslPath);
                            var myRet = myData;
                            aJElem.setHtml(myRet);
                            aJElem.doShow('slow');
                            //aFunction.apply();
                            theJRoller.rollerClose();*/
                        }
            }
    );
}






