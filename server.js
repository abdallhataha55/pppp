const Discord = require("discord.js"); //Kero#2611
const client = new Discord.Client();//Kero#2611
const client2 = new Discord.Client();//Kero#2611
const client3 = new Discord.Client();//Kero#2611
const client4 = new Discord.Client();//Kero#2611
const client5 = new Discord.Client();//Kero#2611
const client6 = new Discord.Client();//Kero#2611
const client7 = new Discord.Client();//Kero#2611
const client8 = new Discord.Client();//Kero#2611
const client9 = new Discord.Client();//Kero#2611
const client10 = new Discord.Client();//Kero#2611
const client0 = new Discord.Client();//Kero#2611
//Kero#2611
const myid = ['Your ID']; // حط الايدي حقق//Kero#2611
const prefix = ['-']; // هنا تقدر تغير البري فكس//Kero#2611
 
 
client.on('ready', () => {//Kero#2611
   console.log(`----------------`);//Kero#2611
   console.log(`Credit Farm - Script By : Kero `);//Kero#2611
   console.log(`----------------`);//Kero#2611
   console.log(`Loadinng`);//Kero#2611
   console.log(`Loadinng.`);//Kero#2611
   console.log(`Loadinng..`);//Kero#2611
   console.log(`Loadinng...`);//Kero#2611
   console.log(`This Bots Online ' `);//Kero#2611
   console.log(`Logged in as ${client.user.tag}!`);//Kero#2611
   console.log(`----------------`);//Kero#2611
});//Kero#2611
 
client10.on('ready', () => {//Kero#2611
   console.log(` Account 10 Online ✩' `);//Kero#2611
});//Kero#2611
 
 
 client9.on('ready', () => {//Kero#2611
   console.log(` Account 9 Online ✩' `);//Kero#2611
});
 
 
 client8.on('ready', () => {//Kero#2611
   console.log(` Account 8 Online ✩' `);//Kero#2611
});//Kero#2611
 
 
 
 client7.on('ready', () => {//Kero#2611
   console.log(` Account 7 Online ✩' `);//Kero#2611
});//Kero#2611
 
 
 
client6.on('ready', () => {//Kero#2611
   console.log(` Account 6 Online ✩' `);//Kero#2611
});//Kero#2611
 
 
 
