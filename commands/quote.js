const Discord = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('quote')
		.setDescription('Quotes you on this. Or someone else.').addStringOption(option =>
		option.setName('quote')
			.setDescription('The quote to format.')
			.setRequired(true)).addUserOption(option =>
		option.setName('user')
			.setDescription('The author of the quote. You by default.')),
	async execute(interaction) {
		user = interaction.user;
		if(interaction.options.getUser('user') != null) user = interaction.options.getUser('user');
		const embed = new Discord.MessageEmbed()
                .setDescription(interaction.options.getString('quote'))
                .setFooter(`--${user.username}`, user.avatarURL());
		await interaction.reply({embeds: [embed]});
	},
};
