import React, {useEffect} from 'react'
import './main.css'
import img from '../Assets/img.jpg'
import img2 from '../Assets/img (2).jpg'
import img3 from '../Assets/img (3).jpg'
import img4 from '../Assets/img.jpg'
import img5 from '../Assets/img.jpg'
import img6 from '../Assets/img.jpg'
import img7 from '../Assets/img.jpg'
import img8 from '../Assets/img.jpg'
import img9 from '../Assets/img.jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
	{
		id: 1,
		imgSrc: img,
		destTitle: 'Bora Bora',
		location: 'New Zealand',
		grade: 'CULTURAL RELAX',
		fees: '$700',
		description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
	},

	{
		id: 2,
		imgSrc: img2,
		destTitle: 'Machu Picchu',
		location: 'Peru',
		grade: 'CULTURAL RELAX',
		fees: '$600',
		description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
	},

	{
		id: 3,
		imgSrc: img3,
		destTitle: 'Great Barrier Reef',
		location: 'Australia',
		grade: 'CULTURAL RELAX',
		fees: '$700',
		description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
	},

	{
		id: 4,
		imgSrc: img4,
		destTitle: 'Cappadocia',
		location: 'Turkey',
		grade: 'CULTURAL RELAX',
		fees: '$800',
		description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
	},

	{
		id: 5,
		imgSrc: img5,
		destTitle: 'Guanajuato',
		location: 'Maxico',
		grade: 'CULTURAL RELAX',
		fees: '$1100',
		description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
	},

	{
		id: 6,
		imgSrc: img6,
		destTitle: 'Cinque Terre',
		location: 'Italy',
		grade: 'CULTURAL RELAX',
		fees: '$840',
		description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
	},

	{
		id: 7,
		imgSrc: img7,
		destTitle: 'Angkor Wat',
		location: 'Combodia',
		grade: 'CULTURAL RELAX',
		fees: '$790',
		description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
	},

	{
		id: 8,
		imgSrc: img8,
		destTitle: 'Taj Mahal',
		location: 'India',
		grade: 'CULTURAL RELAX',
		fees: '$900',
		description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
	},

	{
		id: 9,
		imgSrc: img9,
		destTitle: 'Bali Island',
		location: 'Indonasia',
		grade: 'CULTURAL RELAX',
		fees: '$500',
		description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
	}
]

const Main = () => {
	useEffect(() => {
		Aos.init({duration: 2000})
	}, [])



	return (
		<section className='main section container'>

			<div data-aos="fade-right" className="secTitle">
				<h3 className="title">
					Most Visited Destinations
				</h3>
			</div>

			<div className="secContent grid">

				{
					Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
						return (
							<div key={id} data-aos="fade-up" className="singleDestination">

								<div className="imageDiv">
									<img src={imgSrc} alt={destTitle} />
								</div>

								<div className="cardInfo">
									<h4 className="desTitle">
										{destTitle}
									</h4>
									<span className="continent flex">
										<HiOutlineLocationMarker className='icon' />
										<span className="name">{location}</span>
									</span>

									<div className="fees flex">
										<div className="grade">
											<span>{grade}<small>+1</small></span>
										</div>
										<div className="price">
											<h5>{fees}</h5>
										</div>
									</div>
									<div className="desc">
										<p>{description}</p>
									</div>
									<button className="btn flex">
										DETAILS <HiOutlineClipboardCheck className='icon' />
									</button>
								</div>

							</div>
						)
					})
				}

			</div>

		</section>
	)
}

export default Main
