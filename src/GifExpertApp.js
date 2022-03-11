import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GifExpertApp = ({defaultCategories = []}) => {
  //mandamos el setCategories como prop al component
  const [categories, setCategories] = useState(defaultCategories);

  /*const handleAgregar = ()=>{

      setCategories([...categories, 'Jordi Wild']);
      //setCategories(['Jordi Wild', ...categories]);
      // setCategories (cats =>[...cats, 'Jordi Wild']}

    }*/

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ul>
        {
          categories.map((category) => (
            <GifGrid 
              key={category} 
              category={category} />
          ))
        }
      </ul>
    </>
  );
};
