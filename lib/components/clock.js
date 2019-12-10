import { Component } from 'preact';
export class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: Date.now()
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: Date.now()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const time = new Date(this.state.time).toLocaleTimeString();
    return h("span", null, time);
  }

}