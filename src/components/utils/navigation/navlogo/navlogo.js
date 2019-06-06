import React, { memo } from 'react';

import { Link } from 'react-router-dom';

const NavLogo = () => (
  <h1>
    <Link to="/">Loftroom</Link>
  </h1>
);

export default memo(NavLogo);
