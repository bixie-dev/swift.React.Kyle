import React, { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { PageProps } from "../../globalTypes";
type PayInvoice = {
  type: 'payInvoice'
  invoice: string
  amount: number
}
type PayAddress = {
  type: 'payAddress'
  address: string
}
export const Scan: React.FC<PageProps> = (): JSX.Element => {

  return (
    <div className="Scan">
      asd
    </div>
  )
}