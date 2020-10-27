import {useState, useEffect} from 'react';
import {getGifs, GetGifs} from '../helpers/GetGifs';

export default function useFetchGifs(category) {
    const [state, setState] = useState({
        data:[],
        loading:true
    });

    useEffect(() =>{
        getGifs(category).then(imgs =>{
            setState({
                data:imgs,
                loading:false
            }); 
           
        });
    },[]);


    return state;
}
