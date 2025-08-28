import React, { Fragment } from "react";
import "./registor.scss";
import { Button } from "../button/Button";
import { Input } from "../input/Input";

export const Registor = () => {
  return (
    <Fragment>
      <div className="modalForm">
        <Input type="email" label="Email" />

        <Input type="email" label="Email" />
      </div>
      <div className="modalBtn">
        <Button text="Зарегестрироваться" />
      </div>
    </Fragment>
  );
};
