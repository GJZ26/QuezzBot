/**
 * 
 *  QuizzBot - v.2.0.0-dev
 *  By: Adolfo Juárez
 * 
 */

import { Client } from 'discord.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import conf from './bot-config.json' assert {type: 'json'}
import loadEvents from './event/eventHandler.js'
import { bold, clear, error, log, success, warn } from './utilities/logs.js'

dotenv.config()

// Loading general bot configurations
const version = conf.version;
const activity = conf.activity_type;
const descriptionActivity = conf.activity_description;
const intents = conf.intents;

// Loading access keys
const DATABASE_URI = process.env["DB_URL"] || false;
const TOKEN = process.env["BOT_TOKEN"];

clear();
log(`${bold("Quizz Bot", "LOG")} | ${version}`)

if (!DATABASE_URI) error(`The environment variable ${bold("DB_URI", 'ERROR')} could not be accessed.`, { exit: true });

warn('Establishing connection to the database...')
await mongoose.connect(DATABASE_URI).then((v) => {
    success('Database connection successful!')
}).catch((err) => {
    error("Database connection error");
    log(err, { exit: true })
})

/** Bot authentication */

warn("Configuring and trying to log in the robot...");
const bot = new Client({
    intents: [intents]
})


await bot.login(TOKEN).then((v) => {
    bot.user.setActivity(descriptionActivity,{type:activity})
    success("Bot logged!");
}).catch((err) => {
    error("We have not been able to wake up the robot...");
    log(err, { exit: true });
})

await loadEvents(bot)
clear();
log(`${bold("Quizz Bot", "LOG")} | ${version}`);
success("Bot awake and ready! 🤖")