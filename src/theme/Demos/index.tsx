import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import SvgDots from '@site/src/svg/Dots';

function Demos() {
  return (
    <section className="rds-demos" id="about">
      <div className="container">
        <h2 className="section-title">
          <br />
        </h2>

        <div className="row terminals">
          <img
            src={useBaseUrl('/img/code-1.png')}
            className="code"
            alt="Background image of sample redis code"
          />
          <div className="col col--6">
            <div className="terminal right">
              <div className="terminal-header">
                <SvgDots />
              </div>
              <div className="terminal-body">
                <h5 className="title">About the GraspOS project</h5>
                <br/>
                <p>
                  Integer ut dolor lacinia eros hendrerit lacinia. Vivamus tincidunt vulputate urna, a ullamcorper diam porta a. Phasellus volutpat venenatis mauris sed elementum. Aenean at velit ultricies, suscipit erat et, tempus velit. Fusce aliquet felis sit amet lorem dapibus, et volutpat ante hendrerit. Mauris purus risus, porta tempor metus sit amet, ultricies tincidunt odio. Donec ac nibh a felis rutrum malesuada eu ut ante. Etiam pretium tellus vitae pharetra laoreet.
                </p>
                <div className="col col--12 btn-link-white-bg">
                  <a
                    href="https://graspos.eu"
                    target="_blank"
                    rel="noopener"
                    className="btn">
                    GraspOS website
                  </a>
                </div>
                {/* <ul className="links">
                  <li>
                    <a href="/howtos/ratelimiting/">
                      How to Build a Rate Limiter Using Redis and Python
                    </a>
                  </li>
                  <li>
                    <a href="/howtos/leaderboard/">
                      How to Build a Real-Time Leaderboard App Using Redis
                    </a>
                  </li>
                  <li>
                    <a href="/howtos/solutions/microservices/caching">
                      How to Implement Cache-aside Using Redis and NodeJS
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Demos;
