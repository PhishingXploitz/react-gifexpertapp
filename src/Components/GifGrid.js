import React, { Fragment, useEffect } from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
import {getGifs} from '../helpers/GetGifs';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category);

  

    return (
        <Fragment>
            <h3 className="card animate__animated animate__fadeIn"> {category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid ">

                {
                    images.map(img => (
                        <GifGridItem
                            img={img}
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>

           
        </Fragment>
    )
}
