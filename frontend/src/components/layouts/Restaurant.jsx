import React from 'react'

function Restaurant() {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className='card p-3 rounded'>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.F7z-KAvq7SPM4gYBdvcLSQHaGD%26pid%3DApi&f=1&ipt=7186dbe761c1c8d32eab12c040c6dcaf3076816315d18ff60072fd18027b577b&ipo=images" alt="dominos" />
                <div className='card-body d-flex flex-column'>
                    <h5 className='card-title'> dominos pizza</h5>
                    <p className='rest_address'>
                        123 asdf, asdf, asdf
                    </p>
                    <div className="ratting-outer">
                        <div className="rating-inner"></div>
                        <span id='no_of_reviews'>(1 Review)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Restaurant