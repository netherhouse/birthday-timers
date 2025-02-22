import React from "react";
import "../styles/DateInput.scss";

interface Props {
  birthDate: string;
  setBirthDate: (date: string) => void;
}

const DateInput: React.FC<Props> = ({ birthDate, setBirthDate }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthDate(e.target.value);
  };

  return (
    <div className="input-container">
      <label className="input-label">SYSTEM DATE INPUT</label>
      <input
        type="date"
        value={birthDate}
        onChange={handleChange}
        className="date-input"
      />
    </div>
  );
};

export default DateInput;
