console.log("Chrome extension go");

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(request, sender, sendResponse) {
    before = getSelectionText();
}
