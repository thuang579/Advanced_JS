module.exports = function(robot){

  robot.hear(/yomamma/i, function(msg){
    msg.send("Don't you be talkin bout my mamma!")
  })

  robot.hear(/cowboys/i, function(msg){
    msg.send("@huangti no sports!")
  })

//Mindful code for "In", "Out"
  robot.hear(/\bin\b/i, function(msg){
    msg.send("Breathing in, I know you're breathing in.")
  })

  robot.hear(/out/i, function(msg){
    msg.send("Breathing out, I know you're breathing out.")
  })


  //Code for reply
  robot.respond(/suffering/i, function(msg){
    msg.reply("I know you are suffering, and I am here for you.")
  })

  //Code with time conditional
  robot.hear(/up/i, function(msg){

    var d = new Date();
    var h = d.getHours();

    if (h < 12){
      msg.send("Waking up this morning, you smiled. \n More than half the day is before you. Live each moment mindfully.")
    }

    else {
      msg.send("Waking up this morning, you smiled. \n The rest of the day is still before you.  \n Live each moment mindfully.")
    }
  })


  //Code with For Loop

  robot.hear(/just keep breathing/i, function(msg){

    for (i = 0; i <= 8; i++) {
      msg.send("In... Out...")
    }
  })

  //Random

  //Image
}
