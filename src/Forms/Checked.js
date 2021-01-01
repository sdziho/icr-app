import React from 'react'

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
               <div>
                   <input type="checkbox"  id="mybox" onChange={this.handleCheck}
                          defaultChecked={this.state.checked}/>
               </div>
        )
    };
}