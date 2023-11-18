import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";




export default function Dictionary(){
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState(null);



function HandleResponse(response){
    //console.log(response.data[0]);
    setResults(response.data[0]);
    //console.log(response.data[0].meanings[0].definitions[0].definition);

}

function search(event){
    event.preventDefault();
    //alert(`Searching for the definition of "${keyword}"`);

    //documentations: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    //console.log(apiUrl);
    axios.get(apiUrl).then(HandleResponse);
}



function handleKeywordChange(event){
    //console.log(event.target.value);
    setKeyword(event.target.value);
}

    return (
<div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" placeholder="Search for a word" onChange={handleKeywordChange}/>
        </form>
        <Results  results={results}/>
</div>
    );

}