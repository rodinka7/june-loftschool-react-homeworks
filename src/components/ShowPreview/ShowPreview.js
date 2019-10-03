import React, { Component } from 'react';
// import { connect } from 'redux';

class ShowPreview extends Component{
    render(){
        const { image, name, summary } = this.props;
                
        return (
            <div className="t-preview">
                <div>{name}</div>
                {image && (<img src={image} alt={name}/>)}
                <div dangerouslySetInnerHTML={{__html: summary}} />                     
            </div>
        )
    }
}

// const mapStateToProps = state => ({
//     id: state.search
// })

// export default connect(
//     mapStateToProps
// )(ShowPreview);
export default ShowPreview;