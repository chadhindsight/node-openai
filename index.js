require("dotenv").config();

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OpenAIApi
});

const openai = new OpenAIApi(configuration);

// Make request
async function getPoem() {
    const response = await openai.createChatCompletion({
        model: "gpt-4",
        messages: [{ role: "user", content: "generate a short poem about Diablo 4" }]
    })
    // get the poem from response
    const poem = response.data.choices[0].message.content
    console.log(poem)
}