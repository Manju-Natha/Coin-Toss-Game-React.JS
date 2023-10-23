// Write your code here
import {Component} from 'react'
import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    headsCount: 0,
    TailsCount: 0,
    tossResultIMage: HEADS_IMG_URL,
  }

  onTossCoin = () => {
    const {headsCount, TailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let letsHeadsCount = headsCount
    let letsTailsCount = TailsCount

    if (toss === 0) {
      tossImage = HEADS_IMG_URL
      letsHeadsCount += 1
    } else {
      tossImage = TAILS_IMG_URL
      letsTailsCount += 1
    }
    this.setState({
      tossResultIMage: tossImage,
      headsCount: letsHeadsCount,
      TailsCount: letsTailsCount,
    })
  }

  render() {
    const {headsCount, TailsCount, tossResultIMage} = this.state
    const totalCount = headsCount + TailsCount
    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="discription">Heads (or) Tails</p>
          <img
            src={tossResultIMage}
            className="toss-result-img"
            alt="toss result"
          />
          <button type="button" className="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {TailsCount}</p>
            <p className="count">Total: {totalCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
