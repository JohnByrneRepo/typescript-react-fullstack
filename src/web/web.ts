import express from "express";
import http from "http";
import path from "path";

import pageA from './pageData/page-a-data';
import pageB from './pageData/page-b-data';
import pageC from './pageData/page-c-data';

const app = express();

app.set("view engine", "ejs");
app.set("views", "public");

app.use("/assets", express.static(path.join(__dirname, "frontend")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/get-page", (req, res) => {
  const page = req.query.page;
  switch (page) {
    case "page-a": res.json(pageA); break;
    case "page-b": res.json(pageB); break;
    case "page-c": res.json(pageC); break;
  }
});

export const start = (port: number): Promise<void> => {
  const server = http.createServer(app);
  return new Promise<void>((resolve, reject) => {
    server.listen(port, resolve);
  });
};
