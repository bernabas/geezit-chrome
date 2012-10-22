function cb(info, tab){
  chrome.tabs.sendMessage(tab.id, "send Message");
}
var mu = chrome.contextMenus.create({"title" : "ግeezit", "contexts" : ["editable"], "onclick" : cb}); 
