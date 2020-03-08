import React from 'react';
import { useHistory } from 'react-router-dom';

export default function CharacterCard(props) {

  const history = useHistory()
  //declare initial informations for each character
  const { char_id, img, name } = props.char

  //function
  const clickHandler = (param) => {
    history.push(`/${param}`)
  }

  //main JSX
  return (
    <>
      <div className="column is-2">
        <div className="character card has-text-centered" onClick={() => clickHandler(char_id)}>
          <div className="card-image">
            <figure className="image is-3by4">
              <img src={img} alt="face" />
            </figure>
          </div>
          <div className="content">
            <p className="title is-size-4">{name}</p>
            <p className="characterDetail is-size-6 has-text-info">more details</p>
          </div>
        </div>
      </div>
    </>
  )
}
