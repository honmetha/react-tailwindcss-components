import * as React from "react";

interface SliderProps {
  min: number;
  max: number;
  extraClasses?: string;
  value: number;
  onChange(e: any): void;
}

const Slider = ({ min, max, extraClasses, value, onChange }: SliderProps) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      className={`slider ${extraClasses}`}
      value={value}
      onChange={onChange}
    />
  );
};

export default Slider;
