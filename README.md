# Nova AI Extension Dashboard

A lightweight React + Tailwind UI used to prototype a floating Chrome extension dashboard that provides on-page AI tools (chat, summarization, etc.) powered by Google's Gemini via the [`@google/genai`](https://www.npmjs.com/package/@google/genai) client.

Quick links:
- Source entry: [index.tsx](index.tsx)
- App root: [App.tsx](App.tsx)
- Floating UI: [components/FloatingPanel.tsx](components/FloatingPanel.tsx)
- Chat tool: [tools/Chat.tsx](tools/Chat.tsx)
- Gemini service: [`generateAIResponse`](services/geminiService.ts) — see [services/geminiService.ts](services/geminiService.ts)
- Type definitions: [`Message`](types.ts) — see [types.ts](types.ts)
- Tool list: [`TOOLS`](constants.tsx) — see [constants.tsx](constants.tsx)
- Dev config: [vite.config.ts](vite.config.ts)
- Static shell: [index.html](index.html)
- Project metadata: [metadata.json](metadata.json)
- Architecture overview: [ARCHITECTURE.md](ARCHITECTURE.md)
- Environment file: [.env.local](.env.local)
- Package manifest: [package.json](package.json)

Why this repo?
- Rapid prototype for an in-page AI command center with keyboard-first UX.
- Clean separation: UI components, tools, and a small service layer for API calls.
- Designed to be injected inside a Shadow DOM (see [ARCHITECTURE.md](ARCHITECTURE.md)) for style isolation.

Features
- Persistent floating panel with drag / resize: [components/FloatingPanel.tsx](components/FloatingPanel.tsx)
- Conversational UI: [tools/Chat.tsx](tools/Chat.tsx) (uses [`Message`](types.ts))
- Page summarization helper: [`summarizePage`](services/geminiService.ts)
- Simple keyboard shortcuts and tool sidebar: [App.tsx](App.tsx) (uses [`TOOLS`](constants.tsx) and `TOOL_SHORTCUTS`)

Getting started (local dev)
1. Install
```bash
npm install
```

2. Provide your Gemini API key in `.env.local`:
```env
GEMINI_API_KEY=your_api_key_here
```
Vite config maps env keys into the client bundle (see [vite.config.ts](vite.config.ts)). The runtime wrapper is in [services/geminiService.ts](services/geminiService.ts) (`getAIClient` / [`generateAIResponse`](services/geminiService.ts)).

3. Run dev server
```bash
npm run dev
```

4. Open http://localhost:3000 and use the UI. Toggle the dashboard with Alt + A when embedded as an extension or use the "Get Extension" buttons on the landing page.

Development notes
- The client uses React 19 and Vite. Tailwind styles are included via the CDN in [index.html](index.html) for the prototype.
- Keep secrets out of the source. The dev flow expects a local ENV variable ([.env.local](.env.local)) mapped by [vite.config.ts](vite.config.ts).
- API surface:
  - [`generateAIResponse`](services/geminiService.ts) — generate conversational responses.
  - [`summarizePage`](services/geminiService.ts) — produce page summaries.
  - [`searchGrounding`](services/geminiService.ts) — grounding/search helper.

Extending the project
- Add new tools under [tools/](tools/) and register them in [`TOOLS`](constants.tsx).
- UI components live in [components/](components/); reuse `FloatingPanel` for other floating widgets.
- Keep types centralized in [types.ts](types.ts).

Architecture & design
- Refer to [ARCHITECTURE.md](ARCHITECTURE.md) for the injection strategy (content script → shadow root → React app) and message flow between background/service worker and content script.
- This repo is a UI prototype and not a complete Chrome Extension packaging (manifest, background worker, and content script integration are described in ARCHITECTURE.md).

Useful commands
```bash
npm run dev     # local dev server
npm run build   # production build
npm run preview # preview production build
```

Contributing
- Open PRs for bug fixes, new tools, or performance improvements.
- When adding API calls, keep request sizes reasonable and avoid sending full DOM without explicit user consent.

License
- Add license metadata as needed for your project.

If you need a packaged extension scaffold (manifest, background worker, content script) or CI configuration, refer to [ARCHITECTURE.md](ARCHITECTURE.md) and add the files under a new `extension/
