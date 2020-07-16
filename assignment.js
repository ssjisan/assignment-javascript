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


// Brick Calculator

function brickCalculator(floor){
    var firstToTen = (floor*15)*1000;
    var elevenToTwenty = (floor*12)*1000;
    var upToTwenty = (floor*10)*1000;
    if(floor<=10)
        console.log(firstToTen);
    else if(floor<=20)
        console.log(elevenToTwenty);
    else if(floor>20)
        console.log(upToTwenty);
    else if(floor<=0)
        console.log("check");
}
var result= brickCalculator(3) ;

// Tiny Friend
