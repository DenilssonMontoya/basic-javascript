function calAppoinmentCost(appointmentNumber){

    //Validations
    if(typeof appointmentNumber === "undefined" ){
        alert("Must enter a value!");
        return;
    }

    if(appointmentNumber <=0 ){
        alert("Must enter a positive value.");
        return;
    }


    //Calculations
    let appointmentCost = 0;
    let treatmentCost = 0;
    let currentAppointmentCost = 0;


    for (let index = 1; index <= appointmentNumber; index++) {
        
        if(index <= 3){
            appointmentCost = 200;
        }
    
        if(index === 4 || index === 5){
            appointmentCost = 150;            
        }
    
        if(index >= 6 && index <= 8){
            appointmentCost = 100;            
        }
    
        if(index > 8){
            appointmentCost = 50;            
        } 

        treatmentCost = treatmentCost + appointmentCost;
        currentAppointmentCost = appointmentCost;        
    }

    document.getElementById("appointmentCost").innerHTML = currentAppointmentCost;
    document.getElementById("treatmentCost").innerHTML = treatmentCost;
    document.getElementById("appointmentNumberResult").innerHTML = appointmentNumber;
    


    document.getElementById("results").style.visibility="visible";
    document.getElementById("data").style.visibility="hidden";



}

function clearValue(){
    document.getElementById("appointmentNumber").value = null;
    document.getElementById("results").style.visibility="hidden";
    document.getElementById("data").style.visibility="visible";

    document.getElementById("appointmentNumber").focus();
    document.getElementById("appointmentNumber").select();    

}