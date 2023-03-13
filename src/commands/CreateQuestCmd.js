import { ActionRowBuilder, CommandInteraction, ModalBuilder, TextInputBuilder } from "discord.js";
import { debug } from "../utilities/logs.js";

export const CreateQuestManifest = {
    name: "quest",
    description: "Create a new trivia!"
}

/**
 * @param {CommandInteraction} interaction 
 */
export async function CreateQuestCmd(interaction) {
    const modal = new ModalBuilder()
        .setTitle("What your Quizz")
        .setCustomId("quest-modal")

    const question = new TextInputBuilder()
        .setCustomId('question')
        .setLabel("Your Question")
        .setPlaceholder("Why is the sky blue?")
        .setStyle("Short")
        .setRequired(false);

    const row = new ActionRowBuilder()
        .addComponents(question);

    modal.addComponents(row)

    await interaction.showModal(modal)

}