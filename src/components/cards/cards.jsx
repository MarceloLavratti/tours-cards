import React, { useState, useEffect } from 'react'
import './cards.css'
import Header from '../header/header'

const Cards = ({ data, fetchData }) => {

  const [cards, setCards] = useState([])
  const [readMore, setReadMore] = useState(false)

  const handleDeleteButton = (id) => {
    const updatedCards = cards.filter(item => item.id !== id)
    setCards(updatedCards)
  }

  const toggleReadMore = () => setReadMore(!readMore)

  useEffect(() => {
    setCards(data)
  }, [data]);

  return (
    <div>
      <Header data={cards.length} fetchData={fetchData} />
      {(cards.map(item =>
        <div key={item.id} className='page'>
          <div className='card'>
            <div className='image-div'>
              <img src={item.image} alt='image'></img>
            </div>
            <div className='card-text'>
              <div className='title-price'>
                <h3>{item.name}</h3>
                <span>
                  <h3>{item.price}</h3>
                </span>
              </div>
              <div className='info-btn-div'>
                <p>
                  {readMore
                    ? `${item.info}`
                    : `${item.info.substring(0, 200)} ...`
                  }
                  <span onClick={toggleReadMore}>
                    {readMore ? ' Show less' : ' Show more'}
                  </span>
                </p>
                <button onClick={() => handleDeleteButton(item.id)}>Delete</button>
              </div>
            </div>

          </div>
        </div>
      ))}
    </div >
  )
}

export default Cards
