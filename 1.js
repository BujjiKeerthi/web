document.getElementById("submitBtn").onclick=function(){
    let temp;
   if( document.getElementById("1").checked){
    temp=document.getElementById("text").value;
    temp=Number(temp);
    temp=toCelsius(temp)
    document.getElementById("mess").innerHTML=temp + "C";
   }
   else if(document.getElementById("2").checked){
    temp=document.getElementById("text").value;
    temp=Number(temp);
    temp=toFahrenheit(temp)
    document.getElementById("mess").innerHTML=temp + "F";
   }
   else{
    document.getElementById("mess").innerHTML="enter the value";

   }
}


function toCelsius(temp){
    return(temp-32)*(5/9);

}

function toFahrenheit(temp){
    return temp*9/5+32;
}