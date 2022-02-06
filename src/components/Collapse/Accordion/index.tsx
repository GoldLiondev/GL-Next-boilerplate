import React, { ComponentType, useState } from "react";
// hoc
import { useCollapse } from "components/hoc";

// types
import {
  CollapseWrapperProps,
  CollapeContainerProps,
} from "types/components/CollapseBox";

// ---------------------------------------------------------------------

const CollapseContainer = (
  CollapseHeaderWrapper: ComponentType<CollapseWrapperProps>
) => {
  const AccordionItem = useCollapse(CollapseHeaderWrapper);
  // eslint-disable-next-line react/display-name
  return ({ items, options }: CollapeContainerProps) => {
    const [current, setCurrent] = useState("");

    const handleProvider = (currentItem) => {
      if (current === currentItem) {
        setCurrent("");
      } else setCurrent(currentItem);
    };

    return (
      <>
        {items.map((item, index) => (
          <AccordionItem
            key={`accordionItem_${index}`}
            handleOpen={handleProvider}
            current={current}
            {...item}
            {...options}
          >
            {item.children}
          </AccordionItem>
        ))}
      </>
    );
  };
};

export default CollapseContainer;
