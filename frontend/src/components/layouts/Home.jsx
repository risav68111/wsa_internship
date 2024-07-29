import React, { useEffect } from "react";
import CountRestro from "./CountRestro.jsx";
import Restaurant from "./Restaurant.jsx";
import { useDispatch } from "react-redux";
import { getRestaurants } from "../../actions/restaurantsAction.js"

function Home() {
    const dispatch= useDispatch();

    useEffect(()=> {
        dispatchEvent(getRestaurants());
    }, [dispatch]);

    return(
        <>
            <CountRestro />
            <section className="sort">
                <button className="sort_veg p-3">Pure Veg</button>
                <button className="sort_rev p-3">Sort by Review</button>
                <button className="sort_rat p-3">Sort by Rating</button>
            </section>
            <Restaurant />
            
        </>
    )
}

export default Home