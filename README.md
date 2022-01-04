# Batch requester for MATIC tokens from Polygon Mumbai(testnet) Faucet
This is simple cypress-script that requests MATIC from Mumbai Polygon faucet every minute to get lots of MATIC.

To install: `npm install`.

We use `https://faucet.polygon.technology/`. Just paste your address to `cypress\integration\polygon.js` and run `npx cypress open`. Script will continuously ask for MATIC. As I know 10 MATIC is limit for faucet, so use multiple addresses to get more.

