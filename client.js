import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();
const client = new Redis(process.env.Redis_URI);

export default client;
