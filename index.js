function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet > 2500){
    return "No can do.";
    console.log("No can do.")
  }else if (feet <= 400){
    let message = "This one is on me!"
    console.log(message)
    return(message)
    
  } else if(feet > 2000){
    let charges = "I will gladly take your thirty bucks.";
    console.log(charges)
    return(charges)
    
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city == "NYC"){
    return "Ok, sounds good."
  }else{
    return "No go."
  }
}

function switchOnCharmFromTip(tip){
  const Bye = "Bye."
  // Write your code here!
  if (tip == "generous"){
    return "Thank you so much."
  }else if(tip != "generous"){
    return "Thank you."
  }else{
    return Bye
  }
}