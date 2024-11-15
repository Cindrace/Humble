/*CMD
  command: /mylink
  help: get my affiliate link
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 🔗 my link
  group: 
CMD*/

let link = RefLib.getLink();
Bot.sendMessage("Link: [link](" + link + ")");
