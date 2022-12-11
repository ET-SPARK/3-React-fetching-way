import React, { Suspense } from 'react'
import Fetch from './components/Fetch'
import Axios from './components/Axios'
import Swr from './components/Swr'
function App() {
  return (
    <div className='App'>
      <Fetch />
      <Axios />
      <Suspense fallback={<h1>Loading...</h1>}>
      <Swr />
      </Suspense>
    </div>
  )
}

export default App