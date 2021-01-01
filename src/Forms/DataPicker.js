import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components';

const Appl= styled.div`
  DatePicker{
    width:50%
  }
    
`
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
export class DataPckr extends React.Component {
  constructor(props){
    super(props);
    this.state={
      datum: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({datum: event});
    this.props.parentCallback(event);
  }
  
  render(){
    return (
      <Appl>
      <DatePicker 
        dateFormat="dd.MM.y." 
        selected={this.state.datum} 
        onChange={this.handleChange} 
      />
      </Appl>
    );
  }
};