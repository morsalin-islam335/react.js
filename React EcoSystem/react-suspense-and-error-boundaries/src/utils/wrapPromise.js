export default function wrapPromise(promise) {
  // wrap promise take a promise as a argument
  let status = "pending";
  let response;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (error) => {
      status = "error";
      response = error;
    }
  );

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;

      case "error": // if after first time call it get   error, 2nd time call it will throw response which is error
        throw response;

      default:
        return response; // if first time call successfully get data then 2nd time call will return response(data)
    }
  };

  return {
    read,
  };
}
