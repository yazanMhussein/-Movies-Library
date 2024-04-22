//the sat up for the server
const express = require('express')
const app = express()
const dataJ = require('./Movie Data/data.json');
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

 // here is where i create constructor 
 class Movie {
         constructor(title,poster_path,overview){
          this.title = title;
          this.poster_path = poster_path;
          this.overview = overview;
          }
         }
         // this is where i create a new instance of Movie class to pass it to json
         const movieName = new Movie(
             dataJ.title,
             dataJ.poster_path,
             dataJ.overview
             );
// this is my main router        
app.get("/",(req,res) => {   
    // this is res.json(movieName) it's so the json can be put on the body
    res.json(movieName)

})
// this is my favorite router i send a message to the body    
app.get("/favorite",(req,res) => {
    res.send("Welcome to Favorite Page")
})
//this is my 404 router i send a error message to the body if something doesn't work
app.use((req, res, next) => {
    res.status(404).json({ status: 404, responseText: 'Page not found' });
  })
// this is my 500 router i send a error message to the body if something doesn't work
app.use((err,req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ status: 500, responseText: 'Sorry, something went wrong' });
   })
// here we are listen to the server on port 8080
app.listen(8080,() => {
    console.log("Server is running on port 8080");
});