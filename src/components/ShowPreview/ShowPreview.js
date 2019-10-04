import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ShowPreview extends Component{
    render(){
        const { id, image, name, summary } = this.props;        

        return (
            <div className="t-preview">
                <Link to={`/shows/${id}`}>
                    <h2 className="t-link">{name}</h2>
                </Link>
                {image && (<img src={image} alt={name}/>)}
                <div dangerouslySetInnerHTML={{__html: summary}} />                     
            </div>
        )
    }
}

export default ShowPreview;