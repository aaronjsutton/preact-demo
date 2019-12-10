import { Component, h } from 'preact'

export class Clock extends Component {
  constructor () {
    super()
    this.state = { time: Date.now() }
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render (props, state) {
    const time = new Date(this.state.time).toLocaleTimeString()
    return <div class='clock'>
      <h4 class='title'>{ props.title }</h4>
      <span class='time'>{time}</span>
    </div>
  }
}
