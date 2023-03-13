import { Client, REST, Routes } from "discord.js";
import { CreateQuestManifest } from "../commands/CreateQuestCmd.js";
import { StatusManifest } from "../commands/StatusCmd.js";
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
                StatusManifest,
                CreateQuestManifest
            ]
        })
        .then((v) => {
            success('Successfully reloaded application (/) commands.')
        })
}