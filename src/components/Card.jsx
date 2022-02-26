import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'

import '../styles/card.scss'

export function Card() {
  return (
    <>
      <div className="card-container">
        <FontAwesomeIcon icon={faStar} />

        <div className="img-wrapper">
          <img
            src="https://media.istockphoto.com/photos/pop-it-pikachu-pokemon-on-dark-background-picture-id1339486581"
            alt=""
          />
        </div>

        <div className="info">
          <p>Name: Pikachu</p>
          <p>National Register: #000</p>
          <p>Type: Eletric</p>
        </div>
      </div>
    </>
  )
}
