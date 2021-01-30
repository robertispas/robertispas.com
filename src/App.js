import React from 'react';
import './App.css';

class App extends React.Component {
    render(){
        return (
            <div style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                    <h1>hi there. under construction.</h1>
                    <a class="db center items-center justify-center mw5 tc black link dim"
                        title="Linkedin Link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/robert-i-11b58b123/">

                        <img class="db ba b--black-10"
                            alt="linkedin link"
                            style={{border: 0}}
                            src="https://i.gyazo.com/38b43a4765f23ffbfc50c129642f8e67.png"
                        />
                    </a>
            </div>
        )
    } 
}

export default App;
