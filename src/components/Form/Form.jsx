const Form = ({ handleSubmit, inputValue, handleChange }) => {
  return (
    <form className="form" action="" onSubmit={handleSubmit}>
      <button className="submitButton" type="submit">
        Search
      </button>

      <input
        className="input"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
};

export { Form };
