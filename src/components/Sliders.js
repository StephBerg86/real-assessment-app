import React from "react";

export default function Sliders({ minP, maxP, minM, maxM, onChange }) {
  return (
    <div>
      <form className="slider">
        Budget
        <br />
        <label>
          Min. 161k
          <input
            type="range"
            min={minP}
            max={maxP}
            // value="price"
            onChange={onChange}
          />
          Max. 886k
        </label>
      </form>
      <form className="slider2">
        Floor space
        <br />
        <label>
          Min. 44m2
          <input type="range" min={minM} max={maxM} onChange={onChange} />
          Max. 103m2
        </label>
      </form>
      <br />
      <br />
    </div>
  );
}
