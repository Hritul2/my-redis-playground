//string.js
import { client } from "./client.js";

const init = async () => {
  const result = await client.get("user:2");
  console.log(`Result:: ${result}`);

  //   await client.set("msg:6", "Hey from node.js");
  //   const msg = await client.get("msg:6");
  //   console.log(`Result:: ${msg}`);

  await client.expire("msg:6", 10);
};

init();
