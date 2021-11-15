import "./styles.css";

function WeekDays({day}) {
  return (
    ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"].map(day => <td key={day}>{day}</td>)
  )
}

function MonthDays() {
  let monthDaysArray = [];
  let dateObj = new Date(new Date().getFullYear(), new Date().getMonth());
  var monthStart = new Date(new Date().getFullYear(), new Date().getMonth());
  var monthEnd = new Date(new Date().getFullYear(), new Date().getMonth()+1, 0).getDate();

  while (monthStart.getMonth() === dateObj.getMonth()) {
    monthDaysArray.push(<td>{monthStart.getDate()}</td>);

    if (monthStart.getDate() % 7 === 0) { // sunday, last day of week - newline
      monthDaysArray.push(<tr></tr>);
    }

    monthStart.setDate(monthStart.getDate() + 1);
  }
  return(
    <tbody>
      {monthDaysArray}
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
