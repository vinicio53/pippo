function JChart(aIdentifier, aIdPlugin, aTitle) {
    if ((typeof aIdPlugin) !== 'number') {
        throw 'Identifier not a number ' + aIdPlugin;
    }
    this.__theIdPlugin = aIdPlugin;
    this.__theTitle = aTitle;
    //
    this.__theIndex = 1;
    this.__theIdentifier = $('#' + aIdentifier)[0];
    this.__theBorderColor = 'darkblue';
    this.__theBorderWidth = 1;

    //
    this.__theLabels = new Array();
    this.__theBackgroundColor = new Array();
    this.__theValues = new Array();
}



JChart.prototype.__getDataSet = function (aIndex) {
    var myDataSet = {
        borderColor: this.__theBorderColor,
        borderWidth: this.__theBorderWidth,
        //
        label: this.__theTitle + ' - ' + aIndex,
        backgroundColor: this.__theBackgroundColor[aIndex],
        data: this.__theValues[aIndex]
    };
    return myDataSet;
};



JChart.prototype.drawValues = function () {
    var myDataSet_0 = this.__getDataSet(0);
    var myDataSet_1 = this.__getDataSet(1);
    var myDataSets = {
        labels: this.__theLabels,
        datasets: [myDataSet_0, myDataSet_1]
    };
    var myChartData = {
        type: 'bar',
        data: myDataSets,
        options: {
            responsive: false,
            maintainAspectRatio: true,
            legend: {
                display: false
            },
            scales: {
                xAxes: [
                    {
                        stacked: true
                    }
                ],
                yAxes: [{
                        stacked: true
                    }]
            }
        }
    };
    var myCtx = this.__theIdentifier.getContext('2d');
    new Chart(myCtx, myChartData);
    return this.__theValues;
};


JChart.prototype.setValues = function (aValues) {
    switch (this.__theIdPlugin) {
        case 48001:
            this.__theBackgroundColor.push('lightgray');
            var i = 0;
            var myTokens = new Tokens(aValues, '#', 0);
            var myValue = myTokens.next();
            while (myValue !== null) {
                //alert('myValue =' + myValue);
                this.__theLabels[i] = (i + 1).toString();
                //
                myValue = myTokens.next();
                i += 1;
            }
            //alert('i =' + i);
            break;
        case 48002:
            this.__theBackgroundColor.push('lightgray');
            this.__theBackgroundColor.push('red');
            for (var k = 0; k < 7; k++) {
                this.__theLabels[k] = (k).toString();
            }
            break;
        default:
            throw 'idplugin not found: ' + this.__theIdPlugin;
    }

    //
    var myDataSet1 = new Array();
    var myDataSet2 = new Array();
    var myTokens1 = new Tokens(aValues, '#', 0);
    var myRow = '';
    while (myRow !== null) {
        var myRow = myTokens1.next();
        //alert('myRow =' + myRow);
        //aValues
        if (myRow !== null) {
            var myTokens2 = new Tokens(myRow, ' ', 0);
            var myIdGraph = myTokens2.next();
            var myIdentifier = myTokens2.next();
            var myVal1 = myTokens2.next();
            var myVal2 = myTokens2.next();

            switch (this.__theIdPlugin) {
                case 48001:
                    myDataSet1.push(myVal1);
                    this.__theIndex += 1;
                    break;
                case 48002:
                    myDataSet1.push(myVal1);
                    myDataSet2.push(myVal2);
                    this.__theIndex += 1;
                    break;
                default:
                    throw 'idplugin2 not found: ' + this.__theIdPlugin;
            }
        }
    }
    this.__theValues.push(myDataSet1);
    this.__theValues.push(myDataSet2);
};

