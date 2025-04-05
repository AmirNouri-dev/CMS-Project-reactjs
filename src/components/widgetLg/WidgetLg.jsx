import React from "react";
import "./WidgetLg.css";
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
        {/* approvedbtn */}
        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img
              src="./../../public/images/avatar.png"
              alt=""
              className="widgetLg-user_img"
            />
            <span className="widgetLg-user_name">Omid Rohani</span>
          </td>
          <td className="widgetLg-date">20 March 2025</td>
          <td className="widgetLg-amount">$199.99</td>
          <td className="widgetLg-status">
            <Button type="Approved" />
          </td>
        </tr>
        {/* declinebtn */}
        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img
              src="./../../public/images/avatar.png"
              alt=""
              className="widgetLg-user_img"
            />
            <span className="widgetLg-user_name">Omid Rohani</span>
          </td>
          <td className="widgetLg-date">20 March 2025</td>
          <td className="widgetLg-amount">$199.99</td>
          <td className="widgetLg-status">
            <Button type="Declined" />
          </td>
        </tr>
        {/* pendingbtn */}
        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img
              src="./../../public/images/avatar.png"
              alt=""
              className="widgetLg-user_img"
            />
            <span className="widgetLg-user_name">Omid Rohani</span>
          </td>
          <td className="widgetLg-date">20 March 2025</td>
          <td className="widgetLg-amount">$199.99</td>
          <td className="widgetLg-status">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
}
