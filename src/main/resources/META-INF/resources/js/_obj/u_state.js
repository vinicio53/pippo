
function UState() {
    this.__theGoToCart = false;
}




UState.prototype.setGoToCart = function (aValue) {
    if ((typeof aValue) !== 'boolean') {
        throw 'value not a boolean ' + aValue;
    }
    this.__theGoToCart = aValue;
};



UState.prototype.getGoToCart = function () {
    return this.__theGoToCart;
};




