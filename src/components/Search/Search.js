import React, { Component } from 'react';
import { searchRequest } from '../../actions/search';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ShowPreview from '../ShowPreview';
import { 
    getSeries,
    getIsLoading,
    getError
 } from '../../selectors/search';

class Search extends Component{    
    constructor(props){
        super(props);

        this.state = {
            inputValue: ''
        }        
    }

    handleClick = evt => {
        const { searchRequest } = this.props;
        searchRequest(this.state.inputValue);
    }

    handleInputChange = evt => {
        this.setState({
            inputValue: evt.target.value
        })
    }

    render(){
        const { series, isLoading, error } = this.props;        
        
        if (isLoading)
            return <div>Идет загрузка данных ... </div>;
        
        if (error)
            return <div>При загрузке данных произошла ошибка</div>;

        return (
            <div>
                <input type="search" onChange={this.handleInputChange} value={this.state.inputValue}/>
                <button onClick={this.handleClick}>Search</button>
                <div className="t-search-result">
                    {series && series.map(item => item.image && (<ShowPreview key={item.id} {...item} />))}
                </div>
            </div>    
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    
    return {
        series: getSeries(state),
        isLoading: getIsLoading(state),
        error: getError(state),
    }
}

const mapDispatchToProps = { searchRequest };

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Search)
)