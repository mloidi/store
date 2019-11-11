import React, { useState, useEffect } from 'react';

import Month from './Month';
import { CalendarType } from '../../../lib/calendar';
import Icon from '../icons/Icon';
import { faIcons } from '../icons/IconsConstant';

const Calendar = ({
  type,
  year,
  month,
  startDate,
  endDate,
  setStartDate,
  setEndDate
}) => {
  const [calendarStartDate, setCalendarStartDate] = useState(startDate);
  useEffect(() => {
    setCalendarStartDate(startDate);
  }, [startDate]);
  useEffect(() => {
    setStartDate(calendarStartDate);
  });

  const [calendarEndDate, setCalendarEndDate] = useState(endDate);
  useEffect(() => {
    setCalendarEndDate(endDate);
  }, [endDate]);
  useEffect(() => {
    setEndDate(calendarEndDate);
  });

  const [calendarType, setCalendarType] = useState(type);
  useEffect(() => {
    setCalendarType(type);
  }, [type]);

  const [showControls, setShowControls] = useState(false);
  useEffect(() => {
    if (calendarType === CalendarType.SINGLE) {
      setShowControls(true);
    } else {
      setShowControls(false);
    }
  }, [calendarType]);

  const [calendarYear, setCalendarYear] = useState(year);
  useEffect(() => {
    setCalendarYear(year);
  }, [year]);

  const controlButtonStyle =
    'w-5 mx-1 cursor-pointer inline-block text-lx leading-none hover:bg-teal-500 hover:text-white text-center';

  return (
    <>
      {calendarType === CalendarType.SINGLE && (
        <div className="flex">
          <Month
            year={calendarYear}
            month={month}
            showControls={showControls}
            calendarStartDate={calendarStartDate}
            setCalendarStartDate={setCalendarStartDate}
            calendarEndDate={calendarEndDate}
            setCalendarEndDate={setCalendarEndDate}
          />
        </div>
      )}
      {calendarType === CalendarType.FULL && (
        <>
          <div className="flex text-teal-500 my-2 ">
            <div className="flex-1 flex justify-end">
              <button
                className={controlButtonStyle}
                onClick={() => {
                  setCalendarYear(calendarYear - 1);
                }}
              >
                <Icon icon={faIcons._faCaretLeft} />
              </button>
            </div>
            <div className="flex-2 text-center">{calendarYear}</div>
            <div className="flex-1 flex justify-start">
              <button
                className={controlButtonStyle}
                onClick={() => {
                  setCalendarYear(calendarYear + 1);
                }}
              >
                <Icon icon={faIcons._faCaretRight} />
              </button>
            </div>
          </div>
          <div className="flex mb-4">
            <Month
              year={calendarYear}
              month={0}
              calendarStartDate={calendarStartDate}
              setCalendarStartDate={setCalendarStartDate}
              calendarEndDate={calendarEndDate}
              setCalendarEndDate={setCalendarEndDate}
            />
            <Month
              year={calendarYear}
              month={1}
              calendarStartDate={calendarStartDate}
              setCalendarStartDate={setCalendarStartDate}
              calendarEndDate={calendarEndDate}
              setCalendarEndDate={setCalendarEndDate}
            />
            <Month
              year={calendarYear}
              month={2}
              calendarStartDate={calendarStartDate}
              setCalendarStartDate={setCalendarStartDate}
              calendarEndDate={calendarEndDate}
              setCalendarEndDate={setCalendarEndDate}
            />
          </div>
          <div className="flex mb-4">
            <Month
              year={calendarYear}
              month={3}
              calendarStartDate={calendarStartDate}
              setCalendarStartDate={setCalendarStartDate}
              calendarEndDate={calendarEndDate}
              setCalendarEndDate={setCalendarEndDate}
            />
            <Month
              year={calendarYear}
              month={4}
              calendarStartDate={calendarStartDate}
              setCalendarStartDate={setCalendarStartDate}
              calendarEndDate={calendarEndDate}
              setCalendarEndDate={setCalendarEndDate}
            />
            <Month
              year={calendarYear}
              month={5}
              calendarStartDate={calendarStartDate}
              setCalendarStartDate={setCalendarStartDate}
              calendarEndDate={calendarEndDate}
              setCalendarEndDate={setCalendarEndDate}
            />
          </div>
          <div className="flex mb-4">
            <Month
              year={calendarYear}
              month={6}
              calendarStartDate={calendarStartDate}
              setCalendarStartDate={setCalendarStartDate}
              calendarEndDate={calendarEndDate}
              setCalendarEndDate={setCalendarEndDate}
            />
            <Month
              year={calendarYear}
              month={7}
              calendarStartDate={startDate}
              setCalendarStartDate={setCalendarStartDate}
              calendarEndDate={calendarEndDate}
              setCalendarEndDate={setCalendarEndDate}
            />
            <Month
              year={calendarYear}
              month={8}
              calendarStartDate={calendarStartDate}
              setCalendarStartDate={setCalendarStartDate}
              calendarEndDate={calendarEndDate}
              setCalendarEndDate={setCalendarEndDate}
            />
          </div>
          <div className="flex mb-4">
            <Month
              year={calendarYear}
              month={9}
              calendarStartDate={calendarStartDate}
              setCalendarStartDate={setCalendarStartDate}
              calendarEndDate={calendarEndDate}
              setCalendarEndDate={setCalendarEndDate}
            />
            <Month
              year={calendarYear}
              month={10}
              calendarStartDate={calendarStartDate}
              setCalendarStartDate={setCalendarStartDate}
              calendarEndDate={calendarEndDate}
              setCalendarEndDate={setCalendarEndDate}
            />
            <Month
              year={calendarYear}
              month={11}
              calendarStartDate={calendarStartDate}
              setCalendarStartDate={setCalendarStartDate}
              calendarEndDate={calendarEndDate}
              setCalendarEndDate={setCalendarEndDate}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Calendar;
