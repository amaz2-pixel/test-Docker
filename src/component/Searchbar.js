import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Button, Form } from "react-bootstrap";
import {Outlet, useSearchParams} from 'react-router-dom'

function Searchbar() {
   const [searchParams, setSearchParams] = useSearchParams();
   const [query,setQuery]=useState(searchParams.get('query'));
   
   const res = useFetch(query ? `/search/${query}` : '/new');

  const handleChange=event=>{
   const newQuery=event.target.value;
   setQuery(newQuery);
   setSearchParams({
    query:newQuery
   })
   }

   
  const doctors= res.data;
  return (
    
    <div className="input-wrapper">
       <FaSearch id="search-icon" />
       <input
         className="search-input"
         placeholder="جستجو کنید...."
        value={query}
       onChange={handleChange}
       dir="rtl"
      />
     </div>
  );
}

export default Searchbar;
