import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * Simple Card used to display information 
 */
class Card extends PureComponent {
  render() {
    const { children, description, onClick, title } = this.props;

    return (
      <div className="card" onClick={onClick}>
        <div className="card__media">
          { children }
        </div>
        <div className="card__content">
          <h4 className="card__title">{ title }</h4>
          { description && (
            <div className="card__description">{ description }</div>
          )}
        </div>
      </div>
    )
  }
}

Card.defaultProps = {
  children: {},
  description: '',
  onClick: () => {}
};

Card.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired
};

export default Card;