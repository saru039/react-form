import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") setName(value);
    if (id === "email") setEmail(value);
    if (id === "phone") setPhone(value);
    if (id === "message") setMessage(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted({
      name,
      email,
      phone,
      message,
    });

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row form">
          <div className="col-lg-6 form-container">
          <h1>Contact Form</h1>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-6 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12 mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-lg-12 mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                  value={message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>

            {/* Display success message if submitted */}
            {submitted && (
              <div className="mt-3 alert alert-success">
                Form Submitted Successfully!
              </div>
            )}

            {/* Display submitted data */}
            {submitted && (
              <div className="mt-4">
                <h4>Submitted Information:</h4>
                <p>
                  <strong>Name:</strong> {submitted.name}
                </p>
                <p>
                  <strong>Email:</strong> {submitted.email}
                </p>
                <p>
                  <strong>Phone:</strong> {submitted.phone}
                </p>
                <p>
                  <strong>Message:</strong> {submitted.message}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
