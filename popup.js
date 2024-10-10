
chrome.runtime.onMessage.addListener((messege) => {
    if (messege.action === "displaySummary") {
        try {
            document.getElementById("summary").innerText = messege.summary;
        } catch (err) {
            console.log(err);
        }
    } else {
        console.log("message.action failed to validate #popup.js")
    }
})