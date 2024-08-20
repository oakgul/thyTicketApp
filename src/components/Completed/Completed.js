import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Completed.css";

function Completed() {
  const [completedStatus, setCompletedStatus] = useState(true);

  const navigate = useNavigate();

  const backToStartPage = () => {
    navigate("/");
  };

  useEffect(() => {
    if (localStorage.getItem("status") === "AVAILABLE") {
      setCompletedStatus(true);
    } else {
      setCompletedStatus(false);
    }
  }, []);

  return (
    <div className="completed-container">
      <div className="result-text">
        {!completedStatus && (
          <>
            <i
              class="fa-solid fa-circle-xmark fa-2xl"
              style={{ color: "#ff0000" }}
            ></i>
            <span className="cabin-text">Kabin seçiminiz tamamlanamadı.</span>
          </>
        )}
        {completedStatus && (
          <>
            <i
              class="fa-solid fa-circle-check fa-2xl"
              style={{ color: "#3db33f" }}
            ></i>
            <span className="cabin-text">Kabin seçiminiz tamamlandı.</span>
          </>
        )}
      </div>
      <div className="payment-text">
        {completedStatus && (
          <>
            <span className="total-amount-text">Toplam tutar</span>
            <span className="total-amount-currency">
              TRY {localStorage.getItem("amount")}
            </span>
          </>
        )}
        {!completedStatus && (
          <div className="back-button">
            <button
              className="back-to-start-button"
              onClick={() => backToStartPage()}
            >
              Başa Dön
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Completed;
