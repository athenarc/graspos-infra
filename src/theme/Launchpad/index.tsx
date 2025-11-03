import React from 'react';

function Launchpad() {
  return (
    <section className="rds-launchpad" id="metadata-schema">
      <div className="container white" id="resources">
        <h2 className="section-title white"> Resource Metadata Schema</h2>
        <br/>
        <div className="row" style={{ alignItems: 'center', justifyContent: 'center'}}>
        <div className='col col--6'>
          <p>
            The <b>GraspOS Resource Metadata Schema</b> was developed by the GraspOS internal Working Group on Resource Metadata Schemas. Its main goal was to define a consistent set of metadata fields that describe diverse resource types relevant to research-assessment processes and support the development of the GraspOS infrastructure catalogues.
            </p>
            <p>
              The schema is designed to include basic fields common to general-purpose scholarly catalogues (such as Zenodo or the EOSC EU Node Resource Hub), while also providing richer information to highlight attributes essential for the practical use of each resource and to enable advanced filtering features (called "exploration paths") that improve resource discoverability within the GraspOS infrastructure.
          </p>
          {/* {<p>
            Some metadata fields are covered by the core catalogues, while others represent enrichments stored by the GraspOS infrastructure front-end. For each field, the specification defines its name, description, data type, and requirement level (required, recommended, or optional).
          </p>} */}

          {/* <div className="row"> */}
          {/* <div className="btn-link-dark-bg">
            <a
              href="https://zenodo.org/communities/graspos-datasets"
              target="_blank"
              rel="noopener"
              className="btn">
              Data Registry
            </a>
        </div> */}
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
