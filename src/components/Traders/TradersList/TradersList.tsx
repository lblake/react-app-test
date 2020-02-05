import React from "react";
import { ITrader } from "../../../store/ducks/traders/types";
import { TraderElement, Loading } from "../../";

interface Props {
  traders: ITrader[];
}

export const TradersList: React.FC<Props> = ({ traders }) => {
  const renderList = () =>
    traders.map((trader: ITrader) => (
      <TraderElement key={trader.id} trader={trader} />
    ));

  return traders.length === 0 ? <Loading /> : <>{renderList()}</>;
};
