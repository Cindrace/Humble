/*CMD
  command: /reflist
  help: view my Referrals List
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 📜 my refs
  group: 
CMD*/

let refList = RefLib.getRefList();

if (!refList.exist) {
  Bot.sendMessage("No any affiliated users");
  return
}

let users_rows = ""

// only 100 first users here
// for other users you need use pagination:
// https://help.bots.business/bjs/lists#paginating
let users = refList.getUsers();

for (var ind in users) {
  users_rows = users_rows + "\n👤 " + Libs.commonLib.getLinkFor( users[ind] )
}

let msg =
  "*Total users:* " +
  RefLib.getRefCount() +
  "\n _the first user was tracked:_ \n" +
  "   _" +
  refList.created_at +
  "_" +
  "\n----" +
  users_rows

Bot.sendMessage(msg);



