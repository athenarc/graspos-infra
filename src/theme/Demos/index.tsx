import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import SvgDots from '@site/src/svg/Dots';

function Demos() {
  return (
    <section className="rds-languages" id="about">

      <div className="container">
        <h2 className="section-title">About the GraspOS project</h2>
        {/* <h3 className="section-description" sty>In a nutshell</h3> */}
      <br/>
      <div className="row" style={{ alignItems: 'center', justifyContent: 'center'}}>
          <div className='col col--6'>
          <img loading="lazy" className="" alt={'Services Catalogue'} src={'img/os4.png'} />
        </div>
        <div className='col col--6'>
          <p>
          The <b>GrapOS project</b> develops, assesses and operates an open and trusted federated infrastructure for next generation research metrics and indicators, offering data, tools, services and guidance. 
          </p>

          <div className="col--offset-1 btn-link-white-bg">
            
            <a
              href="https://graspos.eu/"
              target="_blank"
              rel="noopener"
              className="btn">
              Find out more
            </a>
          </div>
          
        </div>
        </div>
      </div>
    </section>
  );
}

export default Demos;
