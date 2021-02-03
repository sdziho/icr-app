import React from 'react'
import styled from 'styled-components';

const Appl= styled.div`
    
`

export class Checkedbox extends React.Component{
    constructor(props){
      super(props);
      this.state = { checked: false }
    }
    handleCheck = () => {
        this.setState({checked: !this.state.checked })
        this.props.parentCallback(!this.state.checked );
    }
    render(){
        return (
               <Appl>
                   <form>
                       <label>
                            <input type="checkbox"  onChange={this.handleCheck}
                                    defaultChecked={this.state.checked}></input>
                            <span className="opcija"></span>
                        </label>
                   </form>
               </Appl>
        )
    };
}