import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TravelCard from '../TravelCard'

import './index.css'

class TravelGuide extends Component {
  state = {isLoading: true, dataList: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const formattedData = data.packages.map(each => ({
        id: each.id,
        imageUrl: each.image_url,
        name: each.name,
        description: each.description,
      }))
      this.setState({isLoading: false, dataList: formattedData})
    }
  }

  loadingView = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  successView = () => {
    const {dataList} = this.state

    return (
      <ul className="list-container">
        {dataList.map(each => (
          <TravelCard details={each} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Travel Guide</h1>
        <div className="card-container">
          {isLoading === true ? this.loadingView() : this.successView()}
        </div>
      </div>
    )
  }
}

export default TravelGuide
