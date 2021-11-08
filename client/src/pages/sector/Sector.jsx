/** @format */

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Sectors } from "../../components/Sectors";
import "./sector.styles.scss";

const Sector = (props) => {
  const [secletedItem, setsecletedItem] = useState("");
  const [secletedType, setsecletedType] = useState("");

  const id = props.match.params.id;

  useEffect(() => {
    console.log(typeof id);
    const selectedSector = Sectors.find((item) => {
      return item.id === parseInt(id);
    });

    setsecletedItem(selectedSector);
  }, [id]);

  const query = window.Qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });
  console.log(query);

  useEffect(() => {
    const mapTypes = secletedItem?.types?.find((item) => {
      return item.itemName === query.type;
    });

    setsecletedType(mapTypes);
  }, [secletedItem, query.type]);

  return (
    <div className="sector-container">
      <h2>{secletedItem.name}</h2>
      <div className="sector-contents">
        <div className="sector-sidebar">
          {secletedItem?.types?.map((data, index) => (
            <div
              className={
                data.itemName === query.type
                  ? "sector-sidebar-box sector-sidebar-box-bg"
                  : "sector-sidebar-box"
              }
              key={index}>
              <Link to={`/sector/${id}?type=${data.itemName}`}>
                <span>{data.itemName}</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="sector-items">
          <div className="sector-img">
            <img src={secletedType?.imgUrl} alt="sector img" />
          </div>
          <div className="sector-item-details">
            <h3>{secletedType?.itemName}</h3>
            <p>{secletedType?.itemDetails}</p>
          </div>
          <div className="sector-details">
            <h3>Benifits</h3>
            {secletedItem?.details?.map((data, index) => (
              <p key={index}>{data.desp}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sector;
