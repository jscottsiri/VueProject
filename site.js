/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
// 
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//    
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating 
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = new Vue({
      el: '#vue_app',
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data: {
            // This holds your movies.json data.
            movies: [],
			
			title: "IMBD + Scott's Top 9 Movies",
            owner: "Scott",
            github: "https://github.com/jscottsiri/"
            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
            
      },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
          makeTextDate: function (dateArray) {
              let obj = new Object();
              obj.year = dateArray[0];
              obj.day = dateArray[2];
              switch (dateArray[1]) {
                  case 1:
                      obj.month = 'January';
                      break;
                  case 2:
                      obj.month = 'February';
                      break;
                  case 3:
                      obj.month = 'March';
                      break;
                  case 4:
                      obj.month = 'April';
                      break;
                  case 5:
                      obj.month = 'May';
                      break;
                  case 6:
                      obj.month = 'June';
                      break;
                  case 7:
                      obj.month = 'July';
                      break;
                  case 8:
                      obj.month = 'August';
                      break;
                  case 9:
                      obj.month = 'September';
                      break;
                  case 10:
                      obj.month = 'October';
                      break;
                  case 11:
                      obj.month = 'November';
                      break;
                  case 12:
                      obj.month = 'December';
                      break;
              }
              return obj.month + " " + obj.day + ", " + obj.year + " ";
          },
          like: function (index) {
              this.movies[index].likes++;
          },
          dislike: function (index) {
              this.movies[index].dislikes++;
          },
          posterClick: function (index) {

              if (this.movies[index].posterindex === this.movies[index].posters.length - 1) {
                  this.movies[index].posterindex = 0;
              }else{
                  this.movies[index].posterindex++;
              }

          },
          timeText: function (minutes) {
              let min = minutes % 60;
              let hr = Math.floor(minutes/60);

              return hr + "h " + min + "m";
          }
      }
})

