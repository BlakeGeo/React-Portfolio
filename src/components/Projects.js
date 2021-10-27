import React from "react";
import noviceChef from './images/noviceChef.png';
import book from './images/book-inventory.png';


export default function Portfolio() {
    return (
        <section class="project">
			<div class="cards">
				<div class="card">
					<a href="https://github.com/BlakeGeo">
						<img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/responsibilities-full-stack.jpg" alt="project 3" class="card-image" />
						<div class="card-info">
							<h2>PROJECT 3</h2>
							<p>React | Mongo | GraphQL</p>
						</div>
					</a>
				</div>
				<div class="card">
					<a href="https://github.com/BlakeGeo">
						<img src={book} alt="project 2-book inventory" class="card-image" />
						<div class="card-info">
							<h2>Book Inventory</h2>
							<p>JavaScript | Handlebars | SQL</p>
						</div>
					</a>
				</div>
				<div class="card">
					<a href="https://bt134.github.io/novice-chef/">
						<img src={noviceChef} alt="Novice Chef project 1" class="card-image" />
					</a>
						<div class="card-info">
							<h2>Novice Chef</h2>
							<a href="https://github.com/BlakeGeo/novice-chef">
								<p>Javascript | API</p>
							</a>
						</div>
				</div>
				<div class="card">
					<a href="https://techy-bloggg.herokuapp.com/">
						<img src="./Images/tech-blog.png" alt="Tech-Blog" class="card-image" />
					</a>
						<div class="card-info">
							<h2>Tech Blog</h2>
							<a href="https://github.com/BlakeGeo/Tech-Blog">
								<p>Node | SQL | Handlebars</p>
							</a>
						</div>
				</div>			
				<div class="card">
					<a href="https://blakegeo.github.io/Weather-Dashboard/">
						<img src="./Images/weatherDashboard.png" alt="Weather-Dashboard" class="card-image" />
					</a>
						<div class="card-info">
							<h2>Weather Dashboard</h2>
							<a href="https://github.com/BlakeGeo/Weather-Dashboard">
								<p>Javascript</p>
							</a>
						</div>
				</div>							
				<div class="card">
					<a href="https://github.com/BlakeGeo">
						<img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/responsibilities-full-stack.jpg" alt="project 2" class="card-image" />
						<div class="card-info">
							<h2>LED Wall</h2>
							<p>Node</p>
						</div>
					</a>
				</div>			
			</div>

		</section>
    );
}
