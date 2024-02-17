import React, { useEffect } from "react";

export const AdComponent = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);
  return (
    <div>
        sdcas
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9315282637007538"
        data-ad-slot="7890123456"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};
