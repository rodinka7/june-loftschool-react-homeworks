import React, { Component } from 'react';
import { searchRequest } from '../../actions/search';
import { connect } from 'react-redux';

class Search extends Component{
    state = {
        inputValue: ''
    }

    handleClick = evt => {
        const { searchRequest } = this.props;
        searchRequest(this.state.inputValue);
    }

    render(){
        const { series } = this.props;
        console.log(series);
        
        return (
            <div>
                <input type="search" value={this.state.inputValue}/>
                <button onClick={this.handleClick}>Search</button>
            
                {
                    // series.map(item => <div></div>)
                }
            </div>    
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    
    return {
        series: state.search.series 
    }
}

const mapDispatchToProps = { searchRequest };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);