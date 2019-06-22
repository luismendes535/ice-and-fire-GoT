import React from 'react'
import './SearchBar.css';

export default function SearchBar(props) {
    return (
        <div className="SearchBar">
            <input className="Input" value={props.searchedChar} placeholder="Character name" onChange={e=>props.updateSearchInput(e)}/>
            <p><input className="Checkbox" checked={props.isAlive} type="checkbox" onClick={()=>props.toggleAliveChars()}/>Is alive</p>
            <button className="Button" onClick={()=>props.onSearchClick()}>Search</button>
        </div>
    )
}
