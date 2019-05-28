import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon from '../components/Icon';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: #00ff84;
  display: block;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 24px;
  text-decoration: none;
  text-transform: uppercase;
  transition: color .4s linear;

  &:hover {
    color: #fff;
  }
`;

/**
 * A Simple GRid Tile that displays an Icon/Image and descriptive data
 * as well as links to a section within the portal
 */
class GridTile extends PureComponent {
  render() {
    const { 
      description, 
      icon, 
      link,  
      title, 
      primaryFill, 
      secondaryFill 
    } = this.props;

    return (
      <div style={styles.gridTile}>
        <div style={styles.innerTile}>
          <div style={styles.media}>
          <Icon
            icon={ icon }
            size="140"
            primaryFill={ primaryFill }
            secondaryFill={ secondaryFill}
          />
          </div>
          <div style={styles.content}>
            <StyledLink to={link}>{ title }</StyledLink>
            <div className="grid-tile__description">
              {description}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

GridTile.defaultProps = {
  description: '',
  link: '/',
  primaryFill: '#fe6f4e',
  secondaryFill: '#fe6f4e'
};

GridTile.propTypes = {
  description: PropTypes.string,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string,
  primaryFill: PropTypes.string,
  secondaryFill: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default GridTile;

const styles = {
  content: {
    paddingBottom: '24px',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '24px',
    textAlign: 'left'
  },
  gridTile: {
    display: 'block',
    flex: '0 0 25%',
    paddingLeft: '15px',
    paddingRight: '15px',
    width: '25%'
  },
  innerTile: {
    backgroundColor: 'rgb(52, 57, 89)',
    borderRadius: '4px 4px 0 0',
    height: '100%'
  },
  media: {
    paddingBottom: '8px',
    paddingTop: '8px'
  }
}