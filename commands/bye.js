module.exports = {
    name: 'bye',
    minArgs: 2,
    permissions: "ADMINISTRATOR",

    execute(message, arguments) {
            message.reply("bye bro.")
    }
}