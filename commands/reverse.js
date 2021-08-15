const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reverse')
		.setDescription('Reverses text.').addStringOption(option =>
		option.setName('input')
			.setDescription('The input to reverse.')
			.setRequired(true)),
	async execute(interaction) {
		await interaction.reply({content: interaction.options.getString('input').split('').reverse().join(''), ephemeral: true});
	},
};
