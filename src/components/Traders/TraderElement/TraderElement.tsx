import React from 'react'
import { ITrader } from 'src/api/traders'

interface Props {
  trader: ITrader
}

export const TraderElement: React.FC<Props> = ({ trader }) => {
  return <div>{trader.name}</div>
}
