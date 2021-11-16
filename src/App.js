import "./styles.css";

const currentDateObj = new Date();

function WeekDays({day}) {
  return (
    ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"].map(day => <td key={day}>{day}</td>)
  )
}

function MonthDays() {
  let dateObj = new Date();
  // dateObj.setMonth(dateObj.getMonth()+1)
  // console.log(dateObj)

  let dateArray = []
  
  let currentDate = dateObj.getDate()
  let currentDay = dateObj.getDay()
  let currentYear = dateObj.getFullYear()
  let currentMonth = dateObj.getMonth()
  
  let currentMonthDate = new Date(currentYear, currentMonth)
  
  for(let i=0; i < currentDay-1; i++) {
      dateArray.push(0)
  }
  
  while(currentMonthDate.getMonth() === dateObj.getMonth()) {
  
      // if(currentMonthDate.getDay() % 7 === 0) {
      //     dateArray.push(-1)
      // }
      
      dateArray.push(currentMonthDate.getDate())
  
      console.log(currentMonthDate.getDate(), currentMonthDate.getDay())
      currentMonthDate.setDate(currentMonthDate.getDate()+1)
  }
  
  

  dateArray = dateArray.map((i,j) => {
    // if(i === 0) {
    //   return <td></td>
    // }
    // else if {
    //   return (<td>{i}</td>)
    // }
    if(j%7 === 0) {
      return <>{i !== 0 && <td>{i}</td>}<tr></tr></>
    }

    return (i === 0) ? <td></td> : <td>{i}</td>
  })

  // for(let i of dateArray) {
  //   for(
  // }

  return(
    <tbody>
      {dateArray}
    </tbody>
  )
}

export default function App() {
  var theMonths = ["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"];
  
  const currentDateObj = new Date();
  const currentYear = currentDateObj.getFullYear();
  const currentMonth = currentDateObj.getMonth();
  const currentDate = currentDateObj.getDate();
  var monthEnd = new Date(currentDateObj.getFullYear(), currentDateObj.getMonth()+1, 0).getDate();

  return (
    <div className="App">
        {/* <p>Current Year: {currentYear}</p>
        <p>Current Month: {currentMonth}{" "}{theMonths[currentMonth]}</p>
        <p>Current Date: {currentDate}</p>
        <p>Month End: {monthEnd}</p> */}
        <p>{theMonths[currentMonth]}</p>

      <table>
        <thead><tr><WeekDays /></tr></thead>
        <MonthDays />
      </table>
    </div>
  );
}
