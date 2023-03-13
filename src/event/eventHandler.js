import { Client } from "discord.js";
import { TestCmd, TestManifest } from "../commands/TestCmd.js";
import { success, warn } from "../utilities/logs.js";
import refreshCommands from "./config.js";

/**
 * 
 * @param {Client} bot 
 */
export default async function loadEvents(bot) {
    await refreshCommands(bot);
    warn("Adding event listeners...");

    bot.on('interactionCreate',(interaction)=>{
        if (!interaction.isChatInputCommand()) return;

        if(interaction.commandName == TestManifest.name) TestCmd(interaction); 
    })

    success("Events added")
}