client6.on('ready', () => {//Kero#2611
   console.log(` Account 6 Online ✩' `);//Kero#2611
});
 
 
 client6.on('ready', () => {//Kero#2611
   console.log(` Account 6 Online ✩' `);//Kero#2611
});
 
 
 client5.on('ready', () => {
   console.log(` Account 5 Online ✩' `);
});
 
 
 client4.on('ready', () => {
   console.log(` Account 4 Online ✩' `);
});
 
 
 client3.on('ready', () => {
   console.log(` Account 3 Online ✩' `);
});
 
 
 client2.on('ready', () => {
   console.log(` Account 2 Online ✩' `);
});
 
 
 client.on('ready', () => {
   console.log(` Account 1 Online ✩' `);
});
 
 
 
  client0.on("message", function(message) {
   if(message.content.startsWith(prefix + "help")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
   .addField("Credits | تجميع الكريدت","💳",true)
    .addField("Rep | ريب","👍",true)
    .addField("Spam | سبام","🤬",true)
        .addField("Code Info | خصائص الكود ","🧷",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react('💳')
        msg.react("👍")
        msg.react("🤬")
                msg.react("🧷")
.then(() => msg.react('💳'))
.then(() =>msg.react('👍'))
.then(() => msg.react('🤬'))
.then(() => msg.react('🧷'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '💳' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '👍' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🤬' && user.id === message.author.id;//Kero#2611
let reaction4Filter = (reaction, user) => reaction.emoji.name === '🧷' && user.id === message.author.id;//Kero#2611
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 20000 });//Kero#2611
       
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 19000 });//Kero#2611
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 18000 });//Kero#2611
let reaction4 = msg.createReactionCollector(reaction4Filter, { time: 18000 });//Kero#2611
reaction1.on("collect", r => {//Kero#2611
  const embed = new Discord.RichEmbed()//Kero#2611
      .setThumbnail('https://images-ext-2.discordapp.net/external/JD7xvknBVacXHoC2re78AtJN4PUY5IjUZy1uWIqzObI/https/s3.amazonaws.com/eclincher.wp.upload/wp-content/uploads/2015/08/25155834/people-icon.png')
      .setColor("#000000")
      .setDescription(`
      💷***__تجميع الكريدت__***💶 
**
『${prefix}c ====> لمعرفت عدد الكريدت الي في الحساب
『${prefix}d ====> لاخذ راتبك اليومي
『${prefix}say <text> ====> لجعل الحساب يتكلم بالكلام الي تكتبه
『 By Kero
**
`)
   message.author.sendEmbed(embed)
      message.reply('تم ارسالك بلخاص')
})
reaction2.on("collect", r => {
      const embed = new Discord.RichEmbed()
  .setThumbnail('https://cdn.discordapp.com/attachments/553862087382925313/556036868492230667/logo-admin-png-4.png')
      .setColor("#000000")
      .setDescription(`
      ✔***__ريب__***:crown: 
**
『${prefix}rep ====> لأعطاء نفسك ريب
ملاحظات :-
1- لازم تحط الايدي تبعك في الكود
2- لازم لفل الحساب يكون 10 عشان يقدر يعطي ريب
By Kero
**
`)
   message.author.sendEmbed(embed)
      message.reply('تم ارسالك بلخاص')
})
reaction3.on("collect", r => {
  const embed = new Discord.RichEmbed()
  .setThumbnail('https://images-ext-1.discordapp.net/external/4IGqoA1bqVqu_o2I-jY51fqJFy2S8f8NrzcnzxhFtVU/http/reli.sh/wp-content/themes/relish/assets/img/services/icon-games.png')
      .setColor("#000000")
      .setDescription(`
       ✍ ***__سبام__***🤬
 **
『${prefix}spam ====> لجعل الحساب يسوي سبام
『${prefix}stop ====> لأيقاف السبام
ملاحظات :-
1- انا سويت الكود علي اساس ان الحساب مايبلع بلاك لست سريع
2- ماتقدر 
**
『 By ====> Kero
`)
   message.author.sendEmbed(embed)
   message.reply('تم ارسالك بلخاص')
})
reaction3.on("collect", r => {
  const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`
            ⚒-=- خصائص البوت -=-🏆
『=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=』
1- به قائمة (help) 
2- انا مبرمجه بطريقه انه مايبلع بلاك لست سريع من الاسبام
3- سهل التعامل
『=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=』
`)
   message.author.sendEmbed(embed)
})
    })
}
});


const cmd = require("node-cmd")
client.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot 1 Stoped,")
  }
})


client2.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot 2 Stoped,")
  }
})


client3.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot 3 Stoped,")
  }
})


client4.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot 4 Stoped,")
  }
})

 
client5.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot 5 Stoped,")
  }
})


client6.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot 6 Stoped,")
  }
})


client7.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot 7 Stoped,")
  }
})


client8.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot 8 Stoped,")
  }
})


client9.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot 9 Stoped,")
  }
})


client10.on("message", async message => {
  if(message.content === prefix + "stop") {
    await cmd.run("refresh")
    await message.channel.send("Bot 10 Stoped,")
  }
})


client.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client.on('message', message => {
    if(message.content === prefix+'rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client.on('message', message => {
if (message.content === prefix+'spam') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(35);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 100);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 10000);
}
});
 
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "say") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kero');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
 
