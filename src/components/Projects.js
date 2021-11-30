import React from "react";
import noviceChef from './images/noviceChef.png';
import book from './images/book-inventory.png';
import tech from './images/tech-blog.png';
import weather from './images/weatherDashboard.png';
import github from './images/githubRed.png';
import budget from './images/budgetTracker.png';
import ingredient from './images/ingredient.png';


export default function Portfolio() {
    return (
        <section class="project">
			<h1>projects.</h1>
			<div class="cards">
				<div class="card">
					<a href="https://github.com/BlakeGeo">
						<img src={ingredient} alt="Ingredient Meal Man" class="card-image" />
					</a>
						<div class="card-info">
							<h2>Ingredient Meal Man</h2>
							<div class='tech-repo'>
								<span class='techs'>React | Mongo | GraphQL</span>
								<a href="https://github.com/BlakeGeo/Ingredient-Meal-Man">
									<img src={github} alt='github repo' class='gitRepo'/>
								</a>
							</div>
						</div>
				</div>
				<div class="card">
					<a href="https://book-inventoryyy.herokuapp.com/">
						<img src={book} alt="project 2-book inventory" class="card-image" />
					</a>
						<div class="card-info">
							<h2>Book Inventory</h2>
							<div class='tech-repo'>
								<span class='techs'>JavaScript | Handlebars | SQL</span>
								<a href="https://github.com/BlakeGeo/Book-Inventory-1">
									<img src={github} alt='github repo' class='gitRepo'/>
								</a>
							</div>
						</div>
				</div>
				<div class="card">
					<a href="https://bt134.github.io/novice-chef/">
						<img src={noviceChef} alt="Novice Chef project 1" class="card-image" />
					</a>
						<div class="card-info">
							<h2>Novice Chef</h2>
							<div class='tech-repo'>
								<span class='techs'>Javascript | API</span>
								<a href="https://github.com/BlakeGeo/novice-chef">
									<img src={github} alt='github repo' class='gitRepo'/>
								</a>
							</div>
						</div>
				</div>
				<div class="card">
					<a href="https://techy-bloggg.herokuapp.com/">
						<img src={tech} alt="Tech-Blog" class="card-image" />
					</a>
						<div class="card-info">
							<h2>Tech Blog</h2>
							<div class='tech-repo'>
								<span class='techs'>Node | SQL | Handlebars</span>
								<a href="https://github.com/BlakeGeo/Tech-Blog">
									<img src={github} alt='github repo' class='gitRepo'/>
								</a>
							</div>
						</div>
				</div>			
				<div class="card">
					<a href="https://immense-garden-00478.herokuapp.com/">
						<img src={budget} alt="Budget-tracker" class="card-image" />
					</a>
						<div class="card-info">
							<h2>Budget Tracker</h2>
							<div class='tech-repo'>
								<span class='techs'>Javascript | Mongo</span>
								<a href="https://github.com/BlakeGeo/Budget-Tracker">
									<img src={github} alt='github repo' class='gitRepo'/>
								</a>
							</div>
						</div>
				</div>
				<div class="card">
					<a href="https://blakegeo.github.io/Weather-Dashboard/">
						<img src={weather} alt="Weather-Dashboard" class="card-image" />
					</a>
						<div class="card-info">
							<h2>Weather Dashboard</h2>
							<div class='tech-repo'>
								<span class='techs'>Javascript | API</span>
								<a href="https://github.com/BlakeGeo/Weather-Dashboard">
									<img src={github} alt='github repo' class='gitRepo'/>
								</a>
							</div>
						</div>
				</div>														
			</div>

		</section>
    );
}
