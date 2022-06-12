import React from 'react';
import PropTypes from 'prop-types';

function ButtonLink({ className, href, childen }) {
  return (
    <a className={className} href={href}>
      {childen}
    </a>
  );
}

ButtonLink.defaultProps = {
  href: '/',
};

ButtonLink.propTypes = {
  className: PropTypes.string.isRequired,
  href: PropTypes.string,
  childen: PropTypes.string.isRequired,
};

export default ButtonLink;
