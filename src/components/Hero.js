import React from 'react';
import styled from 'styled-components';
import DisplayLottie from './DisplayLottie';
import Shapes from './Shapes';
import Coding from '../lottie/coding.json';
import SocialMedia from './SocialMedia';
import {Button} from 'react-bootstrap';


const Hero = () => {
	return (
		<HeroStyled className="hero-section">
			<Shapes />
			<div className="container">
				<div className="hero-text">
					<div className="left-side">
						<h4>Hello there.</h4>
							<h4> Welcome to a new doge chain coin </h4>
						<h1>DOOGIE DOGE</h1>
						<p>Dev is working on the clock to release V2 site and utilities.</p>
						
						<Button href="https://app.diffusion.fi/#/swap?outputCurrency=0xfD9b33AD85E9e5857a2987b3c9d62Bea68cC4F3d" variant="primary" type="create">
    <h3> BUY </h3>
  </Button>
  <Button href="https://dexscreener.com/evmos/0xdc33323ad56e3120ed512971a0b9f29476ab58fc"  variant="primary" type="create">
    <h3>CHART</h3>
    
  </Button> {''}
  {''}
  <SocialMedia />
					</div>
					<div className="right-side">
						<DisplayLottie animationData={Coding} />
					</div>
				</div>
			</div>
		</HeroStyled>
	);
};

const HeroStyled = styled.section`
	position: relative;
	height: 100vh;
	display: flex;
	align-items: center;
	background: linear-gradient(35deg, #11cdef, #1171ef) !important;
	z-index: 1;
	.hero-text {
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.left-side {
			display: flex;
			flex-direction: column;
			h4,
			p {
				font-size: 30px;
				color: white;
				font-weight: 200;
			}
			h1 {
				font-size: 50px;
				color: white;
				margin-bottom: 10px;
			}
		}

		.right-side {
			width: 500px;
			max-width: 95%;
			display: flex;
			flex-direction: column;
		}
	}
	@media screen and (max-width: 768px) {
		height: initial;
		padding-bottom: 70px;
		padding-top: 160px;
		.hero-text {
			flex-direction: column;
		}
	}
`;

export default Hero;
