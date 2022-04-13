const sumAll = function(num1, num2) {
    if(Number.isInteger(num1)&&Number.isInteger(num2)&&num1>=0&&num2>=0){
        let sum=0;
        const [start, end]=num1>=num2?[num2, num1]:[num1,num2];
        for(i=start;i<=end;i++){
            sum+=i;
        }
        return sum;
    }

    return "ERROR";

};

// Do not edit below this line
module.exports = sumAll;
