/**
 * 
 *  QuizzBot - v.0.0.0-dev
 *  By: Adolfo González Juárez
 * 
 */

// Dependencies
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import discord from 'discord.js';

// Internal dependecies
import { createQuest } from './questions.js';

const versionApp = "v.0.0.0-dev"

console.info(`QUIZ BOT | ${versionApp}`);
console.info("Initializing...");
dotenv.config();

// Database config and connection
const DATABASE_URI = process.env["DB_URL"] || false;

console.info("Checking environment variable...");
if (!DATABASE_URI){
    console.error('The environment variable "DB_URI" could not be accessed.');
    process.exit(1);
}

console.info("Trying to connect to the database...");
await mongoose.connect(DATABASE_URI).then((e)=>{
    console.info("Connection successfully established");
}).catch((err)=>{
    console.error(err);
    process.exit(1)
})

console.clear()
console.info(`QUIZ BOT | ${versionApp}`);

