import { useState, useEffect } from 'react'
import './App.css'
import Cards from './components/cards/cards.jsx'
import { fetchCard } from './services/cardService.js'
import NoTours from './components/header/header.jsx'

const App = () => {

  const [card, setCard] = useState([])

  const fetchData = () => {
    fetchCard().then((response) => {
      setCard(response.data)
    })
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <>
      {card.length === 0
        ? (<NoTours fetchData={fetchData} />)
        : (<div>
          <div>
            <Cards data={card} fetchData={fetchData} />
          </div>
        </div>)
      }
    </>
  )
}

export default App
