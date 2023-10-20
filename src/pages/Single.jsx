  import "./Single.css";
import { useParams } from "react-router-dom";
import Cardlist from "./Cardlist";
const Single = () => {
  const { Tid } = useParams();
  const tour = Cardlist.find((tour) => tour.id === Tid);
  const {
    id,
    image,
    country,
    desc1,
    desc2,
    status,
    duration1,
    duration2,
    groupsize1,
    groupsize2,
    amount,
  } = tour;
 
  return (
    <section className="im">
      <div>
        <img src={image} className="background-imagee" />
      </div>
      <div className="section-tourdetails">
        <div className="detail-information">
          <div className="ttable">
            <div className="div1" style={{ backgroundColor: "#C29D59" }}>
              Information
            </div>
            <div className="div1">Tour Plan</div>
            <div className="div1">Location</div>
            <div className="div1">Garelly</div>
            <div className="div1">Review</div>
          </div>
        </div>

        <div className="side-form1">
          <h6 className="title-2">BOOK THIS TOUR</h6>
          <div class="search-tour1">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="dudu"
            />
          </div>
          <div class="search-tour1">
            <input type="email" placeholder="Email" className="dudu" />
          </div>
          <div class="search-tour1">
            <input type="email" placeholder="Confirm Email" className="dudu" />
          </div>
          <div class="search-tour1">
            <input type="number" placeholder="phone" className="dudu" />
          </div>
          <div class="search-tour1">
            <input type="date" placeholder="mm/dd/yyy" className="dudi" />
          </div>

          <div class="search-tour1">
            <input
              type="number"
              placeholder="Number Of Tickets"
              className="dudu"
            />
          </div>

          <div class="search-tour1">
            <input type="text" placeholder="message" className="dusu" />
          </div>
          <div className="checo">
            <input type="checkbox" id="cultural" />
            Check Availability
          </div>
          <br />
          <div>
            <button className="sasa">BOOK NOW</button>
          </div>
        </div>

        <div className="tour-detailed">
        
          <div className="para23">
            <div className="circle">
              <p>$12000</p>
              <p>Per person</p>
            </div>
          </div>
          <div className="planned-trip">
            <p class="trip-duration">2 days</p>
            <p class="trip-duration">6 People</p>
            <p class="trip-participants">18 </p>
            <p class="trip-destination">Greece</p>
            <p class="trip-destination"> Discovery</p>
          </div>
          <div className="trip-description">
            <p>
              I should be incapable of drawing a single stroke at the present
              moment; and yet I feel that I never was a greater artist than now.
              When, while the lovely valley teems with vapour around me, and the
              meridian sun strikes the upper surface of the impenetrable foliage
              of my trees, and but a few stray gleams.
            </p>
          </div>
          <div>
            <table className="tableo">
              <thead>
                <tr>
                  <th>Greece</th>
                  <th>LoremIpsum</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Destination</td>
                  <td>Greece</td>
                </tr>
                <tr>
                  <td>Departure</td>
                  <td>LoremIpsum</td>
                </tr>
                <tr>
                  <td>Departure Time</td>
                  <td>9:00am</td>
                </tr>
                <tr>
                  <td>Return Time</td>
                  <td>10:12pm</td>
                </tr>
                <tr>
                  <td>Dress Code</td>
                  <td>Light Jacket</td>
                </tr>
                <tr>
                  <td>Price Included</td>
                  <td>Well-styled columns</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="tour-mission2">
            
            

           
          </div>
        </div>
      </div>
    </section>
  );
};
export default Single;
