const repeatString = function(inputStr, numRepeat) {

let result = "";

if(numRepeat<0){ // number of repetitions less than 0
    return "ERROR";

}else{ // Non-empty input string and non-zero number of repetition

    for(i=1;i<=numRepeat;i++){
        result+=inputStr;
    }
}
return result;

};

// Do not edit below this line
module.exports = repeatString;
