import React, { useState } from 'react'
import './app.css'
import axios from 'axios'
import NewsCard from './components/NewsCard'

const App = () => {
  const [articles, setArticles] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  
  const performSearch = async (term) => {
    const res = await axios.get(`https://newsapi.org/v2/everything?q=${term}&apiKey=${process.env.NEWSAPI_KEY}`)
    setArticles(res.data.articles)
  }


  return (
    <main>
      <nav className="flex bg-gray-700 p-4 justify-around lg:justify-center">
        <input type="text" className="border-0 w-1/3 rounded p-1 lg:p-3 lg:text-xl bg-gray-800 text-white" placeholder="Enter a search term!" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <select className="border-0 lg:w-1/6 rounded p-1 lg:p-3 lg:text-xl bg-gray-800 text-white mx-6">
          <option value="">Sort by...</option>
          <option value="date">Sort by date</option>
          <option value="relevance">Sort by relevance</option>
          <option value="popularity">Sort by popularity</option>
        </select>
        <button className="bg-red-500 text-white rounded p-1 lg:p-3 lg:w-1/6" onClick={() => performSearch(searchTerm)}>Search</button>
      </nav>
      <div className="flex flex-wrap justify-around">{articles.map(a => <NewsCard article={a} />)}</div>
    </main>
  
  )
}

export default App