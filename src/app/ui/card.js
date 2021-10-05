import React from "react";

export default function Card({
  source,
  author,
  title,
  children,
  link,
  icon = false,
}) {
  let styles = "mb-4";
  if (icon) {
    styles += " card-icon";
  } else {
    styles += " card-image";
  }

  return (
    <div className="card ">
      <img src={source} alt="img" className={styles} />
      <div className="mb-2">
        <div>{author}</div>
        <a href={link} className="card-title-link">
          <h4>{title}</h4>
        </a>
        <p>{children}</p>
      </div>
    </div>
  );
}
