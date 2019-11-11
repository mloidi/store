import React, { useState, useEffect } from 'react';

import { Calendar, Months } from '../../../lib/calendar';
import Icon from '../icons/Icon';
import { faIcons } from '../icons/IconsConstant';

const Month = ({
  showControls,
  year,
  month,
  calendarStartDate,
  setCalendarStartDate,
  calendarEndDate,
  setCalendarEndDate
}) => {
  const [weekDays] = useState([
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ]);

  const [calendarYear, setCalendarYear] = useState(year);
  useEffect(() => {
    setCalendarYear(year);
  }, [year]);

  const [calendarMonth, setCalendarMonth] = useState(month);
  useEffect(() => {
    setCalendarMonth(month);
  }, [month]);

  const [monthCalendar, setMonthCalendar] = useState(() => {
    return Calendar.printableMonth(
      Calendar.getMonth(calendarYear, calendarMonth)
    );
  });

  useEffect(() => {
    setMonthCalendar(
      Calendar.printableMonth(Calendar.getMonth(calendarYear, calendarMonth))
    );
  }, [calendarYear, calendarMonth]);

  const dayStyle = day => {
    if (day.getDay() === 6 || day.getDay() === 0) {
      return 'w-8 py-1 mx-1 bg-gray-200 text-teal-900 cursor-default';
    } else {
      if (
        (calendarStartDate && Calendar.isSameDay(calendarStartDate, day)) ||
        (calendarEndDate && Calendar.isSameDay(calendarEndDate, day))
      ) {
        return 'w-8 py-1 mx-1 bg-teal-400 text-white cursor-pointer';
      }
      if (
        calendarStartDate &&
        calendarEndDate &&
        Calendar.isBetweenDates(day, calendarStartDate, calendarEndDate)
      ) {
        return 'w-8 py-1 mx-1 bg-teal-300 text-teal-500 cursor-pointer';
      }
      return 'w-8 py-1 mx-1 hover:bg-teal-400 hover:text-white cursor-pointer';
    }
  };

  const weekDayId = id => {
    return id + calendarMonth + calendarYear;
  };

  const weekId = id => {
    return id + calendarMonth + calendarYear;
  };

  const controlButtonStyle =
    'w-5 mx-1 cursor-pointer inline-block text-lx leading-none hover:bg-teal-500 hover:text-white text-center';

  return (
    <div className="border-solid border border-teal-600 mx-2 px-1">
      <div className="flex text-teal-500 my-2 ">
        {showControls ? (
          <div className="flex-1 flex justify-start">
            <button
              className={controlButtonStyle}
              onClick={() => {
                setCalendarYear(calendarYear - 1);
              }}
            >
              <Icon icon={faIcons._faCaretLeft} />
              <Icon icon={faIcons._faCaretLeft} />
            </button>
            <button
              className={controlButtonStyle}
              onClick={() => {
                if (calendarMonth - 1 < 0) {
                  setCalendarMonth(11);
                  setCalendarYear(calendarYear - 1);
                } else {
                  setCalendarMonth(calendarMonth - 1);
                }
              }}
            >
              <Icon icon={faIcons._faCaretLeft} />
            </button>
          </div>
        ) : (
          <div className="flex-1"></div>
        )}
        <div className="flex-2 text-center">
          {Months.NAMES[calendarMonth].en + ' ' + calendarYear}
        </div>
        {showControls ? (
          <div className="flex-1 flex justify-end">
            <button
              className={controlButtonStyle}
              onClick={() => {
                if (calendarMonth + 1 > 11) {
                  setCalendarMonth(0);
                  setCalendarYear(calendarYear + 1);
                } else {
                  setCalendarMonth(calendarMonth + 1);
                }
              }}
            >
              <Icon icon={faIcons._faCaretRight} />
            </button>
            <button
              className={controlButtonStyle}
              onClick={() => {
                setCalendarYear(calendarYear + 1);
              }}
            >
              <Icon icon={faIcons._faCaretRight} />
              <Icon icon={faIcons._faCaretRight} />
            </button>
          </div>
        ) : (
          <div className="flex-1"></div>
        )}
      </div>
      <div className="flex bg-teal-500 text-white my-2 py-1">
        {weekDays.map(weekDay => (
          <div className="w-8 mx-1 cursor-default text-center" key={weekDay}>
            {weekDay}
          </div>
        ))}
      </div>
      <div>
        {monthCalendar.map(weekCalendar => (
          <div className="flex" key={weekId(weekCalendar.id)}>
            {weekCalendar.weekDays.map(weekDay => (
              <React.Fragment key={weekDayId(weekDay.id)}>
                {weekDay.date ? (
                  <button
                    className={dayStyle(weekDay.date)}
                    onClick={() => {
                      if (calendarStartDate) {
                        setCalendarEndDate(weekDay.date);
                      } else {
                        setCalendarStartDate(weekDay.date);
                      }
                    }}
                  >
                    {weekDay.date.getDate()}
                  </button>
                ) : (
                  <div className="w-8 p-1 mx-1"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Month;
