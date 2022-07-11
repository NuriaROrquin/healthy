import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

export const DatePicker = ({
  label,
  placeholder,
  error,
  helpText,
  disabled,
  portal,
  icon,
  date,
  setDate,
}) => {
  return (
    <div class="max-w-2xl">
      <div className="block text-sm font-medium text-gray-primary mb-2">
        {label}
      </div>
      <div className={`${error && "error"}  relative rounded-md shadow-sm `}>
        <div
          className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none`}
        >
          {icon}
        </div>
        <ReactDatePicker
          portalId={portal}
          placeholderText={placeholder}
          selected={date}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          disabled={disabled}
          onChange={(date) => setDate(date)}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      {helpText && <span className="text-xs text-black-light">{helpText}</span>}
    </div>
  );
};

export const TimePicker = ({
  label,
  placeholder,
  error,
  helpText,
  disabled,
  portal,
  icon,
  hour,
  setHour,
}) => {
  return (
    <div class="max-w-2xl">
      <div className="block text-sm font-medium text-gray-primary mb-2">
        {label}
      </div>
      <div className={`${error && "error"}  relative rounded-md shadow-sm `}>
        <div
          className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none`}
        >
          {icon}
        </div>
        <ReactDatePicker
          portalId={portal}
          placeholderText={placeholder}
          selected={hour}
          onChange={(hour) => setHour(hour)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={60}
          timeCaption="Time"
          dateFormat="h:mm aa"
          dropdownMode="select"
          minTime={setHours(setMinutes(new Date(), 0), 9)}
          maxTime={setHours(setMinutes(new Date(), 30), 21)}
          excludeTimes={[
            setHours(setMinutes(new Date(), 0), 24),
            setHours(setMinutes(new Date(), 0), 1),
            setHours(setMinutes(new Date(), 0), 2),
            setHours(setMinutes(new Date(), 0), 3),
            setHours(setMinutes(new Date(), 0), 4),
            setHours(setMinutes(new Date(), 0), 5),
            setHours(setMinutes(new Date(), 0), 6),
            setHours(setMinutes(new Date(), 0), 7),
            setHours(setMinutes(new Date(), 0), 22),
            setHours(setMinutes(new Date(), 0), 23),
          ]}
          disabled={disabled}
        />
      </div>
      {helpText && <span className="text-xs text-black-light">{helpText}</span>}
    </div>
  );
};
