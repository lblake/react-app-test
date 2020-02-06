import React from 'react'
import { TraderElement, Loading } from '../../'
import { ITrader } from 'src/api/traders'

interface Props {
  traders: ITrader[]
}

export const TradersList: React.FC<Props> = ({ traders }) => {
  const renderList = () =>
    traders.map((trader: ITrader) => <TraderElement key={trader.id} trader={trader} />)

  return traders.length === 0 ? <Loading /> : <>{renderList()}</>
}
