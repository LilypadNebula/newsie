import React from 'react'
import './app.css'

const App = () => {
  return (
    <main>
      <nav className="flex bg-gray-700 p-4 justify-center">
        <input type="text" className="border-0 w-1/3 rounded p-3 text-xl bg-gray-800 text-white" placeholder="Enter a search term!"/>
        <select className="border-0 w-1/6 rounded p-3 text-xl bg-gray-800 text-white mx-6">
          <option value="name">Sort by name</option>
          <option value="name">Sort by name</option>
          <option value="name">Sort by name</option>
          <option value="name">Sort by name</option>
        </select>
        <button className="bg-red-500 text-white rounded p-3 w-1/6">Search</button>
      </nav>
    </main>
  
  )
}

export default App