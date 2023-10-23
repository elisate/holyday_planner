import React from 'react'
import './Contact.css';
export default function Contact() {
  return (
    <div className="CONTACT">
      <section className="contact_back">
        <div className="content">
          <div className="contact1">
            <h1 className="conte">Contact Us</h1>
          </div>
        </div>
      </section>
      <div className="contact2_holder">
        <div className="contact2">
          <div className="contact2a">
            <div>
              <input
                type="text"
                placeholder="Full Name*"
                className="contact2_text1"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Email*"
                className="contact2_text1"
              />
            </div>
          </div>
          <div className="contact2b">
            <div>
              <input
                type="text"
                placeholder="Phone*"
                className="contact2_text1"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Services*"
                className="contact2_text1"
              />
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Message"
              className="contact2_text2"
            />
          </div>
          <div>
            <button title="submit" className="BUTTO">
              SUBMIT
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="CONTACT_container">
          <div className="TB3_contact">
            <div className="contact_text1">
              <div className="tour-text1">
                <b>WHY BOOK WITH US?</b>
              </div>
              <div className="tour-text2">
                <p>Best Price Guarantee</p>
                <p>Customer care available 24/7</p>
                <p>Free Travel Insureance</p>
                <p>Hand-picked Tours & Activities</p>
              </div>
            </div>
          </div>

          <div className="endcontact">
            <div className="end1">
              <b>GET A QUESTION?</b>
            </div>
            <div className="end2">
              <p>Do not hesitage to give us a call. We are an</p>
              <p>expert team and we are happy to talk to</p>
              <p>you.</p>
            </div>
            <div>
              <p>holidayplanners@gmail.com</p>
            </div>
            <div>
              <p>+123 456 7890</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_textend">
        <div className="address1_contact">
          <div className="address_text1">
            <b>INDIA OFFICE</b>
          </div>
          <div>
            <p>
              <button type="submit" className="contact_butto"></button>54,
              Beside Shoping Mall, Gujarat.
            </p>
          </div>
          <div>
            <p>
              <button type="submit" className="contact_butto"></button>+123 456
              7890
            </p>
          </div>
          <div>
            <p>
              <button type="submit" className="contact_butto"></button>
              holidayplanners@gmail.com
            </p>
          </div>
        </div>

        {/* <div className="conmtact_elsa">
          <div> <div></div>888 S Greenville, TX 75081, United States.


          </div>

        </div> */}
      </div>
      <section className='contact_map'>
        <div className='contact_map'>
          <iframe
            title="Google Map"
            width="700"
            height="460"
            frameBorder="0"
            style={{ border: "0" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31343.5028990665!2d-122.4194153508046!3d37.77492951054691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e84a431d9d7%3A0x50b9d02be4a440ef!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1611602582113!5m2!1sen!2sus"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
