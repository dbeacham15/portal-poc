import React from 'react';
import { NavLink }  from 'react-router-dom';

export default (props) => (
  <div style={styles.tile}>
    <span style={styles.date}>{ props.date }</span>
    <NavLink to="/" style={styles.title}>{ props.title }</NavLink>
    <p>{ props.excerpt }</p>
  </div>
);

const styles = {
  date: {
    color: '#5f6368',
    display: 'block'
  },
  tile: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '16px',
    paddingBottom: '16px'
  },
  title: {
    color: '#00ff84',
    display: 'block',
    fontWeight: '700',
    marginTop: '8px',
    textDecoration: 'none',
    textTransform: 'uppercase'
  }
}