const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '+'

 

 

 

client.on('ready', () => {

  console.log(Logged in as ${client.user.tag}!);

client.user.setGame('By : SizGooo','Type : +help','Me Support : +Support',"https://www.twitch.tv/dggamingbot")

  console.log('')

  console.log('')

  console.log('╔[═════════════════════════════════════════════════════════════════]╗')

  console.log([Start] ${new Date()});

  console.log('╚[═════════════════════════════════════════════════════════════════]╝')

  console.log('')

  console.log('╔[════════════════════════════════════]╗');

  console.log(Logged in as * [ " ${client.user.username} " ]);

  console.log('')

  console.log('Informations :')

  console.log('')

  console.log(servers! [ " ${client.guilds.size} " ]);

  console.log(Users! [ " ${client.users.size} " ]);

  console.log(channels! [ " ${client.channels.size} " ]);

  console.log('╚[════════════════════════════════════]╝')

  console.log('')

  console.log('╔[════════════]╗')

  console.log(' Bot Is Online')

  console.log('╚[════════════]╝')

  console.log('')

  console.log('')

});

client.on('message', message => {
             if (!message.channel.guild) return;
      if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  
  if (command === 'invites') {
    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
    return message.reply(`**${inviteCount}: عدد الاشخاص الذي دعوتهم هو**`)

});
}});

PASTEBINnew paste 

client.on('guildMemberAdd', Sal => { //By Joker#3358
    var embed = new Discord.RichEmbed()
    .setAuthor(Sal.user.username, Sal.user.avatarURL)
    .setThumbnail(Sal.user.avatarURL)
    .setImage('http://live-timely-4jepdssgmc.time.ly/wp-content/uploads/2018/08/welcomeEvents.jpg') //هنا حط الصوره الي تبيها
    .setTitle('عضو جديد!')
    .setDescription('مرحبا بك بالسيرفر')
    .addField('``ايدي العضو``:',"" +  Sal.user.id, true)
    .addField('``تاق العضو``', Sal.user.discriminator, true)
    .addField('``تم الانشاء في``', Sal.user.createdAt, true)
    .addField(' 👤  انت رقم',`**[ ${Sal.guild.memberCount} ]**`,true)
    .setColor('RANDOM')
    .setFooter(Sal.guild.name, Sal.guild.iconURL, true)
    var channel =Sal.guild.channels.find('【welcome-الترحيب】', 'welcome') // هنا حط اسم الروم الي تبيه يكتب فيه
    if (!channel) return;
    channel.send({embed : embed});
    });

client.on('message',async msg => {//Toxic Codes
  var p = "+";//Toxic Codes
  if(msg.content.startsWith(p + "setuser")) {//Toxic Codes
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('x ليس لديك صلاحيه');//Toxic Codes
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('x البوت لا يمتلك صلاحية');//Toxic Codes
  msg.guild.createChannel(Members : ◤ → ${client.users.size} ← ◢ , 'voice').then(time => {//Toxic Codes
    });//Toxic Codes

  }
 
});
 
 

 

client.login(process.env.BOT_TOKEN);
