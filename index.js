require("dotenv").config();

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OpenAIApi
});

const openai = new OpenAIApi(configuration);

// Make request
async function getPoem() {
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "generate a short poem" }],
    });
    // get the poem from response
    const poem = response.data.choices[0].message.content;
    console.log(poem);
}
// Still cooking
getPoem();