export const CustomTooltipActivity = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-activity">
        <p> {`${payload[0].value}kg`}</p>
        <p> {`${payload[1].value}kCal`}</p>
      </div>
    );
  }
  return null;
};

export const CustomTooltipObjectif = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-objectif">
        <p> {`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};
