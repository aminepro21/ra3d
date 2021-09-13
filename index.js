const Discord = require('discord.js');


const client = new Discord.Client();
const quickuptime = require('quickuptime')
let data = {
httpclient: "node-fetch"
}
const db = require('quick.db')



client.on("ready", async() => {
  await Client.uniquestartall(true)
        console.log(`I 'm online!`) 
        client.user.setPresence({ activity: { name: '-codes' }})
        });



const prefix = "-"
let owner = '776951974138216473'
let price1 = 1;
let price2 = 2;
 let cooldown = 36000000;
 client.on('message', async message => {
   if(message.channel.id === '854290707526451201') {
    if(message.author.bot) return;
    await message.delete()
     message.channel.send(`${message.author} your order has been sent`).then(msg =>{
      setTimeout(function() {
    msg.delete()
    }, 5000)
    })
    let orderembed = new Discord.MessageEmbed()
    .setColor('#FF1493')
    .setTitle(`by ${message.author.tag}`)
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription(message.content)
    await message.guild.channels.cache.get("854291634976063508").send(orderembed)
    message.guild.channels.cache.get("854291634976063508").send(message.author.id)
  }
  });
  client.on('message', async message => {
    if(message.channel.type === 'dm') return;
    if(message.author.bot) return;
    let ik = message.mentions.users.first()
    let aza = message.guild.member(ik)
    if(aza && aza.roles.cache.has('770995905138524161')&& message.channel.id === '836653083635089419') {
      if(message.member.hasPermission('MANAGE_GUILD') || message.member.roles.cache.has('770995905138524161')) return;
      if(!db.has(message.author.id)) {
  message.delete()
      message.channel.send('<@'+message.author.id +'> يمنع منشن عضو دعم فني  واحد. منشن مرتين تانيين = ميوت').then(m => {
        m.delete({timeout: 4000})
        db.set(message.author.id, 1)
      })
      }
        if(db.has(message.author.id)) {
  message.delete()
      message.channel.send('<@'+message.author.id +'> يمنع منشن عضو دعم فني  واحد. منشن مره ثانيه = ميوت').then(m => {
        m.delete({timeout: 4000})
        db.add(message.author.id, 1)
      })
      }
    let sb = db.get(message.author.id)
      if(sb === 3) {
  message.delete()
  message.member.roles.add('768019356129951744')
      mmessage.channel.send('<@'+message.author.id +'> يمنع منشن عضو دعم فني  واحد. تم تنفيذ العقوبه').then(m => {
        m.delete({timeout: 4000})
        db.delete(message.author.id)
      })
      setTimeout(()=> {
        member.roles.remove('768019356129951744').catch(err=> {console.log('error for remove role muted')})
      }, 3600000)
      }
    }
    if (!message.content.startsWith(prefix) || message.author.bot) return;
      
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'servers') message.channel.send(client.guilds.cache.map(s => s.name).join("\n"))
    if(command === "say") {
                if(!message.member.hasPermission('ADMINSTRATOR')) return;
        let channel = client.channels.cache.get(args[0])
        if(!channel) return message.channel.send(' i cant find this channel')
        channel.send(new Discord.MessageEmbed()
        .setColor('#056608')
        .setDescription(args.splice(1).join(" ")))
    }
});
client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	if (command === 'dm') {
    	const ff = message.mentions.members.first() || message.guild.members.cache.find(u => u.id === args[0])
      const user = message.guild.member(ff)
    if(!message.member.hasPermission('MANAGE_GUILD') && !message.member.roles.cache.has('770995905138524161')) return;
if(!args[0]) return message.channel.send(`> usage: ${prefix}dm  user-id message`)
		if (args[0]) {
			let dm = args.slice(1).join(' ');
			if (!user) {
				return message.reply('Please use an user id to dm someone.');
			} return user.send(dm) && message.channel.send(`send to ${user} ${dm}`)
	
    }
    
  
  }
})
client.on('message', async message => {
 
  if(message.content.startsWith(prefix + 'secret')) {
    let guild = client.guilds.cache.get("744592615592296539")
    if(!guild) return;
    message.channel.send("احمي توكن بوتك!!", {
      files:[
        "./Screenshot_1.png",
        "./Screenshot_2.png",
        "./Screenshot_3.png"

      ]
    })
  }
  if(message.content.startsWith(prefix +"ts")) {
    message.channel.send("https://tryitands.ee")
  }
  
    if(message.content.includes("discord.gg/")) {
     if(message.channel.type === "dm") return;
      if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete()
        message.channel.send(`${message.author} يمنع نشر روابط سرفرات`)
    }

    if(message.channel.id === "xxxxxxxxx") {
    if(message.author.bot) return;
    message.delete();
    message.author.send("تم ارسال تقديمك")
    let ik = message.guild.channels.cache.find(ch => ch.name == "apply-privet")
    ik.send(`by ${message.author.tag}(${message.author.id}\n${message.content}`)
  }
const mySecret = process.env['token1']

  if(message.channel.id === "836655358432641064" ||message.channel.id === "864952283255013377") {
    message.react("💖")
  }
  if(message.channel.id === "836655779699884085") {
    await message.react("👍")
    await message.react("👎")
  }
});
client.on('message', message => {
    if(message.content.startsWith(prefix + "general")) {
      let args = message.content.slice(prefix.length).trim().split(/ +/);
    if (message.channel.id != 836547871271813171) return message.channel.send(`Error : **${message.author.username}** This Commands Only Works In : <#836547871271813171>`)
    let type = args[1]
   if(type === "react") {
     let reactcode = new Discord.MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic : true}))
    .setTitle(`react code`)
    .addField(`Important Notes :` , `\`\`\`طبعا كل الي عليك انك تضغط الرابط ورح يوديك على البروجكت جاهز تحط ال الاشياء الي في الشرح وبس\`\`\``)
    .addField(`Remix To Edi Projects :` , `<:glitch:836654634672193548> [Glitch Project](https://glitch.com/edit/#!/reaction-room?path=server.js%3A29%3A0) \n<:replit:836654639172419686> [Repl It Project](https://replit.com/@aminepro1/FlawedCloseCarat#index.js)`)
    .setTimestamp()
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    return message.channel.send(reactcode)
   }
   if(type === "line") {
     let linegeneral = new Discord.MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic : true}))
    .setTitle(`line code`)
    .addField(`Important Notes :` , `\`\`\`طبعا كل الي عليك انك تضغط الرابط ورح يوديك على البروجكت جاهز تحط ال الاشياء الي في الشرح وبس\`\`\``)
    .addField(`Remix To Edi Projects :` , `<:glitch:836654634672193548> [Glitch Project](https://glitch.com/edit/#!/frill-gem-allium?path=server.js%3A24%3A3) \n<:replit:836654639172419686> [Repl It Project](https://replit.com/@aminepro1/ra3d-line-bot)`)
    .setTimestamp()
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    return message.channel.send(linegeneral)
   }
	    
