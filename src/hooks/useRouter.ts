import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// helper
import { isEmpty } from "utils/helper-validation";
// -----------------------------------------------------------------

const Rounter = () => {
  const router = useRouter();
  const [path, setPath] = useState("");
  const [param, setParam] = useState({});

  useEffect(() => {
    let isMounted = true;
    isMounted && setParam(router.query);
    isMounted && setPath(router.pathname);
    return () => {
      isMounted = false;
    };
  }, [router]);

  const move = (path = "/", param = {}, mode = {}) => {
    let paramString = "";
    if (!isEmpty(param)) {
      Object.keys(param).forEach((item) => {
        paramString += `/${param[item]}`;
      });
    }
    router.push(`${path}${paramString}`.replace("//", "/"), undefined, {
      ...mode,
    });
  };

  return { router, path, param, move };
};
export default Rounter;
