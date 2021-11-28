// hooks
import { useEffect, useState } from "react";

function UseFetchPOST(url) {
  const [error, setError] = useState(null);
  const [postingData, setPostingData] = useState({});
  console.log(`json stringify : ${postingData}`);
  useEffect(() => {
    const controller = new AbortController();
    const postData = async () => {
      try {
        const process = await fetch(url, {
          signal: controller.signal,
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: postingData,
        });
        console.log(`stringified : ${JSON.stringify(postingData)}`);
        if (!process.ok) {
          throw new Error("Connection interrupted!");
        }
      } catch (e) {
        setError(e.message);
      }
    };
    postData();

    return () => {
      controller.abort();
    };
  }, [url, postingData]);
  return { error, setPostingData };
}
export default UseFetchPOST;
