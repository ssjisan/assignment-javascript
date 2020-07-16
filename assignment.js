// Feet To Miles 

function feetToMile (feet){
    var mile= feet*0.000189;
    return mile;
}
var answer = feetToMile(20000);
console.log(answer);

//  Wood Calculator

function woodCalculator(chair,table,bed){
    var woodForChair=   chair*1;
    var woodForTable=   table*3;
    var woodForBed=     bed*5;
    var total= woodForChair + woodForTable + woodForBed;
    return total;
}
var answer = woodCalculator(1,1,1) ;
console.log("You need total" ,answer,"cubic feet wood.");

// Tiny Friend

// Brick Calculator