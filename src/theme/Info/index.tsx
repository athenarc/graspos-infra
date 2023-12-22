import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Slider, { Settings } from 'react-slick';

function Info() {
  const sliderSettings: Settings = {
    infinite: true,
    centerMode: true,
    centerPadding: '32.5px',
    speed: 500,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: 'unslick',
      },
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="rds-resources">
      <div className="container" id="resources">
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
