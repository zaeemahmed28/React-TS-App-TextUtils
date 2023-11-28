import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion} from 'react-bootstrap';
import "./About.scss";
import { useState } from 'react';

export default function About() {

    const[style, setMyStyle] = useState('accordion-header-default')
    const[buttonText, setButtonText] = useState('Enable Dark Mode')

    const [containerStyle, setContainerStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
    })

    const buttonContainerStyle = {
        height: '10vh',
    }

    const handleDarkModeClick = () =>{

        setButtonText((preText) => (preText === 'Enable Light Mode' ? 'Enable Dark Mode' : 'Enable Light Mode'));
        setMyStyle((prevClasses) => (prevClasses === 'accordion-header-default' ? 'accordion-header-custom' : 'accordion-header-default'));

        if(containerStyle.color === 'white'){
            setContainerStyle({
                color: 'black',
                backgroundColor: 'white',
            }) 
        }

        else{
            setContainerStyle({
                color: 'white',
                backgroundColor: 'black',
            })
        }
    }

  return (
    <div className='container' style={containerStyle}>
        <h1 className='my-2'>About Us</h1>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className={` ${style}`}>
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className={` ${style}`}>
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className={` ${style}`}>
                <Accordion.Header>Accordion Item #3</Accordion.Header>
                <Accordion.Body>
                Placeholder content for this accordion, which is intended to demonstrate the
                .accordion-flush class. This is the third item's accordion body. 
                Nothing more exciting happening here in terms of content,
                but just filling up the space to make it look, at least at first glance, a bit more
                representative of how this would look in a real-world application.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <div className='container my-3' style={buttonContainerStyle}>
            <button type='button' className='btn btn-primary' onClick={handleDarkModeClick}>{buttonText}</button>
        </div>
    </div>
  )
}
