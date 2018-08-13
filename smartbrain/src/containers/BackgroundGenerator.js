import React, {Component} from 'react';
import ColorPicker from '../components/ColorPicker';


class BackgroundGenerator extends Component{
    render(){
        return (
            <div>
                <ColorPicker />
                <ColorPicker />
            </div>
        );
    }
}

export default BackgroundGenerator;