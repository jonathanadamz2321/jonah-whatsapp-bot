const ytdl = require("ytdl-core");
const fs = require("fs");
const { exec } = require("child_process");

module.exports = async (sock, msg, input) => {
  try {
    if (!ytdl.validateURL(input)) {
      return sock.sendMessage(msg.key.remoteJid, { text: "❌ Invalid YouTube URL." });
    }
    const info = await ytdl.getInfo(input);
    const fileName = "/tmp/audio.mp3";
    const audioStream = ytdl(input, { filter: "audioonly" }).pipe(fs.createWriteStream(fileName));
    audioStream.on("finish", async () => {
      const audioBuffer = fs.readFileSync(fileName);
      await sock.sendMessage(msg.key.remoteJid, { audio: audioBuffer, mimetype: "audio/mp4" });
    });
  } catch (e) {
    await sock.sendMessage(msg.key.remoteJid, { text: "❌ Music error: " + e.message });
  }
};