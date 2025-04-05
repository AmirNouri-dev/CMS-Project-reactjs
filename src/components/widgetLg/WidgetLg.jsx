import React from "react";
import "./WidgetLg.css";
import { transActions } from "../../datas";
export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLg-button " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <div className="widgetLg-title">Latest TransActions</div>
      <table className="widgetLg-table">
        <tr className="widgetLg-tr">
          <th className="widgetLg-th">Customer</th>
          <th className="widgetLg-th">Date</th>
          <th className="widgetLg-th">Amount</th>
          <th className="widgetLg-th">Status</th>
        </tr>

        {transActions.map((transAction) => (
          <tr key={transAction.id} className="widgetLg-tr">
            <td className="widgetLg-user">
              <img src={transAction.img} alt="" className="widgetLg-user_img" />
              <span className="widgetLg-user_name">{transAction.customer}</span>
            </td>
            <td className="widgetLg-date">{transAction.date}</td>
            <td className="widgetLg-amount">${transAction.amount}</td>
            <td className="widgetLg-status">
              <Button type={transAction.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
