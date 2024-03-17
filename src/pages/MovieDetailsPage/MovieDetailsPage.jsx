import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function MovieDetailsPage() {
 
  
    return (
        <div> 
            
      <ul>
        <li>
          <NavLink to="cast">Casts</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>LOADING SUB COMPONENT...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
