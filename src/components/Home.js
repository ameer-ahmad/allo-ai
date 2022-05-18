import React, { useState, useEffect } from 'react'
import Responses from './Responses'
const { Configuration, OpenAIApi } = require('openai');

function Home() {
    const [prompt, setPrompt] = useState("");
    const [responses, setResponses] = useState([]);
    const [engine, setEngine] = useState("text-davinci-002");

    useEffect(() => {
        const data = window.localStorage.getItem('RESPONSES');
        if (data !== null) setResponses(JSON.parse(data));
    }, [])

    useEffect(() => {
        if (responses?.length) {
            window.localStorage.setItem('RESPONSES', JSON.stringify(responses));
        }
    }, [responses])

    const configuration = new Configuration({
        apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);

    const submit = async () => {
        setPrompt("");
        const response = await openai.createCompletion(engine, {
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
        
        <label for="engine">Select an AI engine: </label>
        <select name="engine" id="engine" onChange={(e) => setEngine(e.target.value)}>
        <option value="text-davinci-002">text-davinci-002</option>
        <option value="text-curie-001">text-curie-001</option>
        <option value="text-babbage-001">text-babbage-001</option>
        <option value="text-ada-001">text-ada-001</option>
        </select>

        <button className="submit" onClick={submit}>Submit</button>
        <button onClick={() => {
            setResponses([])
            localStorage.removeItem('RESPONSES')
        }}>Clear</button>
        <Responses responses={responses} />
    </div>
  )
}

export default Home