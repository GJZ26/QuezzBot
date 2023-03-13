import { Client } from "discord.js";
import { CreateQuestCmd, CreateQuestManifest } from "../commands/CreateQuestCmd.js";
import { StatusManifest, StatusCmd } from "../commands/StatusCmd.js";
import { bold, debug, success, warn } from "../utilities/logs.js";
import refreshCommands from "./config.js";

/**
 * 
 * @param {Client} bot 
 */
export default async function loadEvents(bot) {
    await refreshCommands(bot);
    warn("Adding event listeners...");

    bot.on("guildCreate", (guild) => {
        debug(`${bold(bot.user.username)} added to ${bold(guild.name)}`)
    })

    bot.on("guildDelete", (guild) => {
        debug(`${bold(bot.user.username, "LOG")} kicked from ${bold(guild.name)}`)
    })

    bot.on('interactionCreate', async (interaction) => {
        if (!interaction.isChatInputCommand()) return;
        if (interaction.commandName === StatusManifest.name) StatusCmd(interaction);
        if (interaction.commandName === CreateQuestManifest.name) await CreateQuestCmd(interaction);
    })

    success("Events added")
}