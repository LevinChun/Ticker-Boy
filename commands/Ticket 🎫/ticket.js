const {
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  Permissions
} = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: "ticket",
  aliases: ['createticket', "t"],
  cooldown: 5,
  description: "for creating the ticket channel for user in server.",    
  category: 'Ticket 🎫',
  usage: "",
  run: async function(bot, message, args, prefix){

    let embed = new MessageEmbed()
      .setTitle(`${bot.emotes.ticket}| **Request To Create Ticket**`)
      .setColor(bot.colors.none)
      .setTimestamp()
      .setDescription('**your ticket channel will be created but are you sure to do this??\nif your ticket created please wait the moderators or admins to speek there.**')    
      .setThumbnail('https://cdn.discordapp.com/attachments/902034619791196221/905040476355330068/8b7193b2110a034a2fe037437afc80b3.gif')
      .addField(bot.emotes.reason+'| INFOS','if you want to create a ticket channel for yourself, you have to click to this emoji: `"'+bot.emotes.ticket+'"` or else click to `"'+bot.emotes.x+'"`.')
      .setURL(bot.config.discord.server_support)
      .setFooter({
        text: "Request To Create Ticket" + " | created by Mr.SIN RE#1528",
        iconURL: message.guild.iconURL({ dynamic: true })
      })
      .setAuthor({
        name: `Requested by ` + message.member.username,
        iconURL: message.member.displayAvatarURL({ dynamic: true })
      })
  
  message.reply({
      embeds: [embed],
      components: [new MessageActionRow()
          .addComponents(
            [new MessageButton()
            .setCustomId('create')
            .setEmoji(bot.emotes.ticket)
            .setLabel("Create Ticket")
            .setStyle('SUCCESS')],
            [new MessageButton()
              .setCustomId('dont_do')
              .setEmoji(bot.emotes.x)
              .setLabel('Cancel Process')
              .setStyle("DANGER")
          ])
      ]
  }).then(msg=>{
    db.set(`CreateTicketMSG_${message.guild.id}_${message.member.id}`, msg.id)
  })
  }
}
/**
 * @INFO
 * Bot Coded by Mr.SIN RE#1528 :) | https://dsc.gg/sizar-team
 * @INFO
 * Work for SIZAR Team | https://dsc.gg/sizar-team
 * @INFO
 * Please Mention Us SIZAR Team, When Using This Code!
 * @INFO
 */
