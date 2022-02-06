import contentManager from "api/contentManager";

export const createAssets = async (image_url, title) => {
  if (image_url) {
    const asset = await contentManager.then(async (environment) => {
      const isExist = await environment.getAssets({
        "fields.title": title,
      });

      if (isExist?.total == 0) {
        return await environment
          .createAsset({
            fields: {
              title: {
                "en-US": title,
              },
              file: {
                "en-US": {
                  contentType: "image/jpeg",
                  fileName: title + ".jpeg",
                  upload: image_url,
                },
              },
            },
          })
          .then(async (asset) => await asset.processForAllLocales())
          .then(async (asset) => await asset.publish());
      } else {
        return {
          sys: {
            id: isExist.items[0].sys.id,
            linkType: "Asset",
            type: "Link",
          },
        };
      }
    });
    return {
      sys: {
        id: asset.sys.id,
        linkType: "Asset",
        type: "Link",
      },
    };
  }
  return false;
};
