import React from "react";

function NavListData({ nav }) {
  return (
    <li>
      <a href="/">{nav.name}</a>
    </li>
  );
}

export default NavListData;
