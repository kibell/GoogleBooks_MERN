import React, { useState, useEffect } from "react";
import API from "../utils/API.js";
import Jumbotron from "../components/header/index";
import Input from "../components/input";
import SearchCard from "../components/SearchCard/index";

const SearchBooks = () => {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([]);

    useEffect(() => {
        
        console.log(results)
    }, [results]);

    const handleInputChange = event => {
        const value = event.target.value;
        setSearch(value);
      };
    

    const handleFormSubmit = (event) => {
        event.preventDefault();
        API.search(search)
        .then(res => (
            
            setResults(res.data.items))
        )
        .catch(error => console.log(error));

    }


 
        





    






    return (
        <React.Fragment>
        <Jumbotron></Jumbotron>
        <div style={{marginBottom: '7em'}}>
        <Input
        inputField={search}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        />

<ul>
                {results.map((result, i) => (
                    <li key = {i}>
                        <SearchCard
                            
                        title = {result.volumeInfo.title}
                        author = {result.volumeInfo.authors}
                     description = {result.volumeInfo.description}
                           
                            

                        />                   </li>
                ))}
 </ul>
                    

        </div>
        </React.Fragment>
    );
}

export default SearchBooks;