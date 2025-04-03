import client from "./client.js";
async function addLeft(key, value) {
  await client.lpush(`${key}`, `${value}`);
}
async function addRight(key, value) {
  await client.rpush(`${key}`, `${value}`);
}

async function popRight(key) {
  const val = await client.rpop(`${key}`);
  console.log(val);
}
async function popLeft(key) {
  const val = await client.lpop(`${key}`);
  console.log(val);
}
async function readLeft(key, start, end) {
  const val = await client.lrange(`${key}`, start, end);
  console.log(val);
}
async function bPopLeft(key) {
  const val = await client.blpop(`${key}`, 5); //if the list is empty then it waits till 5 sec, if in the mean time any value is added it is popped and ends otherwise after time out return null
  console.log(val);
}

addLeft(1, "Abcd");
addLeft(1, "xyz");
addRight(1, "1234");
addRight(1, "ojpwer");
addRight(1, "6794835r");
readLeft(1, 0, -1);
readLeft(1, 1, 3);
popLeft(1);
popRight(1);
bPopLeft(1);
bPopLeft(1);
bPopLeft(1);
bPopLeft(1);
bPopLeft(1);
addLeft(1, "qebwfoivbeiobf");
bPopLeft(1);
bPopLeft(1);
bPopLeft(1);
