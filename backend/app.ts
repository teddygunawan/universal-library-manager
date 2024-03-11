"use strict";

import Koa from "koa";
import cors from "@koa/cors";
import dotenv from "dotenv";

const app = new Koa();
dotenv.config();

// Update your CORS settings here
const WHITELIST_ORIGIN = new Set(process.env.ACCESS_CONTROL_WHITELIST_ORIGIN?.split(","));
app.use(
  cors({
    origin: function (ctx) {
      const origin = ctx.header.origin || "";
      if (WHITELIST_ORIGIN.has(origin) || !origin) {
        return origin;
      }

      return "";
    },
  })
);

app.use((ctx) => {
  ctx.body = "Hello World";
});

app.listen(3001);

export default app;
