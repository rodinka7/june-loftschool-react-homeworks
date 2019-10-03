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
                {
                    series.map(item => {
                        return (
                            <div>
                                <img src={item.image} alt={item.name} />
                                <div dangerouslySetInnerHTML={{__html: item.summary}} /> 
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    series: getSeries(state),
    isLoading: getIsLoading(state),
    error: getError(state)
})

const mapDispatchToProps = { showRequest };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowPage);