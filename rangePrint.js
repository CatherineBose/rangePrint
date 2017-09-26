var startingNum1= 2;
var endingNumber1 = 10;
var skipAmount =2;


function rangePrint(start,end,skipValueBy){
    console.log("skipValueBy:", skipValueBy);
    console.log("start: ", start);
    console.log("end:", end);
        if (skipValueBy===undefined || skipValueBy==0){
          skipValueBy = 1;
          console.log("skipValueBy is not defined, set to :", skipValueBy);
        } 
        if(end===undefined){
            
            end = start - 1;
            start = 0;
            console.log("End is undefined, set to: ", end);
            console.log("new start: ", start);
        }
        
        for(var i =start;i<end; i += skipValueBy ){
            //  console.log("inside for loop:")
            //  console.log("skipValueBy:", skipValueBy);
            //  console.log("end:", end);
            //  console.log("start: ", start);
            console.log("i:",i);
        }
}

//rangePrint(startingNum1,endingNumber1,skipAmount)
//rangePrint(startingNum1,endingNumber1)
rangePrint(5)