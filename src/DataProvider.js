import React, {createContext, Component} from 'react'

export const DataShare = createContext(); 

class DataProvider extends Component {
    state = {message: ""}
    render() {
            return (
                <DataShare.Provider value={
                    {   state: this.state,
                    }}>
                {this.props.children}   
                </DataShare.Provider>)
        }
}

export default DataProvider;