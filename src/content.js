var e = null;  // Element clicked on
var i = {};    // Used for generating ids
var c = -1;

// Add event listener for clicked element
document.addEventListener("mousedown", function(event){
  if (event.button == 2) e = event.target;	
});

// Listen for commands
chrome.extension.onMessage.addListener(function (msg, _, sendResponse){
  console.log("got the message");
  if (!e.hasAttribute("geez")){
    if (e.id) {
	  console.log("inside")
	  if (e.onkeypress)
	    i[e.id] = e.onkeypress; // Save whatever was in there
	  console.log("almost there");
	  geezit(e.id);
	  console.log("geezdeit");
	  e.setAttribute("geez", "true");
    } else {
	  c = c + 1; // increment id
      e.setAttribute("id", i + "-geezit-chrome"); //
      i[e.id] = e.onkeypress; // Save whatever was in there
      geezit(e.id);
      e.setAttribute("geez", "true");
    }
  } else if (e.hasAttribute("geez")) {
    if (e.id){ // Else dont bother
	  // Safe code
	  if (i[e.id])
		e.onkeypress = i[e.id];
      else 
        e.onkeypress = null;
      e.removeAttribute("geez");
    } 
  }
});