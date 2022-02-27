import "./styles.css";

// perc could be any value between 1-100
export default function CircularProgress({ perc = 10 }) {
  if (perc < 0) {
    perc = 0;
  } else if (perc > 100) {
    perc = 100;
  }
  let r = 90;
  let circumference = Math.PI * (r * 2);
  let pct = ((100 - perc) / 100) * circumference;

  return (
    <div
      style={{
        position: "relative",
        width: "150px",
        height: "150px",
      }}
    >
      <svg
        id="svg"
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        version="1.1"
      >
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="transparent"
          strokeDasharray="565.48"
          stroke-width="1em"
          stroke="#666"
        ></circle>
        <circle
          stroke="#ff9f1e"
          stroke-width="1em"
          id="bar"
          cx="100"
          cy="100"
          r="90"
          fill="transparent"
          strokeDasharray="565.48"
          strokeDashoffset={pct}
        ></circle>
      </svg>
      <img
        style={{
          borderRadius: "50%",
          width: "80%",
          zIndex: "4",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        alt=""
        src={"http://placehold.jp/150x150.png"}
      />
    </div>
  );
}
