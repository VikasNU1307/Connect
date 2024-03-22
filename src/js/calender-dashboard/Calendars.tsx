import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "./calendars.css";

import React, { useState } from "react";
import { Calendar } from "primereact/calendar";

const Calendars = () => {
  // let today = new Date();
  // let month = today.getMonth();
  // let year = today.getFullYear();
  // let prevMonth = (month === 0) ? 11 : month - 1;
  // let prevYear = (prevMonth === 11) ? year - 1 : year;
  // let nextMonth = (month === 11) ? 0 : month + 1;
  // let nextYear = (nextMonth === 0) ? year + 1 : year;

  // const [date14, setDate14] = useState<Date | Date[] | undefined>(undefined);

  // let minDate = new Date();
  // minDate.setMonth(prevMonth);
  // minDate.setFullYear(prevYear);

  // let maxDate = new Date();
  // maxDate.setMonth(nextMonth);
  // maxDate.setFullYear(nextYear);

  return (
    <div className="card__calendar">
      <Calendar inline className="set-cal "  />
    </div>
  );
};
export default Calendars;
