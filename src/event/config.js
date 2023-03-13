import { Client, REST, Routes } from "discord.js";
import { TestManifest } from "../commands/TestCmd.js";
import { success, warn } from "../utilities/logs.js";

/**
 * @param {Client} bot 
 */
export default async function refreshCommands(bot) {
    warn("Started refreshing application (/) commands...")

    const rest = new REST({ version: '10' }).setToken(process.env["BOT_TOKEN"]);

    await rest.put(Routes.applicationCommands(bot.user.id),
        {
            body: [
                TestManifest
            ]
        })
        .then((v) => {
            success('Successfully reloaded application (/) commands.')
        })
}