client2.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client2.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client2.on('message', message => {
    if(message.content === prefix+'rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client2.on('message', msg => {
 
  let say= prefix + "say";
if (msg.content.startsWith(say)) {
    if(msg.author.bot) return;
 
  let sa =msg.content.slice(say.length+1);
  if(!sa) return msg.channel.send("```" + prefix + "say (اكتب هنا اي شيء)" + "```");
  msg.channel.send(sa);
}
});
 
client2.on('message', message => {
if (message.content === prefix+'spam') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

 
client3.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client3.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client3.on('message', message => {
    if(message.content === prefix+'rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client3.on('message', msg => {
 
  let say= prefix + "say";
if (msg.content.startsWith(say)) {
    if(msg.author.bot) return;
 
  let sa =msg.content.slice(say.length+1);
  if(!sa) return msg.channel.send("```" + prefix + "say (اكتب هنا اي شيء)" + "```");
  msg.channel.send(sa);
}
});
 
client3.on('message', message => {
if (message.content === prefix+'spam') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});
 
client4.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client4.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client4.on('message', message => {
    if(message.content === prefix+'rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client4.on('message', msg => {
 
  let say= prefix + "say";
if (msg.content.startsWith(say)) {
    if(msg.author.bot) return;
 
  let sa =msg.content.slice(say.length+1);
  if(!sa) return msg.channel.send("```" + prefix + "say (اكتب هنا اي شيء)" + "```");
  msg.channel.send(sa);
}
});
 
client4.on('message', message => {
if (message.content === prefix+'spam') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});
 
client5.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client5.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client5.on('message', message => {
    if(message.content === prefix+'rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client5.on('message', msg => {
 
  let say= prefix + "say";
if (msg.content.startsWith(say)) {
    if(msg.author.bot) return;
 
  let sa =msg.content.slice(say.length+1);
  if(!sa) return msg.channel.send("```" + prefix + "say (اكتب هنا اي شيء)" + "```");
  msg.channel.send(sa);
}
});
 
client5.on('message', message => {
if (message.content === prefix+'spam') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client6.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client6.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client6.on('message', message => {
    if(message.content === prefix+'rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client6.on('message', msg => {
 
  let say= prefix + "say";
if (msg.content.startsWith(say)) {
    if(msg.author.bot) return;
 
  let sa =msg.content.slice(say.length+1);
  if(!sa) return msg.channel.send("```" + prefix + "say (اكتب هنا اي شيء)" + "```");
  msg.channel.send(sa);
}
});
 
client6.on('message', message => {
if (message.content === prefix+'spam') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client7.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client7.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client7.on('message', message => {
    if(message.content === prefix+'rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client7.on('message', msg => {
 
  let say= prefix + "say";
if (msg.content.startsWith(say)) {
    if(msg.author.bot) return;
 
  let sa =msg.content.slice(say.length+1);
  if(!sa) return msg.channel.send("```" + prefix + "say (اكتب هنا اي شيء)" + "```");
  msg.channel.send(sa);
}
});
 
client7.on('message', message => {
if (message.content === prefix+'spam') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client8.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client8.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client8.on('message', message => {
    if(message.content === prefix+'rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client8.on('message', msg => {
 
  let say= prefix + "say";
if (msg.content.startsWith(say)) {
    if(msg.author.bot) return;
 
  let sa =msg.content.slice(say.length+1);
  if(!sa) return msg.channel.send("```" + prefix + "say (اكتب هنا اي شيء)" + "```");
  msg.channel.send(sa);
}
});
 
client8.on('message', message => {
if (message.content === prefix+'spam') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client9.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client9.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client9.on('message', message => {
    if(message.content === prefix+'rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client9.on('message', msg => {
 
  let say= prefix + "say";
if (msg.content.startsWith(say)) {
    if(msg.author.bot) return;
 
  let sa =msg.content.slice(say.length+1);
  if(!sa) return msg.channel.send("```" + prefix + "say (اكتب هنا اي شيء)" + "```");
  msg.channel.send(sa);
}
});
 
client9.on('message', message => {
if (message.content === prefix+'spam') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client10.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client10.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client10.on('message', message => {
    if(message.content === prefix+'rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client10.on('message', msg => {
 
  let say= prefix + "say";
if (msg.content.startsWith(say)) {
    if(msg.author.bot) return;
 
  let sa =msg.content.slice(say.length+1);
  if(!sa) return msg.channel.send("```" + prefix + "say (اكتب هنا اي شيء)" + "```");
  msg.channel.send(sa);
}
});
 
client10.on('message', message => {
if (message.content === prefix+'spam') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});

client.login("");
client2.login("");
client3.login("");
client4.login("");
client5.login("");
client6.login("");
client7.login("");
client8.login("");
client9.login("");
client10.login("");
client0.login(""); // هنا تكتب توكن الحساب الي تبيه يرسل الهيلب
