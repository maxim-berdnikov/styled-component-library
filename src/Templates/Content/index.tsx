import React from "react";
import { DB } from "DB";
import './style.scss'

export const Content = ({
  currentComponet,
}: {
  currentComponet: string;
}): JSX.Element => {
  const component = DB.find(
    (item) => item.title === currentComponet
  )?.component;
  return (
    <div className="content">
      {component ? component : <p>Выберите компонент</p>}
    </div>
  );
};
