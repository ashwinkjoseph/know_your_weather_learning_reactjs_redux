import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { forecastWeather, FETCH_WEATHER } from "../../../actions/fetchWeather";

class SearchBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {term:''};
        this.onSubmitForm = event =>{
            event.preventDefault();
            this.props.forecastWeather(this.state.term);
            this.setState({term:''});
        }
    }

    render(){
        return (
            <form className="input-group" onSubmit={this.onSubmitForm}>
                <input type="text" className="form-control" value={this.state.term} onChange={event=>this.setState({term:event.target.value})}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({forecastWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);