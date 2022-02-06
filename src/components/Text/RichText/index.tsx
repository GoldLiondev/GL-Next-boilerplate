import React, { Fragment } from "react";
// contentful
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// component
import { Image } from "components/Image";
// helper
import { isEmpty } from "utils/helper-validation";
// -----------------------------------------------------------------------

const RichText = ({ textDocument, ...props }) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = textDocument.links.assets.block.find(
          (item) => item.sys.id === node.data.target.sys.id
        );
        return (
          <Image
            src={asset.url}
            height={asset.height}
            width={asset.width}
            alt={asset.title}
            oFit="cover"
          ></Image>
        );
      },

      [BLOCKS.PARAGRAPH]: (_, children) => {
        return (
          <div>
            {children.map((item, index) => {
              return typeof item == "object" ? (
                <Fragment>{item}</Fragment>
              ) : (
                <div
                  key={`rich-text-p_${index}`}
                  dangerouslySetInnerHTML={{ __html: item }}
                ></div>
              );
            })}
          </div>
        );
      },
    },
  };

  return (
    <div {...props}>
      {!isEmpty(textDocument) &&
        documentToReactComponents(textDocument?.json, options)}
    </div>
  );
};
export default RichText;
