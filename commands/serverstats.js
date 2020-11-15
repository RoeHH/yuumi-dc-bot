module.exports = (message) => {
    botCount = message.guild.premiumSubscriptionCount;
    memberCount = message.guild.memberCount - botCount;
    guildName = message.guild.name;
    serverRegion = message.guild.region;
    message.channel.send("          " + guildName + "                                   " + botCount);
}