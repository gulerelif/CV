import React from 'react';
class Language extends React.Component{
    render(){
        return(
            <li>{this.props.item.dil} <span>({this.props.item.derece})</span> </li>
        );
    }
}
export default Language;