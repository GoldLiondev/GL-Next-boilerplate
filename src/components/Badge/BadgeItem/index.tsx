import React from "react";
// types
import { BadgeContainerProps } from "types/components/Badge";
// styled component
import { BadgeWrapper } from "./Badget.style";

// ------------------------------------------------------------------

const Badge: React.FC<BadgeContainerProps> = ({
  children,
  badgeBg = "primary.regular",
  badgeColor = "white",
  ...props
}) => {
  return (
    <BadgeWrapper badgeBg={badgeBg} badgeColor={badgeColor} {...props}>
      {children}
    </BadgeWrapper>
  );
};
export default Badge;
