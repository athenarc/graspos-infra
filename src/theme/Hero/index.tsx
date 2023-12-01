import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Typed from '@theme/Typed';

import SvgHero from '@site/src/svg/Hero';
import SvgCreate from '@site/src/svg/Create';
import SvgCreateBg from '@site/src/svg/CreateBg';
import SvgDevelop from '@site/src/svg/Develop';
import SvgDevelopBg from '@site/src/svg/DevelopBg';
import SvgExplore from '@site/src/svg/Explore';
import SvgOperate from '@site/src/svg/Operate';
import SvgExploreBg from '@site/src/svg/ExploreBg';
import SvgArrowRight from '@site/src/svg/ArrowRight';

function Hero() {
  return (
    <header className="rds-hero">
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <div className="row">
              <div className="col col--8">
                <h1 className="hero-title">
                  Next Generation 
                  <br/> Research Assessment 
                  <br/> to Promote Open Science
                  <br/><br/>
                  <img loading="lazy" className="eosc__logo" alt={'EOSC logo'} src={'img/eosc-logo.png'} />

                </h1>
                {/*<h2 className="hero-subtitle">
                  <Typed
                    strings={['> supporting EOSC']}
                    typeSpeed={75}
                  />
                </h2>*/}

              </div>
              <div className="col col--4">
                <img loading="lazy" className="" alt={'OS logo'} src={'img/OS-logo.png'} />
              </div>
            </div>
            <div className="boxes">

              <div className="box box-develop">
                <SvgDevelopBg color="#FFFFFF" className="bg" />
                <span className="icon">
                  <SvgDevelop color="#FFFFFF" />
                </span>
                <div className="text">
                  <h3 className="title">Tools & Services</h3>
                  <p className="description">
                    Explore tools and services that can facilitate the
implementation of Open-Science-aware Responsible Research Assessment practices.
                  </p>
                  <span className="more">
                    Explore our services <SvgArrowRight color="#AE538E" />
                  </span>
                </div>
                <a href={useBaseUrl('/develop/')} className="link">
                  Read More
                </a>
              </div>

              <div className="box box-explore">
                <SvgExploreBg color="#FFFFFF" className="bg" />
                <span className="icon">
                  <SvgExplore color="#FFFFFF" />
                </span>
                <div className="text">
                  <h3 className="title">Datasets</h3>
                  <p className="description">
                    Upload, update and explore dataset resources compiled in the context of GraspOS.
                  </p>
                  <span className="more">
                    Explore our data
                    <SvgArrowRight color="#AE538E" />
                  </span>
                </div>
                <a href={useBaseUrl('/explore/')} className="link">
                  Read More
                </a>
              </div>

              <div className="box box-operate">
                <SvgExploreBg color="#FFFFFF" className="bg" />
                <span className="icon">
                  <SvgOperate />
                </span>
                <div className="text">
                  <h3 className="title">About</h3>
                  <p className="description">
                    Learn more about the GraspOS project that paves the way towards an Open-Science-aware Responsible Research Assessment system.
                  </p>
                  <span className="more">
                    Learn more about GraspOS
                    <SvgArrowRight color="#AE538E" />
                  </span>
                </div>
                <a href={'https://graspos.eu/'} className="link">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
