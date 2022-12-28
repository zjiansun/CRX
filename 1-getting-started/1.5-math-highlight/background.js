chrome.runtime.onInstalled.addListener(async () => {
    chrome.contextMenus.create({
        id: "test",
        title: "Graph this function",
        type: 'normal',
        contexts: ['selection'],
      });
});

chrome.contextMenus.onClicked.addListener(function(info, tab){
    console.log("Clicked!")
    console.log
    chrome.scripting.executeScript({
        target: {
          tabId: tab.id,
        },
        func: () => {
            console.log(info.selectionText)
            alert(info.selectionText)
        },
    })
});
