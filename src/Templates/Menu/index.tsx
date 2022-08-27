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
      {DB.map((item) => (
        <p
          className="menu__item"
          onClick={() => handleClickComponent(item.title)}
        >
          {item.title}
        </p>
      ))}
    </div>
  );
};
