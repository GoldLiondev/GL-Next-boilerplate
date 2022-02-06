import React from "react";
// components
import { Text } from "components/Text";
// styled component
import { LoadingScreenWrapper } from "./LoadingScreen.style";
// --------------------------------------------------------------

const LoadingScreen = () => {
  return (
    <LoadingScreenWrapper>
      <div className="preloader">
        <div className="preloader__square"></div>
        <div className="preloader__square"></div>
        <div className="preloader__square"></div>
        <div className="preloader__square"></div>
      </div>
      <Text className="status" fSize={20}>
        Loading <span className="status__dot">.</span>
        <span className="status__dot">.</span>
        <span className="status__dot">.</span>
      </Text>
    </LoadingScreenWrapper>
  );
};

export default LoadingScreen;
