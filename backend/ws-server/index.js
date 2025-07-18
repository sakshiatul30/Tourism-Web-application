import { WebSocketServer } from "ws";
import { PORT } from "./config.js";
import { setupWebSocketServer } from "./handlers/wsHandler.js";

const wss = new WebSocketServer({port: 8000 });

setupWebSocketServer(wss);