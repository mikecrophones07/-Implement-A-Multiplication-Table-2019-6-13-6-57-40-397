function generateMultiplicationTable (start, end) {
    return formulateRangeLogic(start, end, range(start, end));
}

function range(start, end) {
    var list = [];
    for (var i = start; i <= end; i++) {
        list.push(i);
    }
    return list;
  }

function formulateRangeLogic(start, end){
    let resultString = [];

    if (isStartLessthanEnd(start, end) === null){
        return null;
    }
    else if(isValidateRange(start, end) && isStartLessthanEnd(start, end)){
        for(tempEnd = end; tempEnd >= start; tempEnd--){
            let tempInitialResult = [];
            for(tempStart = start; tempStart <= tempEnd; tempStart++){
                let result = tempStart*tempEnd;
                tempInitialResult.push(tempStart+ 'x' + tempEnd + '=' + result);
            }
            resultString.push({value: tempInitialResult});
        }
        return formatString(resultString.reverse());
    }
    else{
        return 'Is Not Valid!'
    }
}

function formatString(multiplicationTable){
    let finalStringResult = '';
    multiplicationTable.forEach(arrayValue => {
        arrayValue.value.forEach(value =>{
            finalStringResult += value + ' ';
        });
        finalStringResult = finalStringResult.substring(0, finalStringResult.length-1);
        finalStringResult+='\n';
    });
    return finalStringResult.substring(0, finalStringResult.length-1);
}

function isStartLessthanEnd(start, end){
    if(start <= end){
        return true;
    }
    return null;
}

function isValidateRange(start, end){
    return (getRangeBoolCondition(start)) && (getRangeBoolCondition(end));
}

function getRangeBoolCondition(number){
    return number > 1 && number < 1000;
}

module.exports = {
    validateParameters: isStartLessthanEnd,
    validateRange:isValidateRange,
    generateMultiplicationTable:generateMultiplicationTable
};