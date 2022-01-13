
function JHash() {
    this._theHash = {};
}

JHash.prototype._doReset = function () {
    this._theHash = {};
};



JHash.prototype._checkExist = function (aKey) {
    if (this._theHash.hasOwnProperty(aKey)) {
        return true;
    }
    else {
        return false;
    }
};


JHash.prototype._setValue = function (aKey, aVal) {
    this._theHash[aKey] = aVal;
};


JHash.prototype.__getValue = function (aKey) {
    if (this._checkExist(aKey)) {
        return this._theHash[aKey];
    }
    else {
        throw '_getValue: key not found ' + aKey;
    }
};