if(type === "embed") {
     let embedgeneral = new Discord.MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic : true}))
    .setTitle(`embed code`)
    .addField(`Important Notes :` , `\`\`\`طبعا كل الي عليك انك تضغط الرابط ورح يوديك على البروجكت جاهز تحط ال الاشياء الي في الشرح وبس\`\`\``)
    .addField(`Remix To Edi Projects :` , `<:glitch:836654634672193548> [Glitch Project](https://glitch.com/edit/#!/onyx-evergreen-pluto?path=server.js%3A27%3A2) \n<:replit:836654639172419686> [Repl It Project](https://replit.com/@aminepro1/embed-code)`)
    .setTimestamp()
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    return message.channel.send(embedgeneral)
   }
   if(type === "thanks") {
     let thankscode = new Discord.MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic : true}))
    .setTitle(`thanks code`)
    .addField(`Important Notes :` , `\`\`\`طبعا كل الي عليك انك تضغط الرابط ورح يوديك على البروجكت جاهز تحط ال الاشياء الي في الشرح وبس\`\`\``)
    .addField(`Remix To Edi Projects :` , `<:glitch:836654634672193548> [Glitch Project](https://glitch.com/edit/#!/reaction-room?path=server.js%3A29%3A0) \n<:replit:836654639172419686> [Repl It Project](https://replit.com/@aminepro1/FlawedCloseCarat#index.js)`)
    .setTimestamp()
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    return message.channel.send(thankscode)
   }
   if(type === "voice") {
     let voicejoin = new Discord.MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic : true}))
    .setTitle(`24 h voice code`)
    .addField(`Important Notes :` , `\`\`\`طبعا كل الي عليك انك تضغط الرابط ورح يوديك على البروجكت جاهز تحط ال الاشياء الي في الشرح وبس\`\`\``)
    .addField(`Remix To Edi Projects :` , `<:glitch:836654634672193548> [Glitch Project](https://glitch.com/edit/#!/grape-shard-visitor?path=server.js%3A22%3A0) \n<:replit:836654639172419686> [Repl It Project](https://replit.com/@aminepro1/24h-voice)`)
    .setTimestamp()
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    return message.channel.send(voicejoin)
   }
}
    if (message.content.startsWith(prefix + "codes")) {
     let args = message.content.slice(prefix.length).trim().split(/ +/);
    if (message.channel.id != 836547871271813171) return message.channel.send(`Error : **${message.author.username}** This Commands Only Works In : <#836547871271813171>`)
    let type = args[1]
   let nocom = new Discord.MessageEmbed()
   .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic : true}))
    .addField(`<:youtube:765041228319948800> YouTube Codes :` , `\`\`\`${prefix}codes line \n${prefix}codes protection\n${prefix}codes warnnings\n${prefix}codes broadcast\n${prefix}codes broadcastv2\n${prefix}codes broadcastv3\n${prefix}codes orders\n${prefix}codes orderv2\n${prefix}codes orderv3\n${prefix}codes suggestions\n${prefix}codes tax \n${prefix}codes accounts\n${prefix}codes scambot\n${prefix}codes reactionrole\n${prefix}codes roles\n${prefix}codes ads\n${prefix}codes picture\n${prefix}codes uptime\`\`\``)
   .addField(`General Codes :`,`\`\`\`${prefix}general react : كود يسوي لكل رساله ترسها رياكشن \n${prefix}general line : كود يسوي لك خط بامر \n${prefix}general embed : كود يحول اي كلام ينرسل في روم معين الى امبيد\n${prefix}general thanks : كود يسوي لاي كلام رياكشن لروم الشكر او التقيم \n${prefix}general voice : كود يخلي البوت 24 ساعه في روم صوتي\`\`\``)
    .addField(`Important Notes :` , `كل الي عليك هنا انك تختار الكود الي انت عايزو ، لو واجهتك مشكله روم السبورت موجود وخاصنا مش سبورت برضو فا لو وجهتك مشكله توجه الى : <#836653083635089419>`)
   .setTimestamp()
   .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
   if (!type) return message.channel.send(nocom)
    if (type == 'line'){
    let lineem = new Discord.MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic : true}))
    .setTitle(`Line Bot`)
    .setURL(`https://www.youtube.com/watch?v=Cj9_V5hvmH8&t=205s`)
    .addField(`Important Notes :` , `\`\`\`طبعا كل الي عليك انك تضغط الرابط ورح يوديك على البروجكت جاهز تحط ال الاشياء الي في الشرح وبس\`\`\``)
    .addField(`Remix To Edi Projects :` , `<:glitch:836654634672193548> [Glitch Project](https://glitch.com/edit/#!/ra3d-line-bot?path=server.js%3A11%3A26) \n<:replit:836654639172419686> [Repl It Project](https://repl.it/@Boudydiscord/ra3d-line-bot)`)
    .setTimestamp()
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    return message.channel.send(lineem)
   }
   if (type == 'uptime'){
    let lineem = new Discord.MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic : true}))
    .setTitle(`Uptime Bot`)
    .setURL(`https://www.youtube.com/watch?v=AS34u5iIgoQ`)
    .addField(`Important Notes :` , `\`\`\`طبعا كل الي عليك انك تضغط الرابط ورح يوديك على البروجكت جاهز تحط ال الاشياء الي في الشرح وبس\`\`\``)
    .addField(`Remix To Edi Projects :` , `<:glitch:836654634672193548> [Glitch Project](https://glitch.com/edit/#!/knowing-sun-digestion?path=server.js%3A1%3A0) \n<:replit:836654639172419686> [Repl It Project](https://replit.com/@aminepro1/ra3d-uptimer#index.js)`)
    .setTimestamp()
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    return message.channel.send(lineem)
   }
	    if (type == 'protection'){
    let pr = new Discord.MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic : true}))
    .setTitle(`protection Bot`)
    .setURL(`https://youtu.be/p6X6ggRtuYw`)
    .addField(`Important Notes :` , `\`\`\`طبعا كل الي عليك انك تضغط الرابط ورح يوديك على البروجكت جاهز تحط ال الاشياء الي في الشرح وبس\`\`\``)
    .addField(`Remix To Edi Projects :` , `<:glitch:836654634672193548> [Glitch Project](https://glitch.com/edit/#!/ripple-immediate-pyrite?path=index.js%3A12%3A2) \n<:replit:836654639172419686> [Repl It Project](https://replit.com/@xvfafge2ezarab4/protection-by-amine#index.js)`)
    .setTimestamp()
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    return message.channel.send(pr)
   }
	    if (type == 'warnnings'){
    let pr = new Discord.MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic : true}))
    .setTitle(`warnnings Bot`)
    .setURL(`https://youtu.be/p6X6ggRtuYw`)
    .addField(`Important Notes :` , `\`\`\`طبعا كل الي عليك انك تضغط الرابط ورح يوديك على البروجكت جاهز تحط ال الاشياء الي في الشرح وبس\`\`\``)
    .addField(`Remix To Edi Projects :` , `<:glitch:836654634672193548> [Glitch Project](https://glitch.com/edit/#!/pointy-field-stranger?path=index.js%3A103%3A31) \n<:replit:836654639172419686> [Repl It Project](https://replit.com/@xvfafge2ezarab4/warnnings-by-amine)`)
    .setTimestamp()
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    return message.channel.send(pr)
   }
   if (type == 'broadcast'){
    let lineem = new Discord.MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic : true}))
    .setTitle(`Broadcast Bot`)
    .setURL(`https://www.youtube.com/watch?v=OokhBlhXAzY&t=1s`)
    .addField(`Important Notes :` , `\`\`\`طبعا كل الي عليك انك تضغط الرابط ورح يوديك على البروجكت جاهز تحط ال الاشياء الي في الشرح وبس\`\`\``)
    .addField(`Remix To Edi Projects :` , `<:glitch:836654634672193548> [Glitch Project](https://glitch.com/edit/#!/ra3dbc-bot-v1?path=server.js%3A15%3A43) \n<:replit:836654639172419686> [Repl It Project](https://repl.it/@GameZone4/Ra3dFixedBy7xr#index.js)`)
    .setTimestamp()
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    return message.channel.send(lineem)
   }
    if (type == 'accounts'){
    let lineem = new Discord.MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic : true}))
    .setTitle(`Accounts Bot`)
    .setURL(`https://youtu.be/6XBW086hwNA`)
    .addField(`Important Notes :` , `\`\`\`طبعا كل الي عليك انك تضغط الرابط ورح يوديك على البروجكت جاهز تحط ال الاشياء الي في الشرح وبس\`\`\``)
    .addField(`Remix To Edi Projects :` , `<:glitch:836654634672193548> [Glitch Project](https://glitch.com/edit/#!/sage-deep-shirt?path=server.js%3A457%3A36) \n<:replit:836654639172419686> [Repl It Project](https://replit.com/@xvfafge2ezarab4/selling-accs-ra3d#index.js)`)
    .setTimestamp()
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    return message.channel.send(lineem)
   }
   if (type == 'broadcastv2'){
    let lineem = new Discord.MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic : true}))
    .setTitle(`Broadcast Bot`)
    .setURL(`https://youtu.be/7W3xsijaMnc`)
    .addField(`Important Notes :` , `\`\`\`طبعا كل الي عليك انك تضغط الرابط ورح يوديك على البروجكت جاهز تحط ال الاشياء الي في الشرح وبس\`\`\``)
    .addField(`Remix To Edi Projects :` , `<:glitch:836654634672193548> [Glitch Project](https://glitch.com/edit/#!/ra3d-bot-v2?path=server.js%3A239%3A21) \n<:replit:836654639172419686> [Repl It Project]( https://repl.it/@Boudydiscord/ra3d-broadcast-v2#.replit)`)
    .setTimestamp()
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    return message.channel.send(lineem)
   }
   if (type == 'orders'){
    let lineem = new Discord.MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic : true}))
    .setTitle(`Orders V1 Bot`)
    .setURL(`https://youtu.be/PPVqQ5EZ6Nw`)
    .addField(`Important Notes :` , `\`\`\`طبعا كل الي عليك انك تضغط الرابط ورح يوديك على البروجكت جاهز تحط ال الاشياء الي في الشرح وبس\`\`\``)
    .addField(`Remix To Edi Projects :` , `<:glitch:836654634672193548> [Glitch Project](https://glitch.com/edit/#!/eastern-befitting-governor?path=server.js%3A43%3A0) \n<:replit:836654639172419686> [Repl It Project](https://repl.it/@Boudydiscord/ra3d-orders-bot#index.js)`)
    .setTimestamp()
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    return message.channel.send(lineem)
   }
    if (type == 'tax'){
    let lineem = new Discord.MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic : true}))
    .setTitle(`Taxes Bot`)
    .setURL(`https://www.youtube.com/watch?v=QMyof-KcYRw&t=1s`)
    .addField(`Important Notes :` , `\`\`\`طبعا كل الي عليك انك تضغط الرابط ورح يوديك على البروجكت جاهز تحط ال الاشياء الي في الشرح وبس\`\`\``)
    .addField(`Remix To Edi Projects :` , `<:glitch:836654634672193548> [Glitch Project](https://glitch.com/edit/#!/energetic-chisel-substance?path=server.js%3A170%3A100) \n<:replit:836654639172419686> [Repl It Project](https://repl.it/@GameZone4/Ra3dFixedBy7xrTaxbot#index.js)`)
    .setTimestamp()
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    return message.channel.send(lineem)
   }
	    
    if (type == 'welcome'){
    let lineem = new Discord.MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic : true}))
    .setTitle(`Welcome Bot`)
    .setURL(`https://www.youtube.com/watch?v=QMyof-KcYRw&t=1s`)
    .addField(`Important Notes :` , `\`\`\`طبعا كل الي عليك انك تضغط الرابط ورح يوديك على البروجكت جاهز تحط ال الاشياء الي في الشرح وبس\`\`\``)
    .addField(`Remix To Edi Projects :` , `<:glitch:836654634672193548> [Glitch Project](https://glitch.com/edit/#!/energetic-island-fibula?path=.env%3A1%3A15) \n<:replit:836654639172419686> [Repl It Project](https://replit.com/@storydiscord/ra3d-welcome-bot#index.js)`)
    .setTimestamp()
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    return message.channel.send(lineem)
   }
   if (type == 'orderv2'){
    let lineem = new Discord.MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic : true}))
    .setTitle(`Orders V2 Bot`)
    .setURL(`https://youtu.be/zhJ2xR7c29w`)
    .addField(`Important Notes :` , `\`\`\`طبعا كل الي عليك انك تضغط الرابط ورح يوديك على البروجكت جاهز تحط ال الاشياء الي في الشرح وبس\`\`\``)
    .addField(`Remix To Edi Projects :` , `<:glitch:836654634672193548> [Glitch Project](https://glitch.com/edit/#!/shaded-sand-occupation?path=server.js%3A24%3A24) \n<:replit:836654639172419686> [Repl It Project](https://repl.it/@olxisstillthet/ra3d-orders-bot-v2#index.js)`)
    .setTimestamp()
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    return message.channel.send(lineem)
   }
   if (type == 'suggestions'){
    let lineem = new Discord.MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic : true}))
    .setTitle(`Suggestions Bot`)
    .setURL(`https://youtu.be/zhJ2xR7c29w`)
    .addField(`Important Notes :` , `\`\`\`طبعا كل الي عليك انك تضغط الرابط ورح يوديك على البروجكت جاهز تحط ال الاشياء الي في الشرح وبس\`\`\``)
    .addField(`Remix To Edi Projects :` , `<:glitch:836654634672193548> [Glitch Project](https://glitch.com/edit/#!/grove-rural-howler?path=server.js%3A48%3A8) \n<:replit:836654639172419686> [Repl It Project](https://repl.it/@ProBotPrime/PolishedSuperficialListener#index.js)`)
    .setTimestamp()
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    return message.channel.send(lineem)
   } 
    if (type == 'autoreaction'){
    let lineem = new Discord.MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic : true}))
    .setTitle(`Autoreaction Bot`)
    .setURL(`https://youtu.be/SIgCJQxvWH4`)
    .addField(`Important Notes :` , `\`\`\`طبعا كل الي عليك انك تضغط الرابط ورح يوديك على البروجكت جاهز تحط ال الاشياء الي في الشرح وبس\`\`\``)
    .addField(`Remix To Edi Projects :` , `<:glitch:836654634672193548> [Glitch Project](https://glitch.com/edit/#!/ra3d-auto?path=server.js%3A72%3A14) \n<:replit:836654639172419686> [Repl It Project](https://replit.com/@aminepro1/ra3d-autoreaction-yt-2#index.js)`)
    .setTimestamp()
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    return message.channel.send(lineem)
   } 
   if (type == 'roles'){
    let lineem = new Discord.MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic : true}))
    .setTitle(`Purchase Roles Bot`)
    .setURL(`https://youtu.be/dnIkEKPdZtk`)
    .addField(`Important Notes :` , `\`\`\`طبعا كل الي عليك انك تضغط الرابط ورح يوديك على البروجكت جاهز تحط ال الاشياء الي في الشرح وبس\`\`\``)
    .addField(`Remix To Edi Projects :` , `<:glitch:836654634672193548> [Glitch Project](https://glitch.com/edit/#!/ra3d-role-purchase?path=package.json%3A1%3A0) \n<:replit:836654639172419686> [Repl It Project](https://replit.com/@aminepro1/purshase-roles?v=1)`)
    .setTimestamp()
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    //return message.channel.send(lineem)
   }
      if (type == 'orderv3'){
    let lineem = new Discord.MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic : true}))
    .setTitle(`Orders V3 Bot`)
    .setURL(`https://www.youtube.com/watch?v=YUnRPRhnSI0&t=11s`)
    .addField(`Important Notes :` , `\`\`\`طبعا كل الي عليك انك تضغط الرابط ورح يوديك على البروجكت جاهز تحط ال الاشياء الي في الشرح وبس\`\`\``)
    .addField(`Remix To Edi Projects :` , `<:glitch:836654634672193548> [Glitch Project](https://glitch.com/edit/#!/ra3d-ordervraction?path=.env%3A1%3A6) \n<:replit:836654639172419686> [Repl It Project](https://replit.com/@aminepro1/ra3d-orderv3-raction#index.js)`)
    .setTimestamp()
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    return message.channel.send(lineem)
   }
   if (type == 'ads'){
    let lineem = new Discord.MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic : true}))
    .setTitle(`Purchase Ads Bot`)
    .setURL(`https://youtu.be/mcQLmxoBSko`)
    .addField(`Important Notes :` , `\`\`\`طبعا كل الي عليك انك تضغط الرابط ورح يوديك على البروجكت جاهز تحط ال الاشياء الي في الشرح وبس\`\`\``)
    .addField(`Remix To Edi Projects :` , `<:glitch:836654634672193548> [Glitch Project](https://glitch.com/edit/#!/yellow-evening-drum?path=server.js%3A35%3A0) \n<:replit:836654639172419686> [Repl It Project](https://repl.it/@ProBotPrime/ra3d-ads-bot-code)`)
    .setTimestamp()
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    return message.channel.send(lineem)
   }
      if (type == 'broadcastv3'){
    let lineem = new Discord.MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic : true}))
    .setTitle(`BroadCast V3 Bot`)
    .setURL(`https://youtu.be/mcQLmxoBSko`)
    .addField(`Important Notes :` , `\`\`\`طبعا كل الي عليك انك تضغط الرابط ورح يوديك على البروجكت جاهز تحط ال الاشياء الي في الشرح وبس\`\`\``)
    .addField(`Remix To Edi Projects :` , `<:glitch:836654634672193548> [Glitch Project](https://glitch.com/edit/#!/blush-aspiring-lathe?path=server.js%3A10%3A49) \n<:replit:836654639172419686> [Repl It Project](https://replit.com/@Boudydiscord/ra3d-broadcast-v3#index.js)`)
    .setTimestamp()
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    return message.channel.send(lineem)
   }
   if (type == 'scambot'){
    let lineem = new Discord.MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic : true}))
    .setTitle(`scambot`)
    .setURL(`https://www.youtube.com/watch?v=LUdddKokMuE`)
    .addField(`Important Notes :` , `\`\`\`طبعا كل الي عليك انك تضغط الرابط ورح يوديك على البروجكت جاهز تحط ال الاشياء الي في الشرح وبس\`\`\``)
    .addField(`Remix To Edi Projects :` , `<:glitch:836654634672193548> [Glitch Project](https://glitch.com/edit/#!/torpid-waiting-stone?path=server.js%3A2%3A26) \n<:replit:836654639172419686> [Repl It Project](https://replit.com/@aminepro1/scam-bot)`)
    .setTimestamp()
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    return message.channel.send(lineem)
   }
    else {
    return message.channel.send(nocom)
   }
    }})
    const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);

   
