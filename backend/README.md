# Persistent layout Server
## Setup
Install dependencies with `npm install`.

## Running dev server with nodemon
Run the server in development mode with nodemon with `npm run dev`. This will run the server using nodemon, which will reload the server when changes are detected.

## Setting the proxy in the client file.
Within the package.json in your client file, add this line within the root of the object to add it as a proxy for clients to reach. Where the 8001 matches the PORT in the .env file.

```
 "proxy": "http://localhost:8001"
```