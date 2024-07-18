import { useState, useEffect } from "react";
import axios from "axios";
import ModalContent from "./ModalContent";

const Main = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/region/europe"
        );
        const sortedData = response.data.sort((a, b) => {
          if (a.name.common < b.name.common) {
            return -1;
          } else if (a.name.common > b.name.common) {
            return 1;
          } else {
            return 0;
          }
        });
        console.log(sortedData);
        setCountriesData(sortedData);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>IsLoading</p>
  ) : (
    <>
      <div className="wrapper">
        {countriesData.map((country) => {
          return (
            <div key={country.cca3} className="country">
              <div>
                <span>{country.name.common}</span>
              </div>
              <img
                src={country.flags.svg}
                alt="image flags"
                onClick={() => {
                  setSelectedCountry(country);
                  setVisible(true);
                }}
              />
            </div>
          );
        })}
      </div>
      {visible && (
        <ModalContent
          visible={visible}
          setVisible={setVisible}
          country={selectedCountry}
        />
      )}
    </>
  );
};

export default Main;
