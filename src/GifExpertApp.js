import React, { Fragment,useState } from 'react';
import AddCategory from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp =() =>{

    // let categorias =['One Punch','Samurai X','Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);
    // const HandleAddCategory = () =>{
    //     setCategories(cat => [...categories,'Hunter x Hunter']);
    // };
    // onClick={HandleAddCategory}
   return(
       <Fragment>
           <h2>GifExpertApp</h2>
           <AddCategory setCategories={setCategories}></AddCategory>
           <hr></hr>
           <ol>
           {
               categories.map(category=> (
                    <GifGrid category={category} key={category}/>
                ))
           }
           </ol>
          
            
       </Fragment>
   ); 
}


export default GifExpertApp;
