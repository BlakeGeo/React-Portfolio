import React from "react"
import photo from './images/Cascade.jpg';

export default function About() {
    return (

        <section id="about" class="about">
			<div class="about-txt">
				<h1>about.</h1>
				<p class="intro">I'm an aspiring web developer based in Perth, Australia. Currently undergoing a Coding Bootcamp to add full-stack development to my repertoire.</p>
				<p class="description">I hold a chemical engineering degree from Curtin University but have sinced opted for a different career path more suited to my interests. I have a keen interest in blockchain development and am excited to be learning all things coding and full-stack.</p>
				<br />
				<p class="description">Other than creating projects for my portfolio you'll find me playing ice hockey, wakeboarding or lifting weights.</p>
			</div>
			<div class="photo">
				<img src={photo} alt="Blake Georgeff" class="photo-me" />
			</div>
		</section>

    );
}