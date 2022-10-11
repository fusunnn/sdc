import React from "react";
import Link from "next/link";

import Dropdown from "react-bootstrap/Dropdown";

export const DropDown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="white"
        style={{ fontSize: "1.2rem", fontWeight: 500 }}
      >
        Books
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Link href="/swedish-death-cleaning">
          <Dropdown.Item
            href="/swedish-death-cleaning"
            style={{ fontWeight: 500 }}
          >
            The Gentle Art of Swedish Death Cleaning
          </Dropdown.Item>
        </Link>

        <Link href="/art-of-aging">
          <Dropdown.Item href="/art-of-aging" style={{ fontWeight: 500 }}>
            The Swedish Art of Aging Exhuberantly
          </Dropdown.Item>
        </Link>
      </Dropdown.Menu>
    </Dropdown>
  );
};
