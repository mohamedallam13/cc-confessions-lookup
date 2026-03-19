# CC Confessions Lookup

A Google Apps Script WebApp that searches a JSON file database for confession entries based on text match. Returns matching results in a dynamic table with conditional columns.

![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-4285F4?style=flat&logo=google&logoColor=white)
![Platform](https://img.shields.io/badge/Platform-WebApp-blue)

---

## Features

- Full-text search across JSON database entries
- Dynamic results table — columns appear conditionally based on matched data
- Supports switching between multiple databases
- Indexed JSON file storage scheme for fast lookups
- Client/server split architecture

---

## Tech Stack

| Layer    | Technology                      |
|----------|---------------------------------|
| Platform | Google Apps Script              |
| UI       | HTML5, CSS3, Vanilla JavaScript |
| Database | JSON files in Google Drive      |
| Deploy   | clasp CLI                       |

---

## Project Structure

```
cc-confessions-lookup/
├── README.md
├── AGENT.md
├── .gitignore
└── src/
    ├── appsscript.json  # GAS manifest
    ├── client/          # Search form and results table UI
    └── server/          # doGet(), JSON file read, text-match logic
```

---

## Getting Started

### Prerequisites

- A Google account with Google Apps Script access
- [clasp](https://github.com/google/clasp) installed globally

```bash
npm install -g @google/clasp
clasp login
```

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/mohamedallam13/cc-confessions-lookup.git
   cd cc-confessions-lookup
   ```

2. Link to your Apps Script project:
   ```bash
   clasp create --type webapp --title "CC Confessions Lookup" --rootDir src
   ```

3. Push source files:
   ```bash
   clasp push
   ```

---

## Deployment

1. In the Apps Script editor, go to **Deploy > New deployment**
2. Select type: **Web app**
3. Set **Who has access**: Anyone
4. Click **Deploy** and share the Web App URL

---

## Author

**Mohamed Allam** — [GitHub](https://github.com/mohamedallam13) · [Email](mailto:mohamedallam.tu@gmail.com)
