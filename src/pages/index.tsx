// Step 1: Import React
import * as React from 'react'
import Navbar from '../components/navbar'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <div>
      <Navbar/>
    </div>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage