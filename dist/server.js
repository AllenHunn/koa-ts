"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app/app");
const PORT = Number(process.env.PORT) || 3000;
app_1.default.listen(PORT);
