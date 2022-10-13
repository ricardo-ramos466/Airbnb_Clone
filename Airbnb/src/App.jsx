import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

function App() {

  const cards = data.map(item => (<Card 
      key={item.id}
      {...item}
      />))
 
  return (
    <div className='App-div'>
      <Nav />
      <Hero />
      <section className='card-list'>
        {cards}
      </section>
    </div>
  )
}

export default App
