import React, {useEffect} from 'react'
import './footer.css'
import video2 from '../Assets/video.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
	useEffect(() => {
		Aos.init({duration: 2000})
	}, [])


	return (
		<section className='footer'>

			<div className="videoDiv">
				<video src={video2} loop autoPlay muted type='mp4/video'></video>
			</div>

			<div className="secContent container">
				<div data-aos="fade-up" className="contactDiv flex">

					<div className="text">
						<small>KEEP IN TOUCH</small>
						<h2>Travel with us</h2>
					</div>

					<div className="inputDiv flex">
						<input type="text" placeholder='Enter Email Address' />
						<button className="btn flex" type='submit'>
							SEND <FiSend className='icon' />
						</button>

					</div>

				</div>

				<div className="footerCard flex">
					<div className="footerIntro flex">
						<div className="logoDiv">
							<a href="" className="logo flex">
								<MdOutlineTravelExplore className='icon' /> Travel.
							</a>
						</div>

						<div data-aos="fade-up" className="footerParagraph">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aspernatur totam nulla soluta asperiores natus maxime dignissimos quod rerum repellat eos aut ipsa doloribus eveniet vitae consequuntur laborum, facilis repellendus?
						</div>

						<div data-aos="fade-up" data-aos-duration="5000" className="footerSocials">
							<AiOutlineTwitter className='icon' />
							<AiFillYoutube className='icon' />
							<AiFillInstagram className='icon' />
							<FaTripadvisor className='icon' />
						</div>

					</div>

					<div data-aos="fade-up" data-aos-duration="5000" className="footerLinks grid">

						{/* Group One */}

						<div className="linkGroup">
							<span className="groupTitle">
								OUR AGENCY
							</span>

							<li className="footerList flex">
								<FiChevronRight className='icon' />
								Services
							</li>

							<li className="footerList flex">
								<FiChevronRight className='icon' />
								Insurance
							</li>

							<li className="footerList flex">
								<FiChevronRight className='icon' />
								Agency
							</li>

							<li className="footerList flex">
								<FiChevronRight className='icon' />
								Tourism
							</li>

							<li className="footerList flex">
								<FiChevronRight className='icon' />
								Payment
							</li>
						</div>

						{/* Group Two */}

						<div className="linkGroup">
							<span className="groupTitle">
								PARTNERS
							</span>

							<li className="footerList flex">
								<FiChevronRight className='icon' />
								Bookings
							</li>

							<li className="footerList flex">
								<FiChevronRight className='icon' />
								RentCars
							</li>

							<li className="footerList flex">
								<FiChevronRight className='icon' />
								HostalWorld
							</li>

							<li className="footerList flex">
								<FiChevronRight className='icon' />
								Trivago
							</li>

							<li className="footerList flex">
								<FiChevronRight className='icon' />
								TripAdvisor
							</li>
						</div>

						{/* Group Three */}

						<div className="linkGroup">
							<span className="groupTitle">
								LAST MINUTE
							</span>

							<li className="footerList flex">
								<FiChevronRight className='icon' />
								London
							</li>

							<li className="footerList flex">
								<FiChevronRight className='icon' />
								California
							</li>

							<li className="footerList flex">
								<FiChevronRight className='icon' />
								Indonasia
							</li>

							<li className="footerList flex">
								<FiChevronRight className='icon' />
								Europe
							</li>

							<li className="footerList flex">
								<FiChevronRight className='icon' />
								Oceania
							</li>
						</div>
					</div>

					<div className="footerDiv flex">
						<small>BEST TRAVEL WEBSITE THEME</small>
						<small>&copy; ABHISHEK KUMAR</small>
					</div>
				</div>
			</div>

		</section>
	)
}

export default Footer
