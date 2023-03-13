import { CommandInteraction } from "discord.js"
import { bold, debug, underscore } from "../utilities/logs.js"

export const StatusManifest = {
    name: "status",
    description: "Command to find out if QuizzBot is still alive"
}

/**
 * @param {CommandInteraction} interaction
 */
export function StatusCmd(interaction) {
    interaction.reply("Yep, I'm still working!\nThere may be more information in your server's console...");
    debug(`Ping! from ${underscore(bold(interaction.channel.name))} channel.`,interaction.user.username);
}