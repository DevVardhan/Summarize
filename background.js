import summarize from "./Summarize.js"

chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
});


chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "SummarizeText",
        title: "Summarize Selected Text",
        context: ["selection"]
    })
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
    let response = ''
    if (info.menuItemId === "summarizeText" && info.selectionText) {
        response = summarize(info.selectionText)
    }
    chrome.runtime.sendMessage({
        action: "displaySummary",
        summary: { response }
    });
})


