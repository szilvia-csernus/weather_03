import React from 'react';
import Weather from './Weather';
import refreshicon from './assets/refresh.svg';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 15,
            timeToRefresh: false
        };
        this.count = this.count.bind(this);
        this.interval = 0;
    }

    count() {
        if (this.state.time == 1) {
            this.setState({ time: 15, timeToRefresh: true });
        }
        else if (this.state.time == 15) {
            this.setState({ time: this.state.time - 1, timeToRefresh: false });
        }
        else {
            this.setState({ time: this.state.time - 1 });
        }

    }

    componentDidMount() {
        this.interval = window.setInterval(this.count, 1000)
    }

    componentWillUnmount() {
        window.clearInterval(this.interval)
    }


    render() {
        const { time, timeToRefresh } = this.state;
        return (
            <div className="general-frame">
                <Weather timeToRefresh={timeToRefresh} />
                <div className="refreshing">
                    <div className="sign">
                        <img src={refreshicon} alt="refreshicon"/>
                    </div>
                    <div> in {time} second(s)</div>
                </div>
            </div>
        )
    }
}


export default App

