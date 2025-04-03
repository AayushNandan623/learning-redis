import client from "./client.js";
async function settingNew(key, value) {
  await client.set(`user:${key}`, `${value}`);
}

async function getValue(key) {
  const str = await client.get(`user:${key}`);
  console.log(str);
}

settingNew(1, "Aayush");
getValue(1);
