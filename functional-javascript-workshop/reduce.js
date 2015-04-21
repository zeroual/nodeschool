function countWords(inputWords) {

    var initialValue={};
    return inputWords.reduce(function (previousValue,currentValue) {
        if(previousValue[currentValue]===undefined){
            previousValue[currentValue]=1;
        }else{
            previousValue[currentValue]=Number(previousValue[currentValue])+1;
        }
       return previousValue;
    },initialValue);
}

module.exports = countWords