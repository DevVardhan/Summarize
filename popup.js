document.addEventListener('DOMContentLoaded', () => {
    const summaryPopup = document.getElementById("summaryPopup");
    const overlay = document.getElementById("overlay");
    const closePopup = document.getElementById("closePopup");

    // Listener for messages from background or content script
    chrome.runtime.onMessage.addListener((message) => {
        if (message.action === "displaySummary") {
            try {
                document.getElementById("summary").innerText = message.summary;
                // Show the popup and overlay when the message is received
                summaryPopup.style.display = "block";
                overlay.style.display = "block";
            } catch (err) {
                console.error("Error updating summary:", err);
            }
        } else {
            console.log("Message action failed to validate in #popup.js");
        }
    });

    // Close button functionality
    closePopup.addEventListener('click', () => {
        summaryPopup.style.display = "none";
        overlay.style.display = "none";
    });
});