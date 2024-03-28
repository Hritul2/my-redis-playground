import express from "express";
import axios from "axios";
import { client } from "./client";

const app = express();

app.listen(9000, () => {
  console.log("Running server on port 9000");
});

app.get("/", async (req, res) => {
  const cacheValue = await client.get("todos");
  if (cacheValue) return res.json(JSON.parse(cacheValue));
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  await client.set("todos", JSON.stringify(data));
  await client.expire("todos", 30);
  return res.json(data);
});
