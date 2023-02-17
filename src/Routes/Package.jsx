import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from './Footer'
import './Package.css'

const Package = () => {
  return (
    <section>
        <div>
            <Navbar />
        </div>
    <div className="package">
        <h1>Our Tour Package</h1>
        <p>Explore some of the best tips from around the world</p>
        <div className="package_row">
        <div className="package_container">
            <div className="box_package">
                <img src="./img/lumbini.jpg" alt="" height='100%' width='100%'/>
            </div>
            <div className="box_package">
                <h3>Kathmandu Lumbini Trip</h3>
                <p>Lumbini, the birthplace of Gautam Buddha, lies in the southern region of Nepal.</p>
            </div>
            <div className="box_package">
                <div className='review'>
                    <b>(25 reviews)</b>
    			    <div class="stars">
    				    <i class="fas fa-star"></i>
    				    <i class="fas fa-star"></i>
    			        <i class="fas fa-star"></i>
    				    <i class="fas fa-star"></i>
    				    <i class="far fa-star"></i>
                    </div>
                    <h4>$750</h4><span>/ per person</span><br/>
    			<button>Book now</button>
                </div>
            </div>
        </div>
        <div className="package_container">
            <div className="box_package">
                <img src="./img/pokhara.jpg" alt="" height='100%' width='100%'/>
            </div>
            <div className="box_package">
                <h3>Kathmandu Pokhara Trip</h3>
                <p>Pokhara, the place blessed with nature, located in Northwest Nepal.</p>
            </div>
            <div className="box_package">
                <div className='review'>
                    <b>(25 reviews)</b>
    			    <div class="stars">
    				    <i class="fas fa-star"></i>
    				    <i class="fas fa-star"></i>
    			        <i class="fas fa-star"></i>
    				    <i class="fas fa-star"></i>
    				    <i class="far fa-star"></i>
                    </div>
                    <h4>$750</h4><span>/ per person</span><br/>
    			<button>Book now</button>
                </div>
            </div>
        </div>
        <div className="package_container">
            <div className="box_package">
                <img src="./img/manakamana.jpg" alt="" height='100%' width='100%'/>
            </div>
            <div className="box_package">
                <h3>Kathmandu Manakamana Trip</h3>
                <p>Situated in Gorkha, in the western region of Nepal, Manakamana Mandir.</p>
            </div>
            <div className="box_package">
                <div className='review'>
                    <b>(25 reviews)</b>
    			    <div class="stars">
    				    <i class="fas fa-star"></i>
    				    <i class="fas fa-star"></i>
    			        <i class="fas fa-star"></i>
    				    <i class="fas fa-star"></i>
    				    <i class="far fa-star"></i>
                    </div>
                    <h4>$750</h4><span>/ per person</span><br/>
    			<button>Book now</button>
                </div>
            </div>
        </div>
        </div>
    </div>
    <div>
        <Footer />
    </div>
    </section>
  )
}

export default Package