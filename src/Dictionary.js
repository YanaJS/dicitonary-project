import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";




export default function Dictionary(){
    const [keyword, setKeyword] = useState("");



function HandleResponse(response){
    console.log(response.data[0]);

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
</div>


    );

}