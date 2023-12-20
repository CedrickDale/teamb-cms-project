import { useState } from 'react';

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', inputs);
    // You can perform further actions, such as sending the data to a server.
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email Address
        <input
          type="text"
          name="email"
          value={inputs.email || ''}
          onChange={handleChange}
        />
      </label>{' '}
      <br />
      <label>
        Password
        <input
          type="password"
          name="password"
          value={inputs.password || ''}
          onChange={handleChange}
        />
      </label>{' '}
      <br />
      <input type="submit" value="Sign In" />
    </form>
  );
}

export default MyForm;
