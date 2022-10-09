import {useState} from 'react'

type Props = {
    day: string;
    amount: number;
    index: number
}

function DayOfWeek({day,amount,index} : Props) : JSX.Element{
    const [showAmount, setShowAmount] = useState(false); // hover state to show amount

    
    function setColour() : string {
        const dayToday = new Date().getDay();
        return(
            dayToday  === index  ?
            "hsl(186, 34%, 60%)":"hsl(10, 79%, 65%)"
        )
    }

    const height : string = `${Math.floor((amount/70) * 100)}%`; // get dynamic heights in percentage

    const barStyle  = {
        height: height,
        backgroundColor: setColour()
    }

    function mouseEnter(){
        setShowAmount(true)
    }
    function mouseLeave(){
        setShowAmount(false);
    }

 return(
  <>
  <div className="day-container" >
    {
        showAmount && <div className="money-spent">${amount}</div>
    }
    <div className="bar-chart" style={barStyle}
    onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}></div>
    <p className="day">{day}</p>
  </div>
  </>
 )
}

export default DayOfWeek