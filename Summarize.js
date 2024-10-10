import { HfInference } from "@huggingface/inference";
import * as dotenv from 'dotenv';


dotenv.config();


const summarize = async (context) => {
    ed
    const apiKey = process.env.APIKEY;
    if (!apiKey) {
        throw new Error("API Key not found in environment variables.");
    }

    const inference = new HfInference(apiKey);
    let result = '';

    try {

        for await (const chunk of inference.chatCompletionStream({
            model: "meta-llama/Llama-3.1-8B-Instruct",
            messages: [{ role: "user", content: `Summarize ${context} such that no information is lost.` }],
            max_tokens: 500,
        })) {

            result += chunk.choices[0]?.delta?.content || '';
        }
    } catch (error) {
        console.error("Error during summarization:", error);
    }
    return result;
};

export default summarize;
