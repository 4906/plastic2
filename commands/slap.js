const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('slap')
		.setDescription('Trout someone.').addUserOption(option =>
		option.setName('luser')
			.setDescription('The luser to trout.')
			.setRequired(true)),
	async execute(interaction) {
		rng=Math.random();
		trout=interaction.user.username;
		luser=interaction.options.getUser('luser').username;
		msg=`<:trout:877211019959750667>***WHACK!*** ${trout} slaps ${luser} around a bit with a wet trout.`;
		if(rng <= 0.04) msg=`Trout WHIFFA YU ${luser}`;
		else if(rng <= 0.08) msg=`A Trout BROACHETH ${luser}`;
		await interaction.reply({content: msg});
	},
};
