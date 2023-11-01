
import React from "react";
import { useParams } from "react-router-dom";

/* Is potentially not truly a redirect page but rather a page with an embed and opens at full screen. */

const RedirectPage: React.FC<{}> = () => {

  type Params = {
    URL: string;
  }

  const params = useParams();
  console.log(params);

  return (
  <>
  Redirecting...
  </>);
}

export default RedirectPage;