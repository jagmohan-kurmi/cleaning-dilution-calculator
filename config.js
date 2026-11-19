window.APP_CONFIG = {
  "slug": "cleaning-dilution-calculator",
  "title": "Cleaning Dilution Calculator",
  "brand": "cleaning dilution calculator.",
  "category": "Kitchen & household",
  "tagline": "Calculate concentrate and water volumes for a chosen mix ratio and batch size.",
  "description": "Calculate concentrate and water volumes for a chosen mix ratio and batch size.",
  "mode": "calculator",
  "kind": "dilution",
  "fields": [
    {
      "name": "concentrateParts",
      "label": "Concentrate parts",
      "required": true,
      "type": "number"
    },
    {
      "name": "waterParts",
      "label": "Water parts",
      "required": true,
      "type": "number"
    },
    {
      "name": "batchMl",
      "label": "Total batch (ml)",
      "required": true,
      "type": "number"
    }
  ],
  "dateField": "",
  "timerField": "",
  "titleField": "concentrateParts",
  "scope": "Follow product label directions. Never mix cleaning products unless their labels say it is safe.",
  "emptyText": "No entries yet. Add one above to get started."
};
