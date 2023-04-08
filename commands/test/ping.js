const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Tenha uma resposta linda!'),
	async execute(interaction) {
		await interaction.reply('Vai bobo');
	},
};