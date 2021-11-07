import React, { Component } from "react";
import Fade from "react-reveal";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">
                <li>
                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/partha-sai/">
                    <BsLinkedin />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://github.com/propardhu">
                    <BsGithub />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://wa.me/+918500541540?text=Hi">
                    <BsWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
