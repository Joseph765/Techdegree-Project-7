import React from 'react';
import Image from './Image';

const Photo = (props) => {

    let images;

    const data = props.data.photo;
    if (data !== undefined) {
        images = data.map(img =>
            <Image src={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.server}/${img.id}_${img.secret}.jpg`} key={img.id}/>
        );
    }

    if (images === undefined) {
        return (
            <h1>Loading....</h1>  
        );
    } else if(images.length === 0) {
        return (
            <h1 className="not-found">Sorry, No Results were found :(</h1>  
        );
    } else {

        return (
            <div className="photo-container">
                <ul>
                  {images}
                </ul>
            </div> 
        ); 
    }
}

export default Photo;