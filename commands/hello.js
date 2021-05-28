module.exports = {
    name: 'hello',
    minArgs: 2,
    permissions: "ADMINISTRATOR",

    execute(message, arguments) {
            message.reply("hello bro")
    }
}