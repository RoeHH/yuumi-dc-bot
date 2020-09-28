module.exports = (client, member) => {
    member.send(
        `Welcome on the server! Please be aware that we won't tolerate troll, spam or harassment. Have fun 😀`
    )
    if (member == 500281313060978698) {
        member.roles.cache.some(role => role.name === 'General');
    }
}