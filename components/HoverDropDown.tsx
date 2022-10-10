import React, { useState } from "react";

import Dropdown from "react-bootstrap/Dropdown";

export const HoverDropDown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="white"
        style={{ fontSize: "1.2rem", fontWeight: 500 }}
      >
        Books
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          href="/swedish-death-cleaning"
          style={{ fontWeight: 500 }}
        >
          The Gentle Art of Swedish Death Cleaning
        </Dropdown.Item>
        <Dropdown.Item href="/art-of-aging" style={{ fontWeight: 500 }}>
          The Gentle Art of Aging Exhuberantly
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
