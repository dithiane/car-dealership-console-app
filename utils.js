//this array extension takes in a key and value pair and it will return a number that represents the number of times the value paramter appears on the key parameter within the array getCountByKeyValue is called upon
Array.prototype.getCountByKeyValue = function(key,value){
    var valueCount = 0;
    for (let i = 0; i < this.length; i++) {
        if(this[i][key] === value){
            valueCount++;
        };
    };
    return valueCount;
};

//helper function to generate a random number with 2 decimal places between the provided parameters
function getRandomPrice(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
};
function getRandomNum(min, max) {
    return (Math.random() * (max - min) + min);
};
//helper function for displaying difference in 2 dates provided
var dateDiff = {
    inDays: function (d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
        return parseInt((t2 - t1) / (24 * 3600 * 1000));
    },
    inWeeks: function (d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
        return parseInt((t2 - t1) / (24 * 3600 * 1000 * 7));
    },
    inMonths: function (d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();
        return (d2M + 12 * d2Y) - (d1M + 12 * d1Y);
    },
    inYears: function (d1, d2) {
        return d2.getFullYear() - d1.getFullYear();
    }
};
