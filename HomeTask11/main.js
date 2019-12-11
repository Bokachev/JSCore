let currentDate = new Date();
 
global.date = currentDate;
 
module.exports.getMessage = function(){
    let hour = currentDate.getHours();
    console.log(currentDate);
    if(hour >18)
        return "Good evening, " + name;
    else if(hour >10)
        return "Good afternoon, " + name;
    else
        return "Good morning, " + name;
}