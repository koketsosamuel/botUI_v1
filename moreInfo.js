async function moreInfo(m) {

    await msg(m.msg, 1000)
  
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
      ],
      delay:1111
    }).then(async res => {
  
      if(res.value == "yes") {
        contactRequest(m.topic)
      } else {
        responder("u")
      }
  
    })
  
  }
  
  