import React, {Component} from 'react';
import Typewriter from "typewriter-effect";
import './home.css';
class TypeWriterC extends Component {
    state = {

    }
    render() {
        return (
            <div className="type display-3">
                <span className="badge badge-secondary">
                <Typewriter
                    options={{
                        strings: ["PLAY WITH DSA", "FALL IN LOVE WITH DSA","LET'S PLAY WITH DATA STRUCTURES"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </span>
            </div>
        );
    }
}

export default TypeWriterC;
