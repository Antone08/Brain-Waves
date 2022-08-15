import React from "react";
import { Outlet } from "react-router-dom";

function Summary() {
  return (
    <div className="home">
      <div class="container">
        <h1 className="text-center mt-5 .text-danger" >Overall</h1>
        <div></div>
        <p className="text-center mt-5">I'm certain there have been times when you've felt as if everything fell into place, 
        you were out of your comfort zone trying new things, or just simply in one of the calmest states of your life. That could be attributed to any one of these states that I shared with you 
        and I ask why not give any one of these methods a try. If you feel as if you've tried anything and everything to no avail then maybe you've found what you've been looking for.</p>
        <Outlet />
      </div>
      <img
              class="img-fluid rounded mx-auto d-block mb-lg-0"
              src="https://images.unsplash.com/photo-1577457414247-e859d9765892?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5ldyUyMHllYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
   </div>
  );
}

export default Summary;