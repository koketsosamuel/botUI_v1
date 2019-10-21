function converse() {

    let x = Math.ceil(Math.random() * (data.greetings.length - 1))
  
    bot.message.add({
  
      delay: 300,
      content: data.greetings[x]
  
    })


    defaultHandler()
    
  
  }