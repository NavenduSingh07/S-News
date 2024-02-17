import React from "react";

const Allen = ({data}) => {
    console.log("dataurl", data)
  return (
    <div>
      <h1>Allen</h1>
      

      <iframe
        title="External Website"
        src={data}
        width="100%"
        height="500px"
      />
    </div>
  );
};

export default Allen;
