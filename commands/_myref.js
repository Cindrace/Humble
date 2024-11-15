/*CMD
  command: /myref
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 👨 my info
  group: 
CMD*/

let friend = RefLib.getAttractedBy();
let msg = "You was attracted by: "

if(friend){
  msg = msg + "\n\nuser " + CommonLib.getLinkFor(friend);
}else{
  msg = "You was not attracted."
}

Bot.sendMessage(msg);
