
# Text Summarizer Chrome Extension(under development)

Text Summarizer is a simple Chrome extension that allows users to summarize any text selected on a webpage. This extension utilizes the Hugging Face API to generate summaries with no information loss.

## Features

- **Summarize Selected Text**: Right-click on any selected text on a webpage and choose the option to summarize the content. The extension will generate a concise version of the selected text.
- **Popup Display**: The summary is displayed in a popup window, making it easy to read.

## How It Works

1. **Context Menu Integration**: When the extension is installed, a context menu item titled "Summarize Selected Text" is created. This allows the user to right-click on any selected text to trigger the summarization.
2. **Hugging Face API**: The extension sends the selected text to a summarization model provided by the Hugging Face Inference API and returns a summary.
3. **Popup Display**: The summarized content is then displayed in the popup for quick reading.

## Installation

To install this extension manually:

1. Clone the repository or download the source files.
2. Navigate to `chrome://extensions/` in your Chrome browser.
3. Enable **Developer Mode** (top right).
4. Click on **Load unpacked** and select the folder containing your extension's files (including `manifest.json`).
5. The extension will be loaded and ready for use.

## Usage

1. Highlight any text on a webpage that you would like to summarize.
2. Right-click on the selected text.
3. From the context menu, choose the option **Summarize Selected Text**.
4. The extension will generate a summary and display it in the popup.

