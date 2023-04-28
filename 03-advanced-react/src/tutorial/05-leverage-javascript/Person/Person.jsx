import React from "react";
import asste from "../../../assets/default-avatar.svg";
export default function Person({ name, nickName, images }) {
  const img = images?.[0].small.url || asste;
  return (
    <div style={{ marginTop: "3 0px" }}>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h4>{name}</h4>
      <h6>NickName : {nickName || "---"}</h6>
    </div>
  );
}
