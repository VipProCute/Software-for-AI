"use client"

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Image from "next/image";

export default function App() {
  return (
    <Navbar>
      <NavbarBrand>
        <Image
          src="/logo.svg"
          alt="Logo"
          width="70"
          height="70"
        />
        <p className="font-bold text-inherit">THƯ VIỆN BOBO</p>
      </NavbarBrand>
    </Navbar>
  );
}