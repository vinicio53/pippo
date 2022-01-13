function Struct(aIdTable, aIdCol) {
    this.__theIdTable = aIdTable;
    this.__theIdCol = aIdCol;
}


Struct.prototype.setFields = function(aValues) {
    var myTokens = new Tokens(aValues, '#', 0);
    var myRow = '';
    var myCxIdCol = 1;
    var _myPrefix = '#vstc' + this.__theIdTable + '_' + this.__theIdCol;
    while (myRow !== null) {
        var myRow = myTokens.next();
        if (myRow !== null) {
            var myTokens2 = new Tokens(myRow, ' ', 0);
            //var myIdGroupCst = myTokens2.next();
            //
            var myIdDataCst = myTokens2.next();
            var myIdentifier0 = _myPrefix + '_' + myCxIdCol + '_0';
            new JElem(myIdentifier0).setVal(myIdDataCst);
            //
            var myVal1 = myTokens2.next();
            var myIdentifier1 = _myPrefix + '_' + myCxIdCol + '_1';
            new JElem(myIdentifier1).setVal(myVal1);
            //
            var myVal2 = myTokens2.next();
            if (myVal2 !== null) {
                var myIdentifier2 = _myPrefix + '_' + myCxIdCol + '_2';
                new JElem(myIdentifier2).setVal(myVal2);
            }
            //
            myCxIdCol += 1;
        }
    }
};




