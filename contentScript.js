const ESC_KEY_CODE = 27
let escCounter = 0;

document.body.onkeydown = function(event) {
  
  if (event.keyCode === ESC_KEY_CODE) {
    escCounter += 1;
    if (escCounter >= 2) {
      chrome.storage.local.get("bookmark", function (value) {
        if (value.bookmark) {
          location.href = value.bookmark;
        }
      });
    } else {
      setTimeout(function() { escCounter = 0; }, 500)
    }
  }
}