chrome.browserAction.onClicked.addListener(function(tab) {
 
    chrome.storage.local.set({'bookmark': tab.url}, function() {
        alert('saved url: '+ tab.url)
    });
});
