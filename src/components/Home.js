import React, { useState } from 'react'
import Responses from './Responses'
const { Configuration, OpenAIApi } = require('openai');

function Home() {
    const [prompt, setPrompt] = useState("");
    const [responses, setResponses] = useState([]);

    const configuration = new Configuration({
        apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);

    const submit = async () => {
        const response = await openai.createCompletion("text-davinci-001", {
            prompt: prompt, 
            temperature: 0.8,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
        setResponses([{prompt: prompt, response: response.data.choices[0].text}, ...responses])
    }

  return (
    <div>
        <h1>Fun with AI</h1>
        <p>Enter prompt</p>
        <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)}></textarea>
        <button onClick={submit}>Submit</button>
        <Responses responses={responses} />
    </div>
  )
}

export default Home