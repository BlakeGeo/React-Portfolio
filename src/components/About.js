import React from "react"
import photo from './images/Cascade.jpg';

const About = () => (
        <section id="about" class="about">
			<div class="about-txt">
				<h1>about me.</h1>
				<p class="intro">I'm an aspiring and eager web developer based in Perth, Australia. Currently undergoing a Coding Bootcamp to add full-stack development to my repertoire.</p>
				<p class="description">I hold a chemical engineering degree from Curtin University but have since opted for a different career path more suited to my interests. I have a keen interest in blockchain development and am excited to be learning all things coding and full-stack.</p>
				<br />
				<p class="description">I've held a number of jobs in different countries in my short time; ranging from back of house events and festival work in Perth, consulting and light engineer work in Shenzhen, kitchen and server work in Banff and currently a disabiltiy worker back in Perth.</p>
				<br />
				<p class="description">The combination of my degree, the bootcamp and the jobs I have held has given me the confidence and experience to apply my quick thinking, analytical, logical and problem solving skills in any given environment. Whilst always striving to exceed expectations and make a lasting postive impression with everything that I do.</p>
				<br />
				<p class="description">Other than creating projects for my portfolio you'll find me playing ice hockey, wakeboarding or lifting weights.</p>
			</div>
			<div class="photo">
				<img src={photo} alt="Blake Georgeff" class="photo-me" />
			</div>
		</section>
    );

export default About;