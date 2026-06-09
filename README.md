# Baidu to Google

A Tampermonkey userscript that automatically redirects Baidu searches to Google when Google is accessible.

## How it works

When you search on Baidu, the script silently checks if Google is reachable. If it is, your search is redirected to Google automatically. If not, you stay on Baidu — no delay, no error.

- Timeout: 1.5 seconds
- Detection method: Image probe (avoids CORS restrictions)
- Fallback: stays on Baidu silently

## Installation

1. Install the [Tampermonkey](https://www.tampermonkey.net/) extension for Chrome
2. Click [here](https://raw.githubusercontent.com/Fred-szy/baidu-to-google/main/baidu-to-google.user.js) to install the script directly
3. Set Baidu as your default search engine in Chrome

## Usage

Just search normally on Chrome. The script runs in the background — no UI, no buttons.

## License

MIT
