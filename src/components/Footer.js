import React, { useState, useContext, useEffect } from 'react'
import ResponseContext from '../ResponseContext';
const { Configuration, OpenAIApi } = require('openai');

function Footer() {
    const [prompt, setPrompt] = useState("");
    const {responses, setResponses} = useContext(ResponseContext);
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
    <div className="footer">
        <div className="footerSelect">
            <label>
                <select name="engine" id="engine" onChange={(e) => setEngine(e.target.value)}>
                <option value="text-davinci-002">text-davinci-002</option>
                <option value="text-curie-001">text-curie-001</option>
                <option value="text-babbage-001">text-babbage-001</option>
                <option value="text-ada-001">text-ada-001</option>
                </select>
            </label>
        </div>
        <div className="footerPrompt">
            <input required className="promptText" placeholder='Enter your prompt!' value={prompt} onChange={(e) => setPrompt(e.target.value)} />
            <button className="submit" onClick={submit}>Submit Prompt</button>
        </div>
    </div>
  )
}

export default Footer