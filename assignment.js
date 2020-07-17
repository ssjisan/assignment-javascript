// Feet To Miles 

function feetToMile (feet){
    if(feet < 0 ){
    return "Distance Cannot Be Negative";    
}
    else{
        var mile= feet*0.000189;
        return mile;
    }
    
}
var answer = feetToMile();
console.log(answer);

//  Wood Calculator

function woodCalculator(chair,table,bed){
    if (chair<0 || table<0 || bed<0){
        return "Enter Correct Ammount";
    }
    else{
        var woodForChair=   chair*1;
        var woodForTable=   table*3;
        var woodForBed=     bed*5;
        var total= woodForChair + woodForTable + woodForBed;
        return total;
    }
       

}
var answer = woodCalculator() ;
console.log(answer);


// Brick Calculator

function brickCalculator(floor){
    if(floor <= 0){
        console.log("Enter Something Valid");
    }
    else{
        var firstToTen = (floor*15)*1000;
    var elevenToTwenty = (floor*12)*1000;
    var upToTwenty = (floor*10)*1000;
    if(floor<=10)
        console.log("You need Total", firstToTen, "bricks");
    else if(floor<=20)
        console.log("You need Total", elevenToTwenty, "bricks");
    else if(floor>20)
        console.log("You need Total", upToTwenty, "bricks");
    }
    
}
var result= brickCalculator() ;

// Tiny Friend

function tinyFriend(name){
    if(name== ""){
        return "Enter Something";
    }
    else{
        var myFriends = name[0];
        for(var i = 0; i < name.length; i++){
            var currentName = name[i];
            if(currentName.length < myFriends.length){
                myFriends = currentName;
            }
        }
        return myFriends;
    }
       
    }

var myTinyFriend = tinyFriend([]);
console.log(myTinyFriend);