import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const rand = Math.random() * 100
    const num = Math.ceil(rand)
    this.setState(prevState => ({count: prevState.count + num}))
    this.func()
  }

  func = () => {
    const {count} = this.state
    return count
  }

  func2 = () => {
    const {count} = this.state
    let variable
    if (count % 2 === 0) {
      variable = 'Even'
    } else {
      variable = 'Odd'
    }
    return variable
  }

  render() {
    const result = this.func()
    const result2 = this.func2()
    return (
      <div className="cont">
        <div className="card">
          <h1 className="heading">Count {result}</h1>
          <p className="para">count is {result2}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="para2">*Increase by random number between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
