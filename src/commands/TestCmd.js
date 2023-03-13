import discord from "discord.js"
const { Interaction } = discord

export const TestManifest = {
    name: "ping",
    description: "First command for arturito"
}

/**
 * 
 * @param {import("discord.js").Interaction} msg 
 */
export function TestCmd(interaction) {
    interaction.reply("pong")
}