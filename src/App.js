import { IoShieldOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import "./App.css";

function App() {
  return (
    <>
      <div className="Box">
        <div className="left-box">
          <div className="app">
            <div className="circle">
              <p style={{ alignItems: "center" }}>6 days left</p>
            </div>
            <div className="inner-box">
              <h1 style={{ color: "#cbbfb5ff" }}>
                <span style={{ color: "#4a2b5d" }}>Free</span> Case Review
              </h1>
              <div className="icons">
                <div className="icon-list">
                  <IoShieldOutline /> <span>100% confidential</span>
                </div>

                <div className="icon-list">
                  <FaRegCheckCircle /> <span>No Win, NO Fee</span>
                </div>

                <div className="icon-list">
                  <GoLaw /> <span>Free Case Evaluation</span>
                </div>
              </div>
            </div>

            <span
              style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "10px",
                top: "0px",
                right: "0px",
                position: "absolute",
              }}
            >
              we are here
              <br /> to help!
            </span>
          </div>

          <div className="box-bottom">
            <h3>
              Have you or a loved one been affected by <span>Mesothelioma</span>
              ?
            </h3>
            <p>
              As a woman, you’ve carried the weight of care, love, and
              resilience. Now it’s time someone stands with you.
            </p>
            <ul>
              <li>Secondary Asbestos exposure is common</li>
              <li>Misdiagnosis delays are more frequent in women</li>
              <li>Women have won significant legal settlements</li>
            </ul>
          </div>
        </div>

        <div className="right-box">
          <h2>Claim Form</h2>
          <form>
            <div className="form-grid">
              <input type="text" placeholder="First Name *" required />
              <input type="text" placeholder="Last Name *" required />
              <input type="text" placeholder="Phone Number *" required />
              <input type="email" placeholder="Email ID *" required />
              <input type="date" required />
              <input type="text" placeholder="Job Title *" required />
              <input type="date" required />
              <select required>
                <option value="">Type of Diagnosis *</option>
                <option value="Mesothelioma">Mesothelioma</option>
                <option value="Asbestosis">Asbestosis</option>
              </select>
            </div>

            <textarea placeholder="Tell us your story (optional)"></textarea>

            <div className="checkboxes">
              <label>
                <input type="checkbox" required /> I agree to the{" "}
                <a href="#">privacy policy</a> and <a href="#">disclaimer</a>...
              </label>
              <label>
                <input type="checkbox" required /> Please check this box to
                verify you're a person.
              </label>
            </div>

            <button type="submit" className="submit-btn">
              Start your claim now
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
