import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components';

const Appl= styled.div`
    .datum{
      padding:0.3em;
      box-shadow: 0px 0px 3px 0px #880000;
      border-radius:5px;
      width:75%
    }
  
    
`
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
export class DataPckr extends React.Component {
  constructor(props){
    super(props);
    this.state={
      startDate: new Date(),
      endDate: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    const [start, end] = event;
    this.setState({startDate: start});
    this.setState({endDate: end});
    this.props.parentCallback(event);
  }
  
  render(){
    return (
      <Appl>
      <DatePicker 
        format="y-mm-d"
        selected={this.state.startDate} 
        onChange={this.handleChange}
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        className="datum" 
        selectsRange
        inline
      />
      </Appl>
    );
  }
};