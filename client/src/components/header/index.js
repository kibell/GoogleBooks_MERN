import React from "react";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Header(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Google Books Search </h1>
    <p className="lead"></p>
  </div>
</div>
  );
}

export default Header;