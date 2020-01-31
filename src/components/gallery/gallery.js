import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/item';
import { Container } from './gallery.css';

const Gallery = ({ item }) => (
  <Container>
    <Item title={item.title} copy={item.copy} image={item.image} />
  </Container>
);

Gallery.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Gallery;
