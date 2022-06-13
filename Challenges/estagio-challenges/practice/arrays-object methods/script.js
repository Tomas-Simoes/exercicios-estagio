"use strict";

/*
Create a list of movies that will be produced by the company. 
For each movie it will need to appear the cast information 
mentioning the actor(s) that are going to enter the movie

1 -A new actor can enter the movie if the movie type match with 
the actor movie type,

2- If the max budget for the movie is lower then the cast total 
cost remove the actor(s) with highest salary until it is equal or bigger

3- Get all the actors that have just one movie type and that are casted 
in at least 2 movies
*/

const moviestars = [
  {
    name: "james",
    age: 30,
    salary: 2000,
    movieType: ["Comedy", "Action", "Terror"],
  },
  {
    name: "carl",
    age: 12,
    salary: 1000,
    movieType: ["Action", "Fiction", "Comedy", "Terror"],
  },
  {
    name: "jonas",
    age: 70,
    salary: 13000,
    movieType: ["Action", "Terror", "Fiction"],
  },
  {
    name: "john",
    age: 25,
    salary: 4500,
    movieType: ["Terror"],
  },
];

const movies = [
  {
    name: "Shark",
    movieType: "Terror",
    maxBudget: 10000,
  },
  {
    name: "Interstellar",
    movieType: "Fiction",
    maxBudget: 30000,
  },
  {
    name: "Twilight",
    movieType: "Comedy",
    maxBudget: 100,
  },
  {
    name: "Friends",
    movieType: "Comedy",
    maxBudget: 50000,
  },
  {
    name: "F&F10",
    movieType: "Action",
    maxBudget: 1000,
  },
];

const moviesUpdated = movies.map((movie, index, arr) => {
  const availableMovieStars = moviestars
    .filter((actor) => actor.movieType.includes(movie.movieType))
    .sort((a, b) => a.salary - b.salary);

  let acc = 0;
  let indexToDelete;

  for (const [findex, factor] of availableMovieStars.entries()) {
    acc += factor.salary;

    if (acc > movie.maxBudget) {
      indexToDelete = findex;
      break;
    }
  }

  return {
    ...movie,
    actors: availableMovieStars.slice(0, indexToDelete),
  };
});

console.log(moviesUpdated);
