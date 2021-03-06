import React from 'react';
import styled from 'styled-components';

const Appl= styled.div`
  form{
    label{
      input{
        padding:0.3em;
        box-shadow: 0px 0px 3px 0px #880000;
        border-radius:5px;
        width:75%;
      }
    }
  }
`

export class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event){
      event.preventDefault();
      this.setState({value: event.target.value});
      this.props.parentCallback(event.target.value);
    }
    
    handleSubmit(event) {
      return false;
    }
    render() {
      return (
        <Appl>
        <form>
            <label>
              <input type="number" 
                placeholder={this.props.placeho} 
                value={ this.props.clear ? this.state.value : ''} 
                onChange={this.handleChange} 
                onSubmit={this.handleSubmit}
              />
            </label>
        </form>
        </Appl>
      );
    }
  }

  export class TekstForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event){
      event.preventDefault();
      this.setState({value: event.target.value});
      this.props.parentCallback(event.target.value);
    }
    
    handleSubmit(event) {
      return false;
    }
    render() {
      return (
        <Appl>
        <form>
            <label>
            <input type="string"
              placeholder={this.props.placeho} 
              value={this.state.value} 
              onChange={this.handleChange} 
              onSubmit={this.handleSubmit}
            />
            </label>
        </form>
        </Appl>
      );
    }
  }
