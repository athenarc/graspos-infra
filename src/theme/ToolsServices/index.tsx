import React from 'react';

import useBaseUrl from '@docusaurus/useBaseUrl';


function Languages() {
  return (
    <section className="rds-languages" id="tools-services">

      <div className="container">
        <h2 className="section-title">Tools & Services Catalogue</h2>
        {/* <h3 className="section-description">Short subheader goes here</h3> */}
      <br/>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
        Vivamus porta neque id nulla tempor convallis. Donec egestas lobortis justo, eget ultrices nibh facilisis id. Fusce vel tincidunt dolor, non auctor ipsum. Quisque nec sagittis nunc. Aliquam erat volutpat. Vivamus finibus dolor vel magna vulputate, sodales varius nisi tincidunt. Aenean lacinia ex erat, in aliquet metus dictum nec. Integer porttitor fermentum velit, id tincidunt mauris aliquam a. Praesent accumsan, nibh vitae accumsan vehicula, ipsum dolor consectetur nunc, quis fermentum justo felis quis lorem. Suspendisse potenti. Suspendisse maximus dictum ligula, in vehicula nunc viverra ut. Cras non ultrices mauris, vitae suscipit ante. Curabitur ac efficitur ligula, nec dignissim justo.
        </p>

        <div className="row">

          <div className="col--offset-2 col col--4 btn-link-white-bg">
            <a
              href="https://zenodo.org/communities/graspos-tools"
              target="_blank"
              rel="noopener"
              className="btn">
              Tools Catalogue
            </a>
          </div>

          <div className="col col--4 btn-link-white-bg">
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
    </section>
  );
}

export default Languages;
