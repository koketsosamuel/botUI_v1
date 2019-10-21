async function defaultHandler(firstCall = true) {

    let buttons = []
  
    if(firstCall == false) {
  
      await msg("Anything else?", 300)
  
    } else {

      await msg("Any information you would like to know?", 1222)

    }
  
    if(data.services.length > 0) {
      await buttons.push({
        text: "Services",
        value: "services"
      })
    }
  
    if(data.about.length > 0) {
  
      await button.push({
        text: "About you",
        value: "about"
      })
  
    }
  
    buttons.push({value: "ok", text: "Nothing for now"})

    bot.action.button({
      action: buttons,
      delay: 1400
    }).then(res => {
  
      responder({value:res.value, main: true})
  
    })
   
  
  }