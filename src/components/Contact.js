import React from "react";
import { DiYahoo, MdEmail, MdCall } from "react-icons/all";
import Draggable from "react-draggable";
import "./style.css";
const Contact = () => {
  return (
    <div className="toast-body">
      <div className="text-center">
        <h1>Contact Us</h1>
      </div>
      <div className="row">
        <Draggable>
          <div className="col-sm-12 col-md-6 col-lg-6 card m-auto " id="drag">
            <p className="no">
              With this deal access strategy, you can afford to spend more time
              building your brand among LPs (as opposed to spending all your
              time building your brand among founders). There are multiple
              sources of investment data such as CrunchBase or CB Insights, use
              that to continuously post new research on VC funds performance, or
              case studies on funds, or new investment trends. Then meet new LPs
              every week, and use your research as an entry point, i.e., to
              share with them your findings and initiate the relationship. At
              the end of the day, not every meeting with an LP should be for
              fundraising, connecting with institutional LPs takes years of
              relationship building. In summary, I think first time VC fund
              managers with small funds need to think more late stage via other
              VC firms (as follow investors) and focus on LPs relationships, as
              opposed to, thinking seed stage and focusing on founders
              relationships.
            </p>
          </div>
        </Draggable>
        <Draggable>
          <div className="col-lg-6 col-md-6 col-sm-12 card">
            <h5>
              <MdEmail className="mx-3" />
              ureportt@gmail.com
            </h5>
            <h5>
              <MdCall className="mx-3" />
              +233505 419 444/ +233553 826 524
            </h5>
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default Contact;
