const CountriesData = ({ countriesData, setVisible, visible }) => {
  return (
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
                setVisible(!visible);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CountriesData;
