module.exports = (message) => {
    memberCount = message.guild.memberCount;
    guildName = message.guild.name;
    guildRegion = message.guild.region;
    message.channel.send(guildName + ":\nRegion: " + guildRegion + "\nMembers: " + memberCount);
}