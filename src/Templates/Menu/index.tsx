import React from "react";
import { DB } from "DB";
import "./style.scss";

export const Menu = ({
  handleClickComponent,
}: {
  handleClickComponent: (title: string) => void;
}): JSX.Element => {
  return (
    <div className="menu">
      {DB.sort((a, b) => a.title.localeCompare(b.title)).map((item) => (
        <p
          key={item.title}
          className="menu__item"
          onClick={() => handleClickComponent(item.title)}
        >
          {item.title}
        </p>
      ))}
    </div>
  );
};
