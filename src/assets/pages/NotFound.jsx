import React from 'react'
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section>
      <h1>Error 404 Product Not Found</h1>
      <Link to="/">Click here to return home</Link>
    </section>
  )
}

export default NotFound