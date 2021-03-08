import React, { Component } from 'react';
import Aux from '../Auxillary/Auxillary';
import Toolbar from '../Components/Toolbar/Toolbar';
import classes from './Main.css';
import Sidebar from '../Components/Sidebar/Sidebar';
import Search from '../Components/Search/Search';

class Main extends Component {
    state = {
        sidebar: true,
        moving: 0,
        searchValue: '',
        content: ['S', 'T', 'R', 'I', 'N', 'G']
    }
    movingRight = () => {
        this.setState({
            sidebar: true,
            moving: 0
        });
    };
    movingLeft = () => {
        this.setState({
            sidebar: false,
            moving: -150
        });
    };
    valueChangedHandler = (event) => {
        this.setState({
            searchValue: event.target.value
        })
    }
    render() {
        let names = this.state.content.filter((name) => name.toLowerCase().includes(this.state.searchValue.toLowerCase()));
        if (names == null) {
            names = this.state.content
        }
        return (
            <Aux>
                <div className={classes.Main}>
                    <div>
                        <Toolbar />
                    </div>
                    <div className={classes.Frame}
                        style={{ gridTemplateColumns: `repeat(1,${200 + this.state.moving}px) 23px 1fr` }}>
                        <div className={classes.Sidebar}
                            style={{ transform: `translateX(${this.state.moving}px)` }}>
                            <Sidebar />
                        </div>
                        <div className={classes.straight_line}>
                            {this.state.sidebar ? <p className={classes.left_arrow}
                                onClick={this.movingLeft}>&larr;</p> :
                                <p className={classes.right_arrow}
                                    onClick={this.movingRight}>&rarr;</p>}
                        </div>
                        <div className={classes.main_content}>
                            <div>
                                <Search value={this.state.searchValue}
                                    valueChanged={(event) => this.valueChangedHandler(event)} />
                            </div>
                            <div className={classes.boxes}>
                                {names.map((item, index) => {
                                    return (
                                        <div className={classes.inner_box} key={index}>
                                            <p className={classes.paragraph}>{item}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default Main;