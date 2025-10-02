import React from 'react';

export default function WeekNavigation({ currentWeek, changeWeek }) {
  const today = new Date();
  const weekStart = new Date(today.getFullYear(), today.getMonth(), today.getDate() + currentWeek * 7);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);

  const options = { day: 'numeric', month: 'long' };
  const startStr = weekStart.toLocaleDateString('pl-PL', options);
  const endStr = weekEnd.toLocaleDateString('pl-PL', options);

  return (
    <div className="week-navigation">
      <button className="nav-btn" onClick={() => changeWeek(-1)}>‹ Poprzedni tydzień</button>
      <div className="current-week">{startStr} - {endStr}</div>
      <button className="nav-btn" onClick={() => changeWeek(1)}>Następny tydzień ›</button>
    </div>
  );
}