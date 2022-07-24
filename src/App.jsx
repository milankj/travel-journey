import Journal from './Journal'
import Nav from './Nav'
import data from './data'

function App() {
  return (
    <div className="App">
      <Nav/>
      {
        data.map(obj=>{
          console.log('object ',obj)
          return(
            <Journal
              {...obj}
            />
          )
        })
      }
    </div>
  )
}

export default App
