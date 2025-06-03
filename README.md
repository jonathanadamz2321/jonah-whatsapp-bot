# Jonah - AI-powered WhatsApp Bot

## Features
- ChatGPT commands with OpenAI
- YouTube music download
- Auto QR pairing for login
- Modular command system

## Deployment

1. Clone or upload project
2. Install dependencies:
```bash
npm install
```
3. Set OpenAI key in `.env` or system env:
```bash
export OPENAI_API_KEY=your_api_key
```
4. Run bot:
```bash
npm start
```

## Usage

Send WhatsApp messages:
- `!ai your question`
- `!music https://youtube.com/...`

All credentials are saved in `auth/` folder after login.
