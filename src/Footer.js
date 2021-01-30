import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render(){
        return (
            <footer class="pv4 ph3 ph5-m ph6-l mid-gray">
                <small class="f6 db tc">©2021 Made with <a className="link b black-80 hover-light-blue" href="https://reactjs.org/">React</a><br></br><a href="mailto:me@robertispas.com" title="mail" class="f6 dib ph2 link mid-gray dim">me@robertispas.com</a></small>
            </footer>
              
        )
    } 
}

export default Footer;
