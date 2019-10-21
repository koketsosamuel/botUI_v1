var bot

var customer = {
  name: null,
  email: null,
  phone: null
}

let data = {

  title: "Hello",

  services: [

    {
      title: "one",
      body: "lorem 1"
    }

  ],

  about: [

  ],

  greetings: ["hi", "hello", "hey!", "greetings"]


}


async function init() {


  let botSpace = document.getElementById("botSpace")
  let node = document.createElement("style")
  
  let htm = `
  
  <div class="chatBot" id="chatBot">

    <div class="head">
      <div class="flex-v-center">
        <div class="nav">
          
          <p class="bot-name">${data.title}</p>
          <i class="fas fa-times-circle btn"></i>

        </div>
      </div>
    </div>
    <div class="body" id="bot-${data.title}">
  
      <div id="body">
        <bot-ui></bot-ui>
      </div>
      
    </div>

  </div>
  
  `


  botSpace.innerHTML = await htm
  // node.innerHTML = css
  // document.head.appendChild(node)

  bot = await new BotUI("bot-"+data.title)
  converse()

  
}


function msg(c, d = 0) {

  let bool = false

  if(d > 0) {
    bool = true
  }

  bot.message.add({
    delay: d,
    content: c,
    loading: bool
  })
}

init()
