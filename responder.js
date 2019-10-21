async function responder(x) {

	let buttons = []

	// services
	if(x.value == "services" && x.main) {

		for(let i = 0; i < data.services.length; i++) {
			buttons.push({

				text: data.services[i].title,
				value: i

			})
		}

		msg("Which service would you like to know about?", 500)

		setTimeout(() => {
			bot.action.button({
				action: buttons, 
				delay: 333
			}).then(async res => {
	
				await msg(data.services[Number(res.value)].body, 600)
				setTimeout(() => {
	
					moreInfo({msg: "Should we contact you with more info?", topic: data.services[Number(res.value)].title})
				}, 1000)
	
			})
		}, 	1000)

	} 
	
	// 
	else if(x.value == "about" && x.main) {

		for(let i = 0; i < data.about.length; i++) {
			buttons.push({

				text: data.about[i].title,
				value: i

			})
		}

		bot.action.button({
			action: buttons
		}).then(async res => {

			await msg(data.about[Number(res.value)].body, 1000)
			moreInfo({msg: "Should we contact you with more info?", topic: data.about[Number(res.value)].title})

		})

	} else {

		await msg("Alright, you will greet me as soon as you might want more info", 900)

	}
		


}