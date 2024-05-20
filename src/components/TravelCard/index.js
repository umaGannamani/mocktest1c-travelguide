import './index.css'

const TravelCard = props => {
  const {details} = props

  const {name, imageUrl, description} = details

  return (
    <li className="list-items">
      <img src={imageUrl} alt={name} className="image" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}

export default TravelCard
