import './App.css'
import data from './utils/data.json'
import Header from './components/header'
import DayOfWeek from './components/dayOfWeek'


function App() {

  const DayElements = data.map((day,index) => {
    return(<DayOfWeek key={index} amount={day.amount} day={day.day} index={index}/>)
  })

  return (
    <div className="App">
      <div className='container'>
        <Header/>
        <div className='spending-container'>
          <h2>Spending - Last 7 days</h2>
          <div className='bars-container'>
          {DayElements}
          </div>
          <div className='totals-container'>
            <div className='total-spend'>
              <p>Total this month</p>
              <h1>$478.33</h1>
            </div>
            <div className='total-increase'>
              <h4 className='percentage'>+2.4%</h4>
              <p className='last-month'>from last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
