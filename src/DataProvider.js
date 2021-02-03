import React, {createContext, Component} from 'react'

export const DataShare = createContext(); 

class DataProvider extends Component {
    state = {message: "asaaa"}
    render() {
            return (
                <DataShare.Provider value="blabla">
                {this.props.children}   
                </DataShare.Provider>)
        }
}

export default DataProvider;