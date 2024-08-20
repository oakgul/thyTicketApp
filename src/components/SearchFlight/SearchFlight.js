import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import "./SearchFlight.css";

function SearchFlight() {
  const [count, setCount] = useState(1);
  const [counterArea, setCounterArea] = useState(false);
  const [originAirport, setOriginAirport] = useState();
  const [destinationAirport, setDestinationAirport] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const decrease = () => {
    if (count !== 1) setCount((prevCount) => prevCount - 1);
    
  };

  const increase = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleCounterArea = () => {
    setCounterArea(!counterArea);
  };

  const openModal = () => {
    setCounterArea(false);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count])

  const checkFlightDestination = () => {
    setCounterArea(false);
    fetch("/flightData.json")
      .then((response) => response.json())
      .then((data) => {
        const isExistOriginAirport = data.flights.find(
          (flight) => flight.originAirport.city.name === originAirport
        );
        const isExistDestinationAirport = data.flights.find(
          (flight) => flight.destinationAirport.city.name === destinationAirport
        );

        if (
          isExistOriginAirport !== undefined &&
          isExistDestinationAirport !== undefined
        ) {
          navigate("/flight-list");
        } else {
          openModal();
        }
      })
      .catch((error) => {});
  };

  const handleBoarding = (value) => {
    setCounterArea(false);
    setOriginAirport(value.target.value);
  };

  const handleDestination = (value) => {
    setCounterArea(false);
    setDestinationAirport(value.target.value);
  };

  return (
    <div>
      <div className="header-text">
        <span className="hello-text">Merhaba</span>
        <span className="subtext">Nereyi keşfetmek istersiniz?</span>
      </div>

      <div className="search-container">
        <div className="inputs-area">
          <div className="city-search-inputs">
            <i class="fa-solid fa-plane-departure"></i>
            <input
              className="destination-inputs"
              type="text"
              name="search"
              placeholder="Nereden"
              onChange={(value) => handleBoarding(value)}
            />
          </div>

          <div className="city-search-inputs">
            <i class="fa-solid fa-plane-arrival"></i>
            <input
              className="destination-inputs"
              type="text"
              name="search"
              placeholder="Nereye"
              onChange={(value) => handleDestination(value)}
            />
          </div>

          <div className="date-picker">
            <span>Tarih</span>
            <i
              class="fa-regular fa-calendar-days"
              style={{ color: "#797272" }}
            ></i>
          </div>

          <div className="customer-count">
            <div
              onClick={() => handleCounterArea()}
              className="person-counter-area"
            >
              <span className="person-count">{count}</span>
              {count < 2 && <i class="fa-solid fa-person"></i>}
              {count > 1 && <i class="fa-solid fa-people-group"></i>}
            </div>

            {counterArea && (
              <div className="person-counter">
                <div className="arrow"></div>
                <span className="counter-header">Kabin ve Yolcu Seçimi</span>
                <div className="radio-group">
                  <label>
                    <input type="radio" name="class" value="economy" />
                    Economy Class
                  </label>
                  <label>
                    <input type="radio" name="class" value="business" />
                    Business Class
                  </label>
                </div>

                <div className="count-buttons-area">
                  <span>Yolcu</span>
                  <div className="counter">
                    <button
                      className="counter-buttons"
                      onClick={() => decrease()}
                    >
                      -
                    </button>
                    <span className="count-number">{count}</span>
                    <button
                      className="counter-buttons"
                      onClick={() => increase()}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            className="arrow-button"
            onClick={() => checkFlightDestination()}
          >
            <i class="fa-solid fa-arrow-right" style={{ color: "#ffffff" }}></i>
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default SearchFlight;
