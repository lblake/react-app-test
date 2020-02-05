import React from "react";
import { ITrader } from "../../../store/ducks/traders/types";

interface Props {
  trader: ITrader;
  key: number;
}

export const TraderElement: React.FC<Props> = ({ trader }) => {
  return <div>{trader.name}</div>;
};
