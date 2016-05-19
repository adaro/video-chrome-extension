//function onCreatedChromeTab(){
//
//    chrome.tabs.onCreated.addListener(function(tab) {
////        alert(1)
////        chrome.tabs.create({url: chrome.extension.getURL('background.html')});
//    });
//}
//
//document.addEventListener('DOMContentLoaded', function() {
////    onCreatedChromeTab();
//    chrome.tabs.create({url: chrome.extension.getURL('background.html')});
//});

chrome.tabs.onCreated.addListener(function(tab) {
//    INSERT HTML HERE
//    chrome.tabs.create({url: chrome.extension.getURL('background.html')});
});