import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showRequest } from '../../actions/show';
import { getSeries, getIsLoading, getError } from '../../selectors/show';

class ShowPage extends Component{
    componentDidMount(){
        const { showRequest, match } = this.props;        
        showRequest(match.params.id);
    }

    render(){
        const { series, error, isLoading } = this.props;

        if (error)
            return <p>При загрузке данных возникла ошибка</p>;
        if (isLoading)
            return <p>Данные загружаются ...</p>;

        return (                
            <div>
                <h3>{series.name}</h3>
                { series.image && (<img src={series.image.original} alt={series.name} />) }
                <div dangerouslySetInnerHTML={{__html: series.summary}} />
                <ul>
                {
                    series._embedded && series._embedded.cast.map((el, index) => {
                        return (<li className="t-person" key={index}>
                            <p>{el.person.name}</p>
                            {el.person.image && <img src={el.person.image.original} alt={el.person.name} />}
                        </li>)
                    })
                }
                </ul>
            </div>               
        )
    }
}

const mapStateToProps = state => {    
    return {
        series: getSeries(state),
        isLoading: getIsLoading(state),
        error: getError(state)
    }
}

const mapDispatchToProps = { showRequest };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowPage);