import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 
import { connect} from 'react-redux';
import * as actions from '../../Actions/story_actions';
import Typing from 'react-typing-animation'; 
import {
    Button, 
} from 'reactstrap';


class Intructions extends Component{
    constructor(props){
        super(props);
            this.state = {
            }
    }

    render(){
        return(
            <Button>
                Instructions
            </Button>
        )
    }
              
}

export default Intructions ; 