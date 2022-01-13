
function VLoop(aTimeout) {
    this.__theTimeout = aTimeout;
    //
    this.__theTimerList = new Array();
    this.__theIsEnable = false;
    this.__theCount = 0;
}

VLoop.prototype = {
    constructor: VLoop,
            
    stop: function() {
        this.__theCount = 0;
        this.__theIsEnable = false;
        var myLength = this.__theTimerList.length;
        
        for(var k = 0; k < myLength; k++) {
            var myTimer = this.__theTimerList[k];
            clearTimeout(myTimer);
        }
        this.__theTimerList = new Array();
        return myLength;
    },
    enable: function() {
        this.__theIsEnable = true;
    },
    work: function(aFunction) {
        if (! this.__theIsEnable) {
            return;
        }
        if( this.__theCount > 0) {
            $(aFunction);
        }
        this.__theCount += 1;
        //
        var that = this;
        var callMethod = function()
        {
            that.work(aFunction);
        };
        var myTimer = setTimeout(callMethod, this.__theTimeout);
        this.__theTimerList.push(myTimer);    
    }

};
