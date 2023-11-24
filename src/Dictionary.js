import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";




export default function Dictionary(props){
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [results, setResults] = useState(null);
    const[loaded, setLoaded] = useState(false);



function HandleResponse(response){
    //console.log(response.data[0]);
    setResults(response.data[0]);
    //console.log(response.data[0].meanings[0].definitions[0].definition);

}

function search(){
    //documentations: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    //console.log(apiUrl);
    axios.get(apiUrl).then(HandleResponse);

}



function handleSubmit(event){
    event.preventDefault();
    //alert(`Searching for the definition of "${keyword}"`);
    search();

    
}



function handleKeywordChange(event){
    //console.log(event.target.value);
    setKeyword(event.target.value);
}

function load(){
    setLoaded(true);
    search();
}


if(loaded){
    return (
<div className="Dictionary">
        <section>
        <h1>What word do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange}
            defaultValue={props.defaultKeyword}/>
        </form>
        <div className="hint">
        suggested words: yoga, jazz, novel, matcha, wine...
        </div>
        </section>
        <Results  results={results}/>
</div>
    );
}else{
    load();
    return "Loading..."
}
}