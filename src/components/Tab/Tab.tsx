import React, { ComponentType, useState } from "react";
// types
import { TabTitleProps } from "types/components/Tab";
// utils
import { isEmpty } from "utils/helper-validation";
// ----------------------------------------------------------------

const useTabs =
  (TabTitle: ComponentType<TabTitleProps>, TabContainer: ComponentType) =>
  // eslint-disable-next-line react/display-name
  ({ children }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    return (
      <>
        {isEmpty(children) && <></>}
        {isEmpty(children.length) && (
          <>
            <TabContainer>
              <TabTitle
                key={0}
                selected={true}
                sColor={children.props?.sColor ?? ""}
              >
                {children.props?.title}
              </TabTitle>
            </TabContainer>
            <div>{children}</div>
          </>
        )}
        {!isEmpty(children.length) && (
          <>
            <TabContainer>
              {children.map((item, index) => (
                <TabTitle
                  key={index}
                  onClick={() => setSelectedTab(index)}
                  selected={selectedTab === index}
                  sColor={children.props?.sColor ?? ""}
                >
                  {item.props?.title ?? ""}
                </TabTitle>
              ))}
            </TabContainer>
            <div> {children[selectedTab]}</div>
          </>
        )}
      </>
    );
  };
export default useTabs;
