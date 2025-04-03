import client from "./client.js";
async function settingNew(key, value) {
  await client.set(`user:${key}`, `${value}`);
}
async function settingExpire(key, time) {
  await client.expire(`user:${key}`, time);
}
async function settingNewOnlyOnce(key, value) {
  await client.setnx(`user:${key}`, `${value}`);
}

async function getValue(key) {
  const str = await client.get(`user:${key}`);
  console.log(str);
}

settingNew(1, "Abcd");
getValue(1);
settingNewOnlyOnce(2, "Xyz");
getValue(2);
settingNewOnlyOnce(2, "qwerty");
getValue(2);
settingExpire(2, 10);
let count = 0;
const constCheck = setInterval(() => {
  if (count > 12) {
    clearInterval(constCheck);
  }
  getValue(2);
  count++;
}, 1000);
