import React from "react";
import styled from 'styled-components';

const Appl= styled.div`
  form{
    label{
      select{
        width:20%;
      }
    }
  }
`

export class OdabirAuta extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'audi'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      this.props.parentCallback(event.target.value);
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
          <form onSubmit={this.handleSubmit}>
            <label>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="audi">Audi</option>
                <option value="volkswagen">Volkswagen</option>
                <option value="bmw">BMW</option>
                <option value="mercedes">Mercedes</option>
              </select>
            </label>
          </form>
      );
    }
  }

export class OdabirVrata extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'tri'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      this.props.parentCallback(event.target.value);
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <Appl>
          <form onSubmit={this.handleSubmit}>
            <label>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="tri">3</option>
                <option value="cetiri">4</option>
                <option value="pet">5</option>
                <option value="sest">6</option>
                <option value="sedam">7</option>
              </select>
            </label>
          </form>
        </Appl>
      );
    }
  }