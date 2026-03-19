# AGENT.md — cc-confessions-lookup

## Purpose
A Google Apps Script WebApp that looks up entries in a JSON file DB based on text matching. Client/server split architecture.

## Structure
```
cc-confessions-lookup/
├── README.md
├── AGENT.md
├── .gitignore
└── src/
    ├── appsscript.json  ← GAS manifest
    ├── client/          ← HTML/CSS/JS frontend (search UI)
    └── server/          ← GAS server-side scripts (JSON lookup logic)
```

## Key Facts
- **Platform:** Google Apps Script WebApp
- **Data store:** JSON files (stored in Drive or as GAS properties)
- **Pattern:** Text-based search/match against JSON DB
- **Entry point:** `server/` contains the `doGet()` / `doPost()` functions

## Development Notes
- All source files live under `src/` — push with clasp from that directory
- No Node/npm at runtime; ES5-compatible GAS code only
