const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = async (sock, msg, input) => {
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }]
    });
    await sock.sendMessage(msg.key.remoteJid, { text: completion.data.choices[0].message.content });
  } catch (e) {
    await sock.sendMessage(msg.key.remoteJid, { text: "❌ AI error: " + e.message });
  }
};