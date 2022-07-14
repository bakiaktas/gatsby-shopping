import axios from "axios";
import to from "await-to-js";

const callApi = async ({ url, method = "get", params, data, headers }) => {
  const [err, res] = await to(
    axios({
      baseURL: "https://platform.sandbox.trustmeup.com/api/e-merchant/v1.1/",
      url: `${url}`,
      method,
      data,
      params,
      headers,
    })
  );

  if (!err) {
    return res.data;
  } else {
    console.log("Api error message:", err);
  }
};

export default callApi;
