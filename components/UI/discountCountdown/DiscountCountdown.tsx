import React from "react";
import { useCountdown } from "../../../hooks/useCountdown";

interface Props {
  targetDate: number;
}

const DiscountCountdown: React.FC<Props> = ({
  targetDate,
}: {
  targetDate: Props;
}) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  if (days + hours + minutes + seconds <= 0) {
    return <ExpireNotice />;
  }
  return <ShowCounter />;
};

export default DiscountCountdown;
