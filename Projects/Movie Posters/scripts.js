const posters = [
    { src: "poster/THE_SHAWSHANK_REDEMPTION.jpg", genre: "drama", year: 1994, cast: "Tim Robbins, Morgan Freeman, Bob Gunton" },
    { src: "poster/THE_GODFATHER.jpg", genre: "crime", year: 1972, cast: "Marlon Brando, Al Pacino, James Caan" },
    { src: "poster/THE_DRAK_KNIGHT.jpg", genre: "action", year: 2008, cast: "Christian Bale, Heath Ledger, Aaron Eckhart" },
    { src: "poster/PULP_FICTION.jpg", genre: "crime", year: 1994, cast: "John Travolta, Uma Thurman, Samuel L. Jackson" },
    { src: "poster/FORREST_GUMP.jpg", genre: "drama", year: 1994, cast: "Tom Hanks, Robin Wright, Gary Sinise" },
    { src: "poster/INCEPTION.jpg", genre: "sci-fi", year: 2010, cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page" },
    { src: "poster/FIGHT_CLUB.jpg", genre: "drama", year: 1999, cast: "Brad Pitt, Edward Norton, Helena Bonham Carter" },
    { src: "poster/THE_MATRIX.jpg", genre: "sci-fi", year: 1999, cast: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss" },
    { src: "poster/GOODFELLAS.jpg", genre: "crime", year: 1990, cast: "Robert De Niro, Ray Liotta, Joe Pesci" },
    { src: "poster/THE_LORD_OF_THE_RINGS-THE_RETURN_OF_KING.jpg", genre: "fantasy", year: 2003, cast: "Elijah Wood, Viggo Mortensen, Ian McKellen" },
    { src: "poster/star_wars_episode_v_the_empire_strikes_back.jpg", genre: "sci-fi", year: 1980, cast: "Mark Hamill, Harrison Ford, Carrie Fisher" },
    { src: "poster/the_silence_of_the_lambs.jpg", genre: "thriller", year: 1991, cast: "Jodie Foster, Anthony Hopkins, Lawrence A. Bonney" },
    { src: "poster/schindlers_list.jpg", genre: "biography", year: 1993, cast: "Liam Neeson, Ralph Fiennes, Ben Kingsley" },
    { src: "poster/seven.jpg", genre: "crime", year: 1995, cast: "Brad Pitt, Morgan Freeman, Gwyneth Paltrow" },
    { src: "poster/the_avengers.jpg", genre: "action", year: 2012, cast: "Robert Downey Jr., Chris Evans, Scarlett Johansson" },
    { src: "poster/the_lion_king.jpg", genre: "animation", year: 1994, cast: "Matthew Broderick, Jeremy Irons, James Earl Jones" },
    { src: "poster/jurassic_park.jpg", genre: "sci-fi", year: 1993, cast: "Sam Neill, Laura Dern, Jeff Goldblum" },
    { src: "poster/gladiator.jpg", genre: "action", year: 2000, cast: "Russell Crowe, Joaquin Phoenix, Connie Nielsen" },
    { src: "poster/titanic.jpg", genre: "drama", year: 1997, cast: "Leonardo DiCaprio, Kate Winslet, Billy Zane" },
    { src: "poster/back_to_the_future.jpg", genre: "sci-fi", year: 1985, cast: "Michael J. Fox, Christopher Lloyd, Lea Thompson" },
    { src: "poster/avatar.jpg", genre: "sci-fi", year: 2009, cast: "Sam Worthington, Zoe Saldana, Sigourney Weaver" },
    { src: "poster/avengers_endgame.jpg", genre: "action", year: 2019, cast: "Robert Downey Jr., Chris Evans, Mark Ruffalo" },
    { src: "poster/the_hunger_games.jpg", genre: "sci-fi", year: 2012, cast: "Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth" },
    { src: "poster/the_social_network.jpg", genre: "biography", year: 2010, cast: "Jesse Eisenberg, Andrew Garfield, Justin Timberlake" },
    { src: "poster/parasite.jpg", genre: "thriller", year: 2019, cast: "Kang-ho Song, Sun-kyun Lee, Yeo-jeong Jo" },
    { src: "poster/the_prestige.jpg", genre: "drama", year: 2006, cast: "Christian Bale, Hugh Jackman, Scarlett Johansson" },
    { src: "poster/the_incredibles.jpg", genre: "animation", year: 2004, cast: "Craig T. Nelson, Holly Hunter, Samuel L. Jackson" },
    { src: "poster/the_shining.jpg", genre: "horror", year: 1980, cast: "Jack Nicholson, Shelley Duvall, Danny Lloyd" },
    { src: "poster/toy_story.jpg", genre: "animation", year: 1995, cast: "Tom Hanks, Tim Allen, Don Rickles" },
    { src: "poster/coco.jpg", genre: "animation", year: 2017, cast: "Anthony Gonzalez, Gael García Bernal, Benjamin Bratt" },
    { src: "poster/spider_man_into_the_spider_verse.jpg", genre: "animation", year: 2018, cast: "Shameik Moore, Jake Johnson, Hailee Steinfeld" },
    { src: "poster/casablanca.jpg", genre: "romance", year: 1942, cast: "Humphrey Bogart, Ingrid Bergman, Paul Henreid" },
    { src: "poster/the_wolf_of_wall_street.jpg", genre: "biography", year: 2013, cast: "Leonardo DiCaprio, Jonah Hill, Margot Robbie" },
    { src: "poster/the_departed.jpg", genre: "crime", year: 2006, cast: "Leonardo DiCaprio, Matt Damon, Jack Nicholson" },
    { src: "poster/interstellar.jpg", genre: "sci-fi", year: 2014, cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain" },
    { src: "poster/the_dark_knight_rises.jpg", genre: "action", year: 2012, cast: "Christian Bale, Tom Hardy, Anne Hathaway" },
    { src: "poster/django_unchained.jpg", genre: "drama", year: 2012, cast: "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio" },
    { src: "poster/harry_potter_and_the_sorcerers_stone.jpg", genre: "fantasy", year: 2001, cast: "Daniel Radcliffe, Rupert Grint, Emma Watson" },
    { src: "poster/iron_man.jpg", genre: "action", year: 2008, cast: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard" },
    { src: "poster/captain_america_the_winter_soldier.jpg", genre: "action", year: 2014, cast: "Chris Evans, Scarlett Johansson, Sebastian Stan" },
    { src: "poster/citizen_kane.jpg", genre: "drama", year: 1941, cast: "Orson Welles, Joseph Cotten, Dorothy Comingore" },
    { src: "poster/gone_with_the_wind.jpg", genre: "romance", year: 1939, cast: "Clark Gable, Vivien Leigh, Thomas Mitchell" },
    { src: "poster/psycho.jpg", genre: "horror", year: 1960, cast: "Anthony Perkins, Janet Leigh, Vera Miles" },
    { src: "poster/lawrence_of_arabia.jpg", genre: "biography", year: 1962, cast: "Peter O'Toole, Alec Guinness, Anthony Quinn" },
    { src: "poster/rear_window.jpg", genre: "thriller", year: 1954, cast: "James Stewart, Grace Kelly, Wendell Corey" },
    { src: "poster/vertigo.jpg", genre: "mystery", year: 1958, cast: "James Stewart, Kim Novak, Barbara Bel Geddes" },
    { src: "poster/sunset_boulevard.jpg", genre: "drama", year: 1950, cast: "William Holden, Gloria Swanson, Erich von Stroheim" },
    { src: "poster/the_seven_samurai.jpg", genre: "action", year: 1954, cast: "Toshirô Mifune, Takashi Shimura, Keiko Tsushima" },
    { src: "poster/12_angry_men.jpg", genre: "drama", year: 1957, cast: "Henry Fonda, Lee J. Cobb, Martin Balsam" },
    { src: "poster/the_maltese_falcon.jpg", genre: "crime", year: 1941, cast: "Humphrey Bogart, Mary Astor, Gladys George" },
    { src: "poster/it_happened_one_night.jpg", genre: "romance", year: 1934, cast: "Clark Gable, Claudette Colbert, Walter Connolly" },
    { src: "poster/a_streetcar_named_desire.jpg", genre: "drama", year: 1951, cast: "Vivien Leigh, Marlon Brando, Kim Hunter" },
    { src: "poster/on_the_waterfront.jpg", genre: "drama", year: 1954, cast: "Marlon Brando, Karl Malden, Lee J. Cobb" },
    { src: "poster/roman_holiday.jpg", genre: "romance", year: 1953, cast: "Gregory Peck, Audrey Hepburn, Eddie Albert" },
    { src: "poster/singin_in_the_rain.jpg", genre: "musical", year: 1952, cast: "Gene Kelly, Donald O'Connor, Debbie Reynolds" },
    { src: "poster/the_wizard_of_oz.jpg", genre: "fantasy", year: 1939, cast: "Judy Garland, Frank Morgan, Ray Bolger" },
    { src: "poster/all_about_eve.jpg", genre: "drama", year: 1950, cast: "Bette Davis, Anne Baxter, George Sanders" },
    { src: "poster/high_noon.jpg", genre: "western", year: 1952, cast: "Gary Cooper, Grace Kelly, Thomas Mitchell" },
    { src: "poster/bridge_on_the_river_kwai.jpg", genre: "war", year: 1957, cast: "William Holden, Alec Guinness, Jack Hawkins" },
    { src: "poster/the_third_man.jpg", genre: "mystery", year: 1949, cast: "Orson Welles, Joseph Cotten, Alida Valli" },
    { src: "poster/an_american_in_paris.jpg", genre: "musical", year: 1951, cast: "Gene Kelly, Leslie Caron, Oscar Levant" },
    { src: "poster/mr_smith_goes_to_washington.jpg", genre: "drama", year: 1939, cast: "James Stewart, Jean Arthur, Claude Rains" },
    { src: "poster/the_treasure_of_the_sierra_madre.jpg", genre: "adventure", year: 1948, cast: "Humphrey Bogart, Walter Huston, Tim Holt" },
    { src: "poster/dr_strangelove.jpg", genre: "comedy", year: 1964, cast: "Peter Sellers, George C. Scott, Sterling Hayden" },
    { src: "poster/the_apartment.jpg", genre: "romance", year: 1960, cast: "Jack Lemmon, Shirley MacLaine, Fred MacMurray" },
    { src: "poster/the_grapes_of_wrath.jpg", genre: "drama", year: 1940, cast: "Henry Fonda, Jane Darwell, John Carradine" },
    { src: "poster/metropolis.jpg", genre: "sci-fi", year: 1927, cast: "Brigitte Helm, Alfred Abel, Gustav Fröhlich" },
    { src: "poster/dunkirk.jpg", genre: "war", year: 2017, cast: "Fionn Whitehead, Barry Keoghan, Mark Rylance" },
    { src: "poster/letters_from_iwo_jima.jpg", genre: "war", year: 2006, cast: "Ken Watanabe, Kazunari Ninomiya, Tsuyoshi Ihara" },
    { src: "poster/hacksaw_ridge.jpg", genre: "war", year: 2016, cast: "Andrew Garfield, Sam Worthington, Luke Bracey" },
    { src: "poster/tora!_tora!_tora!.jpg", genre: "war", year: 1970, cast: "Martin Balsam, Sô Yamamura, Jason Robards" },
    { src: "poster/all_quiet_on_the_western_front.jpg", genre: "war", year: 2022, cast: "Felix Kammerer, Albrecht Schuch, Aaron Hilmer" },
    { src: "poster/pearl_harbor.jpg", genre: "war", year: 2001, cast: "Ben Affleck, Kate Beckinsale, Josh Hartnett" },
    { src: "poster/midway.jpg", genre: "war", year: 2019, cast: "Ed Skrein, Patrick Wilson, Woody Harrelson" },
    { src: "poster/A_Haunting_in_Venice.jpg", genre: "horror", year: 2023, cast: "Kenneth Branagh, Michelle Yeoh, Jamie Dornan" },
    { src: "poster/kill_bill_-vol.1.jpg", genre: "action", year: 2003, cast: "Uma Thurman, David Carradine, Daryl Hannah" },
    { src: "poster/billy_lynns_long_halftime_walk.jpg", genre: "drama", year: 2016, cast: "Joe Alwyn, Garrett Hedlund, Arturo Castro" },
    { src: "poster/Once_Upon_a_Time..._in_Hollywood.jpg", genre: "comedy", year: 2019, cast: "Leonardo DiCaprio, Brad Pitt, Margot Robbie" },
    { src: "poster/Witness_for_the_Prosecution.jpg", genre: "crime", year: 1957, cast: "Tyrone Power, Marlene Dietrich, Charles Laughton" },
    { src: "poster/the_last_emperor_末代皇帝.jpg", genre: "docudrama", year: 1987, cast: "John Lone, Joan Chen, Peter O'Toole" },
    { src: "poster/crouching_tiger_hidden_dragon_卧虎藏龙.jpg", genre: "action", year: 2000, cast: "Chow Yun-fat, Michelle Yeoh, Zhang Ziyi" },
    { src: "poster/in_the_mood_for_love_花样年华.jpg", genre: "romance", year: 2000, cast: "Tony Leung, Maggie Cheung" },
    { src: "poster/hero_英雄.jpg", genre: "action", year: 2002, cast: "Jet Li, Tony Leung, Maggie Cheung" },
    { src: "poster/farewell_my_concubine_霸王别姬.jpg", genre: "drama", year: 1993, cast: "Leslie Cheung, Gong Li, Zhang Fengyi" },
    { src: "poster/raise_the_red_lantern_红灯笼.jpg", genre: "drama", year: 1991, cast: "Gong Li, He Saifei, Ma Jingwu" },
    { src: "poster/a_better_tomorrow_英雄本色.jpg", genre: "action", year: 1986, cast: "Chow Yun-fat, Leslie Cheung, Ti Lung" },
    { src: "poster/house_of_flying_daggers_十面埋伏.jpg", genre: "action", year: 2004, cast: "Zhang Ziyi, Takeshi Kaneshiro, Andy Lau" },
    { src: "poster/shower.jpg", genre: "comedy", year: 1999, cast: "Zhu Xu, Pu Cunxin, Jiang Wu" },
    { src: "poster/to_live_活着.jpg", genre: "drama", year: 1994, cast: "Gong Li, Ge You" },
    { src: "poster/shaolin_temple_少林寺.jpg", genre: "martial arts", year: 1982, cast: "Jet Li, Yu Chenghui, Yu Hai" },
    { src: "poster/if_you_are_the_one_非诚勿扰.jpg", genre: "romance", year: 2008, cast: "Ge You, Shu Qi" },
    { src: "poster/ash_is_purest_white_江湖儿女.jpg", genre: "crime", year: 2018, cast: "Zhao Tao, Liao Fan" },
    { src: "poster/chungking_express_重庆森林.jpg", genre: "comedy", year: 1994, cast: "Brigitte Lin, Takeshi Kaneshiro, Tony Leung Chiu-wai" },
    { src: "poster/The_Chorus.jpg", genre: "drama", year: 2004, cast: "Gérard Jugnot, François Berléand, Jean-Baptiste Maunier" },
    { src: "poster/hamilton.jpg", genre: "epic", year: 2020, cast: "Lin-Manuel Miranda, Phillipa Soo, Leslie Odom Jr." },
    { src: "poster/Scent_of_a_Woman.jpg", genre: "epic", year: 1992, cast: "Al Pacino, Chris O'Donnell, James Rebhornu" },
    { src: "poster/Love_Actually.jpg", genre: "comedy", year: 2003, cast: "Hugh Grant, Martine McCutcheon, Liam Neeson" },
    { src: "poster/painted_skin_画皮.jpg", genre: "fantasy", year: 2008, cast: "Zhao Wei, Zhou Xun, Chen Kun" },
    { src: "poster/leon_the_professional.jpg", genre: "action", year: 1994, cast: "Jean Reno, Gary Oldman, Natalie Portman" },
    { src: "poster/life_is_beautiful_La_vita_e_bella.jpg", genre: "drama", year: 1997, cast: "Roberto Benigni, Nicoletta Braschi, Giorgio Cantarini" },
    { src: "poster/jaws.jpg", genre: "action", year: 1975, cast: "Roy Scheider, Robert Shaw, Richard Dreyfuss" },
    { src: "poster/Alien.jpg", genre: "sci-fi", year: 1979, cast: "Sigourney Weaver, Tom Skerritt, John Hurt" },
    { src: "poster/Blade_runner.jpg", genre: "sci-fi", year: 1982, cast: "Harrison Ford, Rutger Hauer, Sean Young" },
    { src: "poster/the_grand_budapest_hotel.jpg", genre: "comedy", year: 2004, cast: "Ralph Fiennes, Tony Revolori, F. Murray Abraham" },
    { src: "poster/devil_wears_Prada.jpg", genre: "drama", year: 2006, cast: "Meryl Streep, Anne Hathaway, Emily Blunt" },
    { src: "poster/Babylon.jpg", genre: "drama", year: 2022, cast: "Brad Pitt, Margot Robbie, Diego Calva" }
];


// Select DOM elements
const grid = document.getElementById("poster-grid");
const filterItems = document.querySelectorAll("#filters .filter-item");
const modal = document.getElementById("modal");
const modalPoster = document.querySelector(".modal-poster");
const modalTitle = document.getElementById("modal-title");
const modalYear = document.getElementById("modal-year");
const modalGenre = document.getElementById("modal-genre");
const modalCast = document.getElementById("modal-cast");
const closeModal = document.querySelector(".close");

// Function to shuffle the posters array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

function displayPosters(filter = "all") {
    grid.innerHTML = "";

    const filteredPosters = posters.filter((poster) => {
        if (filter === "all") return true;

        // Year-based filters
        const year = poster.year;
        if (filter === "before_1980s") return year < 1980;
        if (filter === "1980s_to_2000s") return year >= 1980 && year < 2000;
        if (filter === "2000s_to_2020s") return year >= 2000;

        // Genre-based filters
        if (filter === "action" && poster.genre === "action") return true;
        if (filter === "drama" && poster.genre === "drama") return true;
        if (filter === "comedy" && poster.genre === "comedy") return true;
        if (filter === "sci-fi" && poster.genre === "sci-fi") return true;
        if (filter === "other" && !["action", "drama", "comedy", "sci-fi"].includes(poster.genre)) return true;

    });

    // Render filtered posters
    filteredPosters.forEach((poster) => {
        const posterElement = document.createElement("div");
        posterElement.classList.add("poster");
        posterElement.style.backgroundImage = `url(${poster.src})`;

        posterElement.addEventListener("click", () => {
            modalPoster.style.backgroundImage = `url(${poster.src})`;
            modalTitle.textContent = poster.src
    .split("/")[1] // Extract the file name
    .replace(".jpg", "") // Remove file extension
    .replace(/_/g, " ") // Replace underscores with spaces
    .toUpperCase(); // Convert to all uppercase
            modalYear.textContent = "Year |  " + poster.year;
            modalGenre.textContent = "Genre |  " + poster.genre;
            modalCast.textContent = "Cast |  " + poster.cast;
            modal.classList.add("visible");
        });

        grid.appendChild(posterElement);
    });
}

// Close modal
closeModal.addEventListener("click", () => {
    modal.classList.remove("visible");
});

// Event listeners for filters
filterItems.forEach((item) => {
    item.addEventListener("click", () => {
        filterItems.forEach((el) => el.classList.remove("active"));
        item.classList.add("active");
        const filter = item.getAttribute("data-filter");
        displayPosters(filter);
    });
});

// Shuffle posters array on page load
shuffleArray(posters);
displayPosters();