import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';
import SectionHeader from '../partials/SectionHeader';
import ReactGA from "react-ga";
import Image from "../../elements/Image";
import Button from "../../elements/Button";

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Community = ({
                        className,
                        topOuterDivider,
                        bottomOuterDivider,
                        topDivider,
                        bottomDivider,
                        hasBgColor,
                        invertColor,
                        pushLeft,
                        ...props
                      }) => {

  const outerClasses = classNames(
      'testimonial section center-content-mobile',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
  );

  const innerClasses = classNames(
      'testimonial-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
  );


  const sectionHeader = {
    title: 'Join the Community',
    // paragraph: 'Shrub is truly community driven. Our buds have come from all over the world to join the Shrub mission'
  };

  return (
      <section
          {...props}
          className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
              <div className="container-xs center-content" style={{fontWeight: "500", color:"#9CA9B3"}}>
                  <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                      Thousands of gardeners have been chosen by the seeds. The rest are being adopted by new gardeners. Learn all about the seeds, and become a part of the journey.
                  </p>
              </div>
              <div className="reveal-from-bottom center-content" data-reveal-delay="600">
                  <Button tag="a" color="primary" className="btn-garden" wideMobile>
                      <ReactGA.OutboundLink eventLabel="Clicked on discord link" to="https://discord.gg/swbVfEPyT8" target="_blank"
                                            rel='noopener noreferrer'>
                          Join Shrub Discord
                      </ReactGA.OutboundLink>
                  </Button>
              </div>
          </div>
        </div>
      </section>
  );
}

Community.propTypes = propTypes;
Community.defaultProps = defaultProps;

export default Community;