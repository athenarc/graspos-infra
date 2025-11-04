import React from 'react';

import useBaseUrl from '@docusaurus/useBaseUrl';

function Languages() {
  return (
    <section className="rds-languages" id="tools-services">

      <div className="container">
        <h2 className="section-title">Core Catalogues</h2>
      <br/>
        <div className="row" style={{ alignItems: 'center', justifyContent: 'center'}}>
          {/* <div className='col col--6'>
          <img loading="lazy" className="" alt={'Core Catalogues'} src={'img/os2.png'} />
        </div> */}
          <div className='col col--12'>
          <p>
            The basic metadata for all resources registered in the GraspOS infrastructure are stored in a set of core catalogues, each corresponding to a specific resource type (data, tools, services, and templates/guidelines). While the core catalogues can be accessed independently by end users, their contents are also accessible through the GraspOS infrastructure front-end, which functions as a powerful <a href="https://graspos-infra.athenarc.gr/catalogue" target="_blank" rel="noopener" style={{ color: '#AE538E' }}>meta-catalogue <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '4px' }}><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>.
          </p>
          <p>
            The <b>Data Catalogue</b> (also referred to as the "Data Registry") stores and exposes basic metadata related to data assets within the GraspOS infrastructure and enables users to discover, understand, and search for them.
          </p>
          <p>
            The <b>Tools Catalogue</b> component facilitates the discovery of GraspOS tools by collecting their basic metadata and integrating them with EOSC. Its implementation is based on a dedicated Zenodo community, called "GraspOS Tools".
          </p>
          <p>
            The <b>Services Catalogue</b> component collects the metadata of all GraspOS services, which are pieces of software that provide functions or features for research assessment processes. The GraspOS Services Catalogue facilitates integration with the EOSC ecosystem.
          </p>
          <p>
            The <b>Templates & Guidance Material Catalogue</b> collects basic metadata related to resources facilitating the research assessment process, including guidance documents, checklists, and indicator toolboxes.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
            <div className="btn-link-white-bg">
              <a
                href="https://zenodo.org/communities/graspos-datasets"
                target="_blank"
                rel="noopener"
                className="btn">
                Data Catalogue
              </a>
            </div>
            <div className="btn-link-white-bg">
              <a
                href="https://zenodo.org/communities/graspos-tools"
                target="_blank"
                rel="noopener"
                className="btn">
                Tools Catalogue
              </a>
            </div>
            <div className="btn-link-white-bg">
              <a
                href="https://graspos-services.athenarc.gr/"
                target="_blank"
                rel="noopener"
                className="btn">
                Services Catalogue
              </a>
            </div>
            <div className="btn-link-white-bg">
              <a
                href="https://zenodo.org/communities/graspos-assessment-process-resources"
                target="_blank"
                rel="noopener"
                className="btn">
                Templates & Guidance Material Catalogue
              </a>
            </div>
          </div>
        </div>
        
        </div>
      </div>
    </section>
  );
}

export default Languages;
