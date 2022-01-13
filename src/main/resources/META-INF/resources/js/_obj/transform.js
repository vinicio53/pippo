
function Transform(aForceResfresh) {
    //alert((typeof aResfresh));
    if ((typeof aForceResfresh) !== 'boolean') {
        throw 'Identifier not a boolean ' + aForceResfresh;
    }
    this._theForceResfresh = aForceResfresh;
    //
    if (window.ActiveXObject)
    {
        this._theXhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } else
    {
        this._theXhttp = new XMLHttpRequest();
    }
}

Transform.prototype._loadXML = function (aFileName) {
    var myUrl = aFileName;
    if (this._theForceResfresh) {
        myUrl += '?s=0';
    }

    this._theXhttp.open('GET', myUrl, false);
    try {
        this._theXhttp.responseType = "msxml-document";
    } catch (err) {
    } // Helping IE11
    this._theXhttp.send('');
    var myRet = this._theXhttp.responseXML;
    return myRet;
};




Transform.prototype.doApply = function (aXml, aPathXsl) {
    var myDOMParser = new DOMParser();
    var myXml = myDOMParser.parseFromString(aXml, 'text/xml');
    //var myXml = new XMLDocument(s);
    //var myXml = myXMLDocument.load(s)
    //var myXml = this._getXML(aXml);
    //var myXml = this._loadXML('');
    var myXsl = this._loadXML(aPathXsl);
    // code for IE
    if (window.ActiveXObject || this._theXhttp.responseType === "msxml-document")
    {
        var ex = myXml.transformNode(myXsl);
        return ex;
    }
    // code for Chrome, Firefox, Opera, etc.
    else if (document.implementation && document.implementation.createDocument)
    {
        var myXSLTProcessor = new XSLTProcessor();
        myXSLTProcessor.importStylesheet(myXsl);
        var myResult = myXSLTProcessor.transformToFragment(myXml, document);
        return myResult;
    }
};



