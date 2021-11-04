import React, { Component } from "react";
import { Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <section id="contact">
        <div className="row">
          <Slide left duration={1000}>
            <div className="six columns">
            <img
                src="images/tk.gif"
                alt="Nordic Giant Profile Pic"
              />
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="six columns footer-widgets">
              <div className="widget widget_contact">
              <img
                src="images/bye.gif"
                alt="Nordic Giant Profile Pic"
              />
              </div>

            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
