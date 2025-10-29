import './App.css'
import Header from  '../components/Header'
import Entry from '../components/Entry'
import data from '../data.js'





function App() {

  const entryElements = data.map(entry => {
    return (
      <Entry 
       key={entry.id}
       country={entry.country}  
       title={entry.title}
      />
    )
  })


  return (
    <>
      <Header />
      {entryElements}


    </>
  )
}

export default App
