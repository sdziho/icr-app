import React from "react";
import styled from 'styled-components';

const Appl= styled.div`
  form{
    label{
      select{
        width:70%;
        padding:0.3em;
        box-shadow: 0px 0px 3px 0px #880000;
        border-radius:5px;
        .opcija{
          text-align:center;
          padding:1em;
          color:red;
        }
      }
    }
  }
`

export class OdabirAuta extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '-'};
  
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
                <option value="none">-</option>
                <option value="Audi">Audi</option>
                <option value="BMW">BMW</option>
                <option value="Dacia">Dacia</option>
                <option value="Ferrari">Ferrari</option>
                <option value="Ford">Ford</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Mini">Mini</option>
                <option value="Renault">Renault</option>
                <option value="Volkswagen">Volkswagen</option>
              </select>
            </label>
          </form>
        </Appl>
      );
    }
  }

export class OdabirVrata extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'none'};
  
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
                <option value="none">-</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </label>
          </form>
        </Appl>
      );
    }
  }