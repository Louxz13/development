import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//import './index.css';

function CalendarForm() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <h1>Horarios</h1>
      



      <Calendar onChange={onChange} value={value} className="calendario"/>
    </div>
  );
}

export default CalendarForm