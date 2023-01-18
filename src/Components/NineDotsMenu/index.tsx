import React, { CSSProperties, useState } from "react";
import { IonIcon } from "react-ion-icon";
import clsx from "classnames";

import "./style.scss";

export const NineDotsMenu = (): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleActive = (status: boolean) => setIsActive(status);

  return (
    <div className="nine-dots-menu">
      <div className="main">
        <div
          className={clsx("navigation", isActive && "active")}
          onClick={() => handleToggleActive(true)}
        >
          <div style={{ "--i": 0, "--x": -1, "--y": 0 } as CSSProperties}>
            <IonIcon name="camera-outline" />
          </div>
          <div style={{ "--i": 1, "--x": 1, "--y": 0 } as CSSProperties}>
            <IonIcon name="bonfire-outline" />
          </div>
          <div style={{ "--i": 2, "--x": 0, "--y": -1 } as CSSProperties}>
            <IonIcon name="chatbubble-outline" />
          </div>
          <div style={{ "--i": 3, "--x": 0, "--y": 1 } as CSSProperties}>
            <IonIcon name="alarm-outline" />
          </div>
          <div style={{ "--i": 4, "--x": -1, "--y": 1 } as CSSProperties}>
            <IonIcon name="game-controller-outline" />
          </div>
          <div style={{ "--i": 5, "--x": -1, "--y": -1 } as CSSProperties}>
            <IonIcon name="moon-outline" />
          </div>
          <div style={{ "--i": 6, "--x": 1, "--y": -1 } as CSSProperties}>
            <IonIcon name="water-outline" />
          </div>
          <div style={{ "--i": 7, "--x": 1, "--y": 1 } as CSSProperties}>
            <IonIcon name="time-outline" />
          </div>
        </div>

        <div className="close" onClick={() => handleToggleActive(false)}>
          <IonIcon name="close-outline" />
        </div>
      </div>
    </div>
  );
};
