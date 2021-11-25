/** @format */

import React, { useEffect, useState } from "react";
import { Sectors } from "../../components/Sectors";
import "./selectedsector.styles.scss";

const Selectedsector = () => {
  const [secletedItem, setsecletedItem] = useState("");
  const [secletedType, setsecletedType] = useState("");
  const [loaderState, setloaderState] = useState(true);

  const { sectorName, sectorId } = window.Qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });
  useEffect(() => {
    const selectedSector = Sectors.find((item) => {
      return item.name === sectorName;
    });
    setsecletedItem(selectedSector);
  }, [sectorId, sectorName]);

  useEffect(() => {
    const mapTypes = secletedItem?.types?.find((item) => {
      return item.itemName === sectorId;
    });

    setsecletedType(mapTypes);
    setTimeout(() => {
      setloaderState(false);
    }, 500);
  }, [secletedItem]);

  return (
    <div className="sel-sector-container">
      {loaderState ? (
        <div className="sel-loading-container">
          <div className="sel-spinner"></div>
        </div>
      ) : (
        <div className="sel-sector-contents">
          <div
            className="sel-header"
            style={{
              background: `url(${secletedType?.mainBg}) no-repeat center`,
            }}>
            {/* <div className="sel-header-img">
            <img src="" alt="" />
          </div> */}
            <div className="sel-header-details">
              <h2 className="sel-h2">{secletedType?.itemName}</h2>
              <p>{secletedType?.allDetails}</p>
              <div className="sel-sector-service">
                {/* {secletedType?.serviceList?.map((list) => (
                <div className="sel-s-box" key={list.listId}>
                  <img src={list.listImage} alt="err" />
                  <span className="list-span">{list.listtext}</span>
                </div>
              ))} */}
              </div>
            </div>
          </div>
          <div className="sel-body">
            <div className="sel-body-details">
              <h2 className="sel-h2">Application</h2>
              <span>{secletedType?.application}</span>
            </div>
            <div className="sel-sector-img">
              <img src={secletedType?.imgUrl} alt="err" />
            </div>
          </div>
          <div className="sel-footer">
            <h2 className="sel-h2">Benefits</h2>
            <div className="sel-f-items">
              <div className="sel-f-item-align">
                {secletedItem?.details?.map(
                  (data, index) =>
                    index < 3 && (
                      <div className="sel-f-item" key={index}>
                        <p>{data.desp} </p>{" "}
                      </div>
                    )
                )}
              </div>
              <div className="sel-f-item-align">
                {secletedItem?.details?.map(
                  (data, index) =>
                    index >= 3 &&
                    index <= 6 && (
                      <div className="sel-f-item" key={index}>
                        <p>{data.desp} </p>{" "}
                      </div>
                    )
                )}
              </div>{" "}
              <div className="sel-f-item-align">
                {secletedItem?.details?.map(
                  (data, index) =>
                    index >= 6 &&
                    index <= 9 && (
                      <div className="sel-f-item" key={index}>
                        <p>{data.desp} </p>{" "}
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Selectedsector;
