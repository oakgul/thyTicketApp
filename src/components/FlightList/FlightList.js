import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./flightList.css";

function FlightListPage() {
  const [isSelectFly, setIsSelectFly] = useState(true);
  const [showPromotionText, setShowPromotionText] = useState(false);
  const [selectedClass, setSelectedClass] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  const navigate = useNavigate();

  const economyAreaClick = (index) => {
    setSelectedClass("ECONOMY");
    setActiveIndex(index);
  };

  const businessAreaClick = (index) => {
    setSelectedClass("BUSINESS");
    setActiveIndex(index);
  };

  const handleShowPromotion = () => {
    setShowPromotionText(!showPromotionText);
  };

  const handleSelectTicket = (status, amount, index) => {
    localStorage.setItem("status", status);
    localStorage.setItem("amount", amount);
    navigate("/completed");
  };

  const flightsList = [
    {
      originAirport: {
        name: "Istanbul Airport",
        code: "IST",
        city: {
          code: "IST",
          name: "Istanbul",
        },
        country: {
          code: "TR",
          name: "Turkey",
        },
      },
      destinationAirport: {
        name: "Antalya Airport",
        code: "AYT",
        city: {
          code: "AYT",
          name: "Antalya",
        },
        country: {
          code: "TR",
          name: "Turkey",
        },
      },
      arrivalDateTimeDisplay: "01:15",
      departureDateTimeDisplay: "02:45",
      flightDuration: "1s 30d",
      fareCategories: {
        BUSINESS: {
          subcategories: [
            {
              brandCode: "ecoFly",
              price: {
                amount: 400.0,
                currency: "TRY",
              },
              order: 1,
              status: "AVAILABLE",
              rights: ["20 kg Bagaj", "Ucresiz Yemek Secimi"],
            },
            {
              brandCode: "extraFly",
              price: {
                amount: 500.0,
                currency: "TRY",
              },
              order: 2,
              status: "AVAILABLE",
              rights: [
                "30 kg Bagaj",
                "Standart Koltuk Secimi",
                "Ucresiz Yemek Secimi",
              ],
            },
            {
              brandCode: "primeFly",
              price: {
                amount: 800.99,
                currency: "TRY",
              },
              order: 3,
              status: "AVAILABLE",
              rights: [
                "50 kg Bagaj",
                "Standart Koltuk Secimi",
                "Ucretsiz Degisiklik",
                "Ucresiz Yemek Secimi",
              ],
            },
          ],
        },
        ECONOMY: {
          subcategories: [
            {
              brandCode: "ecoFly",
              price: {
                amount: 242.0,
                currency: "TRY",
              },
              order: 1,
              status: "AVAILABLE",
              rights: ["15 kg Bagaj"],
            },
            {
              brandCode: "extraFly",
              price: {
                amount: 290.0,
                currency: "TRY",
              },
              order: 2,
              status: "AVAILABLE",
              rights: ["20 kg Bagaj", "Standart Koltuk Secimi"],
            },
            {
              brandCode: "primeFly",
              price: {
                amount: 351.99,
                currency: "TRY",
              },
              order: 3,
              status: "AVAILABLE",
              rights: [
                "25 kg Bagaj",
                "Standart Koltuk Secimi",
                "Ucretsiz Degisiklik",
              ],
            },
          ],
        },
      },
    },
    {
      originAirport: {
        name: "Istanbul Airport",
        code: "IST",
        city: {
          code: "IST",
          name: "Istanbul",
        },
        country: {
          code: "TR",
          name: "Turkey",
        },
      },
      destinationAirport: {
        name: "Antalya Airport",
        code: "AYT",
        city: {
          code: "AYT",
          name: "Antalya",
        },
        country: {
          code: "TR",
          name: "Turkey",
        },
      },
      arrivalDateTimeDisplay: "09:50",
      departureDateTimeDisplay: "11:20",
      flightDuration: "1s 30d",
      fareCategories: {
        BUSINESS: {
          subcategories: [
            {
              brandCode: "ecoFly",
              price: {
                amount: 676.0,
                currency: "TRY",
              },
              order: 1,
              status: "ERROR",
              rights: ["20 kg Bagaj", "Ucresiz Yemek Secimi"],
            },
            {
              brandCode: "extraFly",
              price: {
                amount: 800.0,
                currency: "TRY",
              },
              order: 2,
              status: "AVAILABLE",
              rights: [
                "30 kg Bagaj",
                "Standart Koltuk Secimi",
                "Ucresiz Yemek Secimi",
              ],
            },
            {
              brandCode: "primeFly",
              price: {
                amount: 1200.99,
                currency: "TRY",
              },
              order: 3,
              status: "AVAILABLE",
              rights: [
                "50 kg Bagaj",
                "Standart Koltuk Secimi",
                "Ucretsiz Degisiklik",
                "Ucresiz Yemek Secimi",
              ],
            },
          ],
        },
        ECONOMY: {
          subcategories: [
            {
              brandCode: "ecoFly",
              price: {
                amount: 250.0,
                currency: "TRY",
              },
              order: 1,
              status: "AVAILABLE",
              rights: ["15 kg Bagaj"],
            },
            {
              brandCode: "extraFly",
              price: {
                amount: 380.0,
                currency: "TRY",
              },
              order: 2,
              status: "AVAILABLE",
              rights: ["20 kg Bagaj", "Standart Koltuk Secimi"],
            },
            {
              brandCode: "primeFly",
              price: {
                amount: 470.99,
                currency: "TRY",
              },
              order: 3,
              status: "ERROR",
              rights: [
                "25 kg Bagaj",
                "Standart Koltuk Secimi",
                "Ucretsiz Degisiklik",
              ],
            },
          ],
        },
      },
    },
    {
      originAirport: {
        name: "Istanbul Airport",
        code: "IST",
        city: {
          code: "IST",
          name: "Istanbul",
        },
        country: {
          code: "TR",
          name: "Turkey",
        },
      },
      destinationAirport: {
        name: "Antalya Airport",
        code: "AYT",
        city: {
          code: "AYT",
          name: "Antalya",
        },
        country: {
          code: "TR",
          name: "Turkey",
        },
      },
      arrivalDateTimeDisplay: "11:25",
      departureDateTimeDisplay: "12:55",
      flightDuration: "1s 30d",
      fareCategories: {
        BUSINESS: {
          subcategories: [
            {
              brandCode: "ecoFly",
              price: {
                amount: 692.0,
                currency: "TRY",
              },
              order: 1,
              status: "AVAILABLE",
              rights: ["20 kg Bagaj", "Ucresiz Yemek Secimi"],
            },
            {
              brandCode: "extraFly",
              price: {
                amount: 950.0,
                currency: "TRY",
              },
              order: 2,
              status: "AVAILABLE",
              rights: [
                "30 kg Bagaj",
                "Standart Koltuk Secimi",
                "Ucresiz Yemek Secimi",
              ],
            },
            {
              brandCode: "primeFly",
              price: {
                amount: 1400.0,
                currency: "TRY",
              },
              order: 3,
              status: "AVAILABLE",
              rights: [
                "50 kg Bagaj",
                "Standart Koltuk Secimi",
                "Ucretsiz Degisiklik",
                "Ucresiz Yemek Secimi",
              ],
            },
          ],
        },
        ECONOMY: {
          subcategories: [
            {
              brandCode: "ecoFly",
              price: {
                amount: 368.0,
                currency: "TRY",
              },
              order: 1,
              status: "AVAILABLE",
              rights: ["15 kg Bagaj"],
            },
            {
              brandCode: "extraFly",
              price: {
                amount: 425.0,
                currency: "TRY",
              },
              order: 2,
              status: "AVAILABLE",
              rights: ["20 kg Bagaj", "Standart Koltuk Secimi"],
            },
            {
              brandCode: "primeFly",
              price: {
                amount: 580.99,
                currency: "TRY",
              },
              order: 3,
              status: "ERROR",
              rights: [
                "25 kg Bagaj",
                "Standart Koltuk Secimi",
                "Ucretsiz Degisiklik",
              ],
            },
          ],
        },
      },
    },
    {
      originAirport: {
        name: "Istanbul Airport",
        code: "IST",
        city: {
          code: "IST",
          name: "Istanbul",
        },
        country: {
          code: "TR",
          name: "Turkey",
        },
      },
      destinationAirport: {
        name: "Antalya Airport",
        code: "AYT",
        city: {
          code: "AYT",
          name: "Antalya",
        },
        country: {
          code: "TR",
          name: "Turkey",
        },
      },
      arrivalDateTimeDisplay: "18:20",
      departureDateTimeDisplay: "19:50",
      flightDuration: "1s 30d",
      fareCategories: {
        BUSINESS: {
          subcategories: [
            {
              brandCode: "ecoFly",
              price: {
                amount: 670.0,
                currency: "TRY",
              },
              order: 1,
              status: "AVAILABLE",
              rights: ["20 kg Bagaj", "Ucresiz Yemek Secimi"],
            },
            {
              brandCode: "extraFly",
              price: {
                amount: 956.0,
                currency: "TRY",
              },
              order: 2,
              status: "AVAILABLE",
              rights: [
                "30 kg Bagaj",
                "Standart Koltuk Secimi",
                "Ucresiz Yemek Secimi",
              ],
            },
          ],
        },
        ECONOMY: {
          subcategories: [
            {
              brandCode: "ecoFly",
              price: {
                amount: 278.0,
                currency: "TRY",
              },
              order: 1,
              status: "AVAILABLE",
              rights: ["15 kg Bagaj"],
            },
            {
              brandCode: "extraFly",
              price: {
                amount: 420.0,
                currency: "TRY",
              },
              order: 2,
              status: "AVAILABLE",
              rights: ["20 kg Bagaj", "Standart Koltuk Secimi"],
            },
          ],
        },
      },
    },
  ];

  return (
    <div className="flight-list-container">
      <Header textColor="black" />
      <div className="flight-list-table-area">
        <div className="head-text">UÇUŞ</div>
        <div className="destination-text">İstanbul - Antalya, {localStorage.getItem("count")} Yolcu</div>
        <div className="promotion-code">
          <span style={{ fontWeight: "600" }}>Promosyon Kodu</span>
          <label class="switch">
            <input type="checkbox" onClick={() => handleShowPromotion()} />
            <span class="slider round"></span>
          </label>
        </div>

        {showPromotionText && (
          <div className="promotion-text">
            <span className="promotion-text-info">
              Promosyon Kodu seçeneği ile tüm Economy kabini Eco Fly
              paketlerinde %50 indirimle satın alabilirsiniz.
            </span>
            <span className="promotion-text-info">
              Promosyon Kodu seçeneği aktifken Eco Fly paketi haricinde seçim
              yapılamamaktadır.
            </span>
          </div>
        )}

        <div className="list-table">
          <div className="table-header">
            <span className="filter-text">Sıralama Kriteri</span>
            <div className="filter-buttons">Ekonomi Ücreti</div>
            <div className="filter-buttons">Kalkış Saati</div>
          </div>

          {/* BURASI */}

          {flightsList.map((flight, index) => (
            <div className="table-cards">
              <div className="table-cards-two">
                <div className="table-cards-three">
                  <div className="destination-info-card left-area">
                    <div className="destination-info-card-text">
                      <div className="time">
                        {flight.arrivalDateTimeDisplay}
                      </div>
                      <div className="dest-name">
                        {flight.originAirport.code}
                      </div>
                      <div className="city">
                        {flight.originAirport.city.name}
                      </div>
                    </div>

                    <div className="card-line"></div>

                    <div className="destination-info-card-text">
                      <div className="time">
                        {flight.departureDateTimeDisplay}
                      </div>
                      <div className="dest-name-two">
                        {flight.destinationAirport.code}
                      </div>
                      <div className="city">
                        {flight.destinationAirport.city.name}
                      </div>
                    </div>

                    <div className="destination-info-card-text destination-info-card-fly-time">
                      <div className="fly-time-text">Uçuş Süresi</div>
                      <div className="time">{flight.flightDuration}</div>
                    </div>
                  </div>

                  {/* İKİ kutu */}
                  <div style={{ display: "flex", gap: "30px" }}>
                    <div
                      className="destination-info-card right-side"
                      onClick={() => economyAreaClick(index)}
                    >
                      <div className="destination-info-card-text customer-payment-area">
                        <label className="economy-radio-button">
                          <input
                            type="radio"
                            name={index}
                            value="economy"
                            checked={
                              selectedClass === "ECONOMY" &&
                              activeIndex === index
                            }
                          />
                          <span className="economy-radio-button-text">
                            ECONOMY
                          </span>
                        </label>
                        <div className="customer-pay">
                          <div className="fly-time-text">Yolcu Başına</div>
                          <div className="time">
                            {
                              flight.fareCategories.ECONOMY.subcategories[0]
                                .price.amount
                            }
                          </div>
                        </div>
                        <div className="arrow-icon">
                          <i class="fa-solid fa-arrow-down-long fa-lg"></i>
                        </div>
                      </div>
                    </div>

                    <div
                      className="destination-info-card right-side"
                      onClick={() => businessAreaClick(index)}
                    >
                      <div className="destination-info-card-text customer-payment-area">
                        <label className="economy-radio-button">
                          <input
                            type="radio"
                            name={index}
                            value="business"
                            checked={
                              selectedClass === "BUSINESS" &&
                              activeIndex === index
                            }
                          />
                          <span className="economy-radio-button-text">
                            BUSINESS
                          </span>
                        </label>
                        <div className="customer-pay">
                          <div className="fly-time-text">Yolcu Başına</div>
                          <div className="time">
                            {
                              flight.fareCategories.BUSINESS.subcategories[0]
                                .price.amount
                            }
                          </div>
                        </div>
                        <div className="arrow-icon">
                          <i class="fa-solid fa-arrow-down-long fa-lg"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  {isSelectFly && selectedClass === "BUSINESS" && (
                    <div
                      className="table-cards fly-cards"
                      style={{
                        display: activeIndex === index ? "flex" : "none",
                      }}
                    >
                      {flight?.fareCategories?.BUSINESS?.subcategories?.map(
                        (subItem) => (
                          <div className="fly-card">
                            <div className="fly-header">
                              <span className="fly-text">
                                {subItem.brandCode}
                              </span>
                              <div className="currency-area">
                                <span className="fly-currency">
                                  {subItem.price.currency}
                                </span>
                                {showPromotionText &&
                                  subItem.brandCode === "ecoFly" && (
                                    <span className="money">
                                      {Number(subItem.price.amount) / 2}
                                    </span>
                                  )}
                                {showPromotionText &&
                                  subItem.brandCode !== "ecoFly" && (
                                    <span className="money">
                                      {subItem.price.amount}
                                    </span>
                                  )}
                                {!showPromotionText && (
                                  <span className="money">
                                    {subItem.price.amount}
                                  </span>
                                )}
                              </div>
                            </div>
                            {subItem.rights.map((packages) => (
                              <div className="packages">{packages}</div>
                            ))}

                            {showPromotionText && (
                              <button
                                className={
                                  subItem.brandCode === "ecoFly"
                                    ? "select-fly-button"
                                    : "select-fly-button-disabled"
                                }
                                onClick={() =>
                                  handleSelectTicket(
                                    subItem.status,
                                    subItem.price.amount / 2,
                                    index
                                  )
                                }
                              >
                                Uçuşu Seç
                              </button>
                            )}
                            {!showPromotionText && (
                              <button
                                className="select-fly-button"
                                onClick={() =>
                                  handleSelectTicket(
                                    subItem.status,
                                    subItem.price.amount,
                                    index
                                  )
                                }
                              >
                                Uçuşu Seç
                              </button>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  )}

                  {isSelectFly && selectedClass === "ECONOMY" && (
                    <div
                      className="table-cards fly-cards"
                      style={{
                        display: activeIndex === index ? "flex" : "none",
                      }}
                    >
                      {flight.fareCategories.ECONOMY.subcategories.map(
                        (subItem) => (
                          <div className="fly-card">
                            <div className="fly-header">
                              <span className="fly-text">
                                {subItem.brandCode}
                              </span>
                              <div className="currency-area">
                                <span className="fly-currency">
                                  {subItem.price.currency}
                                </span>
                                {showPromotionText &&
                                  subItem.brandCode === "ecoFly" && (
                                    <span className="money">
                                      {Number(subItem.price.amount) / 2}
                                    </span>
                                  )}
                                {showPromotionText &&
                                  subItem.brandCode !== "ecoFly" && (
                                    <span className="money">
                                      {subItem.price.amount}
                                    </span>
                                  )}
                                {!showPromotionText && (
                                  <span className="money">
                                    {subItem.price.amount}
                                  </span>
                                )}
                              </div>
                            </div>
                            {subItem.rights.map((packages) => (
                              <div className="packages">{packages}</div>
                            ))}
                            {showPromotionText && (
                              <button
                                className={
                                  subItem.brandCode === "ecoFly"
                                    ? "select-fly-button"
                                    : "select-fly-button-disabled"
                                }
                                onClick={() =>
                                  handleSelectTicket(
                                    subItem.status,
                                    subItem.price.amount / 2,
                                    index
                                  )
                                }
                              >
                                Uçuşu Seç
                              </button>
                            )}
                            {!showPromotionText && (
                              <button
                                className="select-fly-button"
                                onClick={() =>
                                  handleSelectTicket(
                                    subItem.status,
                                    subItem.price.amount,
                                    index
                                  )
                                }
                              >
                                Uçuşu Seç
                              </button>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlightListPage;
