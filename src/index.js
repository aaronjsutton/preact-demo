import '../css/app.css'

import { Fragment, h, render } from 'preact'
import { Clock } from './components/clock'
import { Footer } from './components/footer'

const App = (props) => {
  return (
    <>
      <div class='card'>
        <h1>Basic Preact App</h1>
        <Clock title='The current time is: ' />
      </div>
      <Footer />
    </>
  )
}

render(<App />, document.getElementById('app'))
