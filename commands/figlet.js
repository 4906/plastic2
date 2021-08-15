const { SlashCommandBuilder } = require('@discordjs/builders');
const figlet = require('figlet');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('figlet')
		.setDescription('Enlarges text.').addStringOption(option =>
		option.setName('input')
			.setDescription('The input to enlarge.')
			.setRequired(true)),
	async execute(interaction) {
		await interaction.reply({content: '```'+figlet.textSync(interaction.options.getString('input'))+'```', ephemeral: true});
	},
};
