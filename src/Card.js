import React from 'react'
import './App.css'
export default function Card(props) {
    const { txtcolor } = props;
    const styletext = () => ({
        fontSize: '20px',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: txtcolor,
    })
    return (
        <div className="progressbarbackground">


            <div style={props.style}></div>
            <div className="message">
                <span className="message" style={styletext()}>{props.message}</span>
            </div>

        </div >
    )
}
