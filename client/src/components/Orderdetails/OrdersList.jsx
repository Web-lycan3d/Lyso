/** @format */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../api/Api";
import "./orderdetails.styles.scss";

const OrdersList = ({ item, itemS }) => {
  const [itemStatus, setItemStatus] = useState("");
  const [err, seterr] = useState("");

  useEffect(() => {
    seterr(itemS);
  }, []);

  const handleSubmit = async (itemID) => {
    console.log(itemStatus);
    console.log(itemID);
    const itemdata = { itemID, itemStatus };
    if (!itemStatus) {
      seterr("Change to update");
    } else {
      seterr("updating");
      const { data } = await Api.patch("/user/update/data", itemdata);

      seterr(data.status);
      if (data.message) {
        seterr(data.message);
      }
    }
  };
  return (
    <div className="orderdetails-box">
      <div className="orderdetails-contents">
        <div className="orderdetails-userdetails">
          <h2>{item.name}</h2>{" "}
          <p>
            id : <b> {item.item_Id}</b>
          </p>
          <p>
            Email : <b>{item.email}</b>{" "}
          </p>
          <p>
            Phone no : <b>{item.phone}</b>{" "}
          </p>
          <p>
            Address : <b> {item.address}</b>
          </p>{" "}
          {item.Instruction && (
            <p>
              Instruction : <b> {item.Instruction}</b>
            </p>
          )}
          {item.projectName && (
            <p>
              ProjectName : <b> {item.projectName}</b>
            </p>
          )}
          <p>
            src :{" "}
            <b>
              <Link
                to={{
                  pathname: item.Objectdetails.Location,
                }}
                target="_blank">
                {item.Objectdetails.Location}
              </Link>
            </b>
          </p>
        </div>
        <div className="orderdetails-select">
          <form
            className="admin-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(item.item_Id);
            }}>
            <select
              required
              name="status"
              onChange={(e) => setItemStatus(e.target.value)}>
              <option value="pending" selected={err === "pending" && true}>
                Pending
              </option>
              <option value="done" selected={err === "done" && true}>
                Done
              </option>
            </select>
            <span> status : {err}</span>
            <button className="custom-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrdersList;