const Client = new quickuptime.Client(data)
client.on('message', async message => {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
      
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if(command ==="uphelp") return message.channel.send(new Discord.MessageEmbed()
    .setColor('#056608')
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setTitle('uptime commands:')
    .setDescription(`${prefix}uptime (url) : to add a link to uptime database. \n ${prefix}my-urls : to get all the links added by you. \n${prefix}remove (url) : to remove a link was added by you.`)
    .addField('admins commands:', `${prefix}all-urls: to get all urls in the database\n ${prefix}clear-all : delete all urls in the database.`)
    )
    if(command ==="uptime") {
      let added = args[0]
      if(!added) return message.channel.send('>usage: -uptime (link)')
      if(!added.startsWith("https://")) return message.channel.send(`please provide a valid link!`)
      Client.uniqueaddurl(added, message.author.id)
      await Client.uptime(added, "30s", true)
      message.channel.send(new Discord.MessageEmbed()
    .setColor('#056608')
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription('link added to our database!.'))
    }
    if(command === "my-urls") {
      message.channel.send('check your dm.')
       message.author.send(new Discord.MessageEmbed()
    .setColor('#056608')
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setTitle('this is all your links:')
    .setDescription(Client.uniqueallurls(message.author.id)|| "no urls by you!")
    )
    }
    if(command === "remove") {
      let removed = args[0]
      Client.uniqueremoveurl(removed, message.author.id) 
      message.channel.send(new Discord.MessageEmbed()
    .setColor('#850101')
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription('link removed from the database!'))
    }
    if(command === "all-urls") {
      if(!message.member.hasPermission('MANAGE_GUILD')) return 
      message.channel.send(new Discord.MessageEmbed()
    .setColor('#850101')
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(Client.alluniqueurls()|| "no links!"))
    }
    if(command === 'clear-all') {
      if(!message.member.hasPermission('MANAGE_GUILD')) return;
      message.channel.send('cleanned all the links!')
      Client.uniqueclear(message.author.id)
    }
    });
