import React, { useState } from 'react';

const Calendar = () => {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const generateCalendar = () => {
    const calendar = [];
    for (let i = 0; i < firstDay; i++) {
      calendar.push(<td key={`empty-${i}`}></td>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      calendar.push(<td key={day}>{day}</td>);
    }
    return calendar;
  };

  return (
    <div className="calendar">
      <h1>
        {currentDate.toLocaleString('default', { month: 'long' })} {currentYear}
      </h1>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          <tr>{generateCalendar()}</tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
