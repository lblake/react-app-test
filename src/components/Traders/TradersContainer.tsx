import React, { useEffect } from "react";
import { connect } from "react-redux";

import { ITradersState } from "../../store/ducks/traders/types";
import { fetchTraders } from "../../store/ducks/traders/actions";

import { IStoreState } from "../../store/rootReducer";

 import { TradersList } from "./TradersList/TradersList";

interface Props {
  traders: ITradersState;
  fetchTraders: () => {};
}

const Traders: React.FC<Props> = ({ traders, fetchTraders }) => {
  useEffect(() => {
    fetchTraders();

    return () => {};
  }, []);

  return <TradersList traders={traders.data} />;
};

const mapStateToProps = ({
  traders
}: IStoreState): { traders: ITradersState } => {
  return { traders };
};

const mapDispatchToProps = {
  fetchTraders
};

export const TradersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Traders);