const mochakiscooldown1 = new Set();
client.on('message', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === "send") {
	     if(!message.member.hasPermission('MANAGE_GUILD')) return
      message.guild.members.cache.get(args[0]).send(args.splice(1).join(' ')).catch(err => {return message.channel.send('member not found provide id')})
      message.channel.send('done sent!')
    }
    if(message.channel.id === "848990001122377768") {
    if(message.author.bot) return;
    message.delete();
    message.author.send("تم ارسال تقديمك")
    let ik = message.guild.channels.cache.find(ch => ch.name == "apply-privet")
    ik.send(`by ${message.author.tag}(${message.author.id}\n${message.content}`)
  }
  if(command === "share"){
    if(message.channel.id !== '836547871271813171') return message.channel.send(`Error : **${message.author.username}** This Commands Only Works In : <#836547871271813171>`)
    if (mochakiscooldown1.has(message.author.id)) {
            message.channel.send("you have to wait 1 more hour to do this again");
    } else {
 
    message.channel.send(`${message.author} تم بدأ العملية تفقد رسائلك الشخصية`)
    let codex = new Discord.MessageEmbed()
    .setColor('#00FF00')
    .setDescription(`يرجئ كتابة لغة الكود المستعملة (discord.js/discord.py...) \n معك 5 دقائق لاكمال الاستبيان`)
await message.author.send(codex).then( (m) =>{
             m.channel.awaitMessages(mochakislang => mochakislang.author == message.author,{ max: 1, time: 60*1000 } ).then (mochakislang => {
				mochakislang = mochakislang.first();
				  const nothere = mochakislang.content
          let codex2 = new Discord.MessageEmbed()
          .setColor('#00FF00')
    .setDescription('يرجئ كتابة وصف الكود')
				  m.channel.send(codex2).then( (m1) =>{
					m1.channel.awaitMessages(mochakislang1 => mochakislang1.author == message.author,{ max: 1, time: 60*1000 } ).then (mochakislang1 => {
					   mochakislang1 = mochakislang1.first();
						 const nothere1 = mochakislang1.content
             
				 let codex3 = new Discord.MessageEmbed()
				 .setColor('#00FF00')
		   .setDescription('يرجئ كتابة الكود بدون اي اضافات')
						 m1.channel.send(codex3).then(ok3 => {
            ok3.channel.awaitMessages( mochakisdescribe => mochakisdescribe.author == message.author, {
              max: 1, time: 60*1000 } ).then(mochakiscontent => {
						mochakiscontent = mochakiscontent.first();
            const here = mochakiscontent.content
            let codex3 = new Discord.MessageEmbed()
          .setColor('#00FF00')
    .setDescription("done! تم ارسال الكود للمعالجة")
    
            mochakiscontent.channel.send(codex3)
          const randomizer = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var result = Math.random().toString(5).substr(2, 9);
						const embed = new Discord.MessageEmbed()
				    .setThumbnail(mochakiscontent.author.displayAvatarURL())
					.setTitle(`by :${mochakiscontent.author.tag}(${mochakiscontent.author.id})`)
					.setDescription(`\`\`\`${here}\`\`\``)
					.addField('language', `${nothere}`)
					.addField('description', `${nothere1}`)
          .addField('code id:', result)
					.setTimestamp()
					client.channels.cache.get('855886554978320384').send(embed)
          db.set(`member_${result}_${message.author.id}`, here)
          db.set(`member1_${result}_${message.author.id}`, nothere)
          db.set(`memberd_${result}_${message.author.id}`, nothere1)
				  }).catch(err => console.log(err));
			}).catch(err => console.log(err));
		}).catch(err => console.log(err));
	}).catch(err => console.log(err));
}).catch(err => console.log(err));
}).catch(err => console.log(err));

    mochakiscooldown1.add(message.author.id);
        setTimeout(() => {

			mochakiscooldown1.delete(message.author.id);
        }, 3600000);
  
	}
  }
  if(command === "approve") {
    if(!message.member.hasPermission('MANAGE_GUILD')) return
  const user = message.mentions.users.first()|| message.guild.members.cache.get(args[0])
  if(!user) return message.channel.send('invalid user')
  if(user) {
  const codetoshare = await db.fetch(`member_${args[1]}_${user.id}`);
  const codetosharelanguage = await db.fetch(`member1_${args[1]}_${user.id}`)
  const nothere1 = await db.fetch(`memberd_${args[1]}_${user.id}`)
   if(!db.has(`member_${args[1]}_${user.id}`)) return message.channel.send('cannot find anything like this')
 if(db.has(`member_${args[1]}_${user.id}`)) {
    message.channel.send("تم قبول الكود و نشره")
   let codetoshareembed = new Discord.MessageEmbed()
   .setDescription(`\`\`\`js\n${codetoshare}\`\`\``)
   .addField('language', `${codetosharelanguage}`)
   .addField('description', `${nothere1}`)
   .addField('by', `${user}`)
   client.channels.cache.get('855899329948811314').send(codetoshareembed)
   user.send("✅| تهانينا!! تم قبول كودك \n <#855899329948811314>")
 
 }
}
  }
  if(command === 'deny') {
    if(!message.member.hasPermission('MANAGE_GUILD')) return
  const user = message.mentions.users.first()|| message.guild.members.cache.get(args[0])
  if(!user) return message.channel.send('invalid user')
  if(user) {
    const codetoshare = await db.fetch(`member_${args[1]}_${user.id}`);
  const codetosharelanguage = await db.fetch(`member1_${args[1]}_${user.id}`)
  const nothere1 = await db.fetch(`memberd_${args[1]}_${user.id}`)
  if(!args[2]) return message.channel.send("please provide a reason to deny!")
   if(!db.has(`member_${args[1]}_${user.id}`)) return message.channel.send('cannot find anything like this')
 if(db.has(`member_${args[1]}_${user.id}`)) {
   message.channel.send('تم رفض الكود')
   user.send(`للاسف تم رفض كودك بسبب : \n > ${args[2]}`)
   db.delete(codetoshare)
  db.delete(codetosharelanguage)
  db.delete(nothere1)
  }
  }
  }
});
client.login(process.env.token);
