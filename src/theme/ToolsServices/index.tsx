import React from 'react';

import useBaseUrl from '@docusaurus/useBaseUrl';


function Languages() {
  return (
    <section className="rds-languages" id="tools-services">

      <div className="container">
        <h2 className="section-title">Tools & Services Catalogue</h2>
        {/* <h3 className="section-description">Short subheader goes here</h3> */}
      <br/>
        <div className="row" style={{ alignItems: 'center', justifyContent: 'center'}}>

          <div className='col col--6'>
          <img loading="lazy" className="" alt={'Services Catalogue'} src={'img/os2.png'} />
        </div>
        <div className='col col--6'>
          <p>
            The <b>Tools Catalogue</b> aims to facilitate the discovery of GraspOS tools for enrichment and monitoring by collecting their metadata offering also an integration with EOSC by automatically synchronising its contents with the EOSC Marketplace. 
          </p>

          <div className="col--offset-1 btn-link-white-bg">
            
            <a
              href="https://zenodo.org/communities/graspos-tools"
              target="_blank"
              rel="noopener"
              className="btn">
              Tools Catalogue
            </a>
          </div>
          <br/><br/>
          <p>
          The <b>Services Catalogue</b> facilitates the discovery of GraspOS services (for enrichment, monitoring, and data) by collecting and indexing their metadata. 
          This catalogue supports their integration to EOSC by incorporating these metadata into the EOSC Marketplace. 
          </p>
          <p>
            The Services Catalogue provides GraspOS end-users with a centralised and intuitive platform to explore and access the various services offered. It is based on the OpenAIRE Catalogue open-source software.
          </p>
          <div className="col--offset-1 btn-link-white-bg">
            <a
              href="https://graspos-services.athenarc.gr/"
              target="_blank"
              rel="noopener"
              className="btn">
              Services Catalogue
            </a>
          </div>
        </div>
        
        </div>
      </div>
    </section>
  );
}

export default Languages;
