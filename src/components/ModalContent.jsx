const ModalContent = ({ setVisible, country }) => {
  return (
    <div
      className="modal-root"
      onClick={() => {
        setVisible(false);
      }}
    >
      <div
        className="modal"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button
          onClick={() => {
            setVisible(false);
          }}
        >
          X
        </button>
        <h2>Here is {country.name.common}'s information</h2>
        <p>
          <span>Languages(s)</span>:
          {Object.entries(country.languages).map((lang) => lang[1] + " ")}
        </p>
        <p>
          <span>Capital</span> : {country.capital[0]}
        </p>
        <p>
          <span>Population</span> : {country.population}
        </p>
      </div>
    </div>
  );
};

export default ModalContent;
