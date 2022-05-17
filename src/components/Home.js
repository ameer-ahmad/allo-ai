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
        setPrompt("");
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
    <div className="app">
        <h1 className="header">Fun with AI</h1>
        <p className="enterPrompt">Enter prompt</p>
        <textarea className="promptText" placeholder='Write a tagline for an ice cream shop.' value={prompt} onChange={(e) => setPrompt(e.target.value)}></textarea>
        
        <label for="cars">Select an AI engine: </label>
        <select name="cars" id="cars">
        <option value="volvo">text-davinci-002</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        </select>

        <button className="submit" onClick={submit}>Submit</button>
        <Responses responses={responses} />
    </div>
  )
}

export default Home