console.log(this);
// this refers to global object

function myFunction(){
    console.log(this);
    // this refers to global object
}

var charInfo = {
    name : "Ram" ,
    age : 17 ,
    gender : "Male" ,
    votable : function() {
        if(this.age<18){
            console.log("Not Eligible!");

            remAge = 18 - this.age ;
            console.log("Come after " + remAge + " year");
            // here,this refers to owner object i.e charInfo
        }
        else {
            console.log("Eligible");
        }
    }
}

myFunction();
charInfo.votable();