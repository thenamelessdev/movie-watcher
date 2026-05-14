# Movie Watcher
A Netflix clone

**This is just for learning and not meant to be used, does not include an auth system**

## Plan/todo

It will store the movies in the movies/ folder. Each folder will be the movie's title with dashes instad of spaces. It will have a info.json for storing data about the movie (title, description, and some other info), a thumbnail file (png), and the movie file (mp4). You can watch and add movies

**Todo:**

[ ] - The system to view movies with good looking UI:

    [ ] - GetMovies() to get 100 movies with the thumbnail url, title, and description

    [ ] - GetMovie() to get a specific movie by title. It returns the title and the movie url

[ ] - The ability to create and delete movies

    [ ] - CreateMovie() to create a movie. Requires a title, thumbnail, description, and the movie itself, returns true of false based if it suceeded
    
    [ ] - DeleteMovie() to delete a movie. Requires a title, returns true of false based if it suceeded