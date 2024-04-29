import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const nav = links.map((link, index) => {
    return (
    <a key={index} href={`#${link}`}>{link}</a>
    );
  })

  console.log(nav);

  return (<nav>
    {nav}
  </nav>
  );
}

export default NavBar;