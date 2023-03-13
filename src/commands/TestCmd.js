import { CommandInteraction } from "discord.js"
import { debug } from "../utilities/logs.js"

export const TestManifest = {
    name: "status",
    description: "Command to find out if QuizzBot is still alive"
}

/**
 * @param {CommandInteraction} interaction
 */
export function TestCmd(interaction) {
    interaction.reply("Yep, I'm still working!");
}