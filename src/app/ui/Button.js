import React from "react";
export default function Button({
  type = "submit",
  children,
  styles,
  ...props
}) {
  let style = styles + " btn";

  if (type === "submit") {
    style += " btn-primary ";
  } else {
    style += " btn-" + type;
  }
  return (
    <button type={type} className={style}>
      {children}
    </button>
  );
}
