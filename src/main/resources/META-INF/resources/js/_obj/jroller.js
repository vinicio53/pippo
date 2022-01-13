
function JRoller() {
    this.__theCounter = 1;
}

JRoller.prototype.rollerOpen = function () {
    this.__theCounter += 1;
    if (this.__theCounter === 1) {
        new JElem('div_loading').doShow('slow');
    }
};


JRoller.prototype.rollerClose = function () {
    this.__theCounter -= 1;
    if (this.__theCounter === 0) {
        new JElem('div_loading').doHide('slow');
    }
};
