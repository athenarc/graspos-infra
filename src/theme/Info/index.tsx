import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Slider, { Settings } from 'react-slick';

function Info() {
  return (
    <section className="rds-resources">
      <div className="container" id="contact">
        <h2 className="section-title white">
          Want more information?
        </h2>
{/*        <h3 className="section-description white">
          The latest from your favorite community to support your Redis journey
        </h3>*/}

        <div className="btn-link-dark-bg">
          <a
            href="mailto:graspos-pm@athenarc.gr"
            target="_blank"
            rel="noopener"
            className="btn">
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Info;
