# Cleaning Dilution Calculator

Calculate concentrate and water volumes for a chosen mix ratio and batch size.

## What it does

- Capture **concentrate parts**.
- Capture **water parts**.
- Capture **total batch (ml)**.
- See a live, client-side estimate as you change values.
- Keep calculation inputs in the page only; the app does not save them.

## Run locally

Open `index.html` in a current browser. No build step, npm install, or network connection is required. For local development, run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Test

Node.js 18 or newer is needed for the dependency-free logic tests. The browser app itself has no runtime dependencies.

```sh
npm test
npm run check
```

## Privacy and scope

Calculator values are processed in the current page and are not saved to local storage. Follow product label directions. Never mix cleaning products unless their labels say it is safe.

## License

MIT. See [LICENSE](./LICENSE).
