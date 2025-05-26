import React from 'react';

function Launchpad() {
  return (
    <section className="rds-launchpad" id="data-registry">
      <div className="container white" id="resources">
        <h2 className="section-title white"> Data Registry</h2>
        <br/>
        <div className="row" style={{ alignItems: 'center', justifyContent: 'center'}}>
        <div className='col col--6'>
          <p>
            The <b>Data Registry</b> allows users to be informed about and understand the data assets within the infrastructure. 
            
            It collects metadata and access information for all the onboarded data sources. 
            </p>
            <p>
              More specifically, apart from a set of basic metadata related to each data source (e.g., its title, owners, licence), the GraspOS data registry also contains information about the location of the respective GraspOS API deployment, enabling the programmatic access to the data source contents
          </p>

          {/* <div className="row"> */}
          <div className="btn-link-dark-bg">
            <a
              href="https://zenodo.org/communities/graspos-datasets"
              target="_blank"
              rel="noopener"
              className="btn">
              Data Registry
            </a>
        </div>
        {/* </div> */}
        </div>
        <div className='col col--6'>
                  <img loading="lazy" className="" alt={'Services Catalogue'} src={'img/os3.png'} />

          </div>
          </div>
      </div>
    </section>
  );
}

export default Launchpad;
