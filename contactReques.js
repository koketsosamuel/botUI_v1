async function contactRequest(m) {

    let customer = {
      name: null,
      cellNo: null,
      email: null,
      topic: "Info on "+ m
    }
  
    await msg("Great, give your details and we will contact you with more info", 1000)
    await msg("Please start by giving me your name", 300)
   
    bot.action.text({
      action: {
        placeholder: "Sam Utunga"
      }
    }).then(async res => {
  
      customer.name = res.value
  
      await msg("please give me your cellphone number", 300)
  
      bot.action.text({
        action: {
          placeholder: "+27793014047"
        }
      }).then(async res => {
        
        customer.cellNo = res.value
  
        await msg("Do you have an email?", 300)
  
        bot.action.button({
          action: [
            {
              text: "Yes",
              value: "yes"
            },
            {
              text: "No",
              value: "no"
            }
          ]
        }).then(async res => {
  
          if(res.value == "yes") {
  
            await msg("can you please give it to me", 300)
            bot.action.text({
              action: {
                placeholder: "nixcornn@koklatech.com"
              }
            })
            
  
          } else {
  
            await msg("Great! We will be sure to contact you", 300)
            defaultHandler(false)          
  
          }
  
        })
    
      })
  
    })
  
  }