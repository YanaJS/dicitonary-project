import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";




export default function Dictionary(props){
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [results, setResults] = useState(null);
    const[loaded, setLoaded] = useState(false);
    const [photos, setPhotos] = useState(null);



function handleDictionaryResponse(response){
    //console.log(response.data[0]);
    setResults(response.data[0]);
    //console.log(response.data[0].meanings[0].definitions[0].definition);

}

function handlePexelsResponse(response){
    console.log("#####")
    console.log(response.data);
    console.log("<<<<<<<<")
    setPhotos(response.data.photos);

}

function search(){
    //documentations: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    //console.log(apiUrl);
    axios.get(apiUrl).then(handleDictionaryResponse);

   
    let pexelsApiKey = "xUF9ZzXOv1urmkvh4hgkcMOY0VPS96nBhw13pvCZzcIXbDaKG5ZJwcjr";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = {"Authorization" : `${pexelsApiKey}`} ;

    axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);

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
        <Photos photos= {photos}/>
</div>
    );
}else{
    load();
    return "Loading..."
}
}