# Movie Watcher
A Netflix clone

**This is just for learning and not meant to be used, does not include an auth system**

## Plan/todo

It will store the movies in the movies/ folder. Each folder will be the movie's title with dashes instad of spaces. It will have a info.json for storing data about the movie (title, description, and some other info), a thumbnail file (png), and the movie file (mp4). You can watch and add movies

**Todo:**

- [ ] The system to view movies with a good-looking UI
    - [ ] `GetMovies()` — returns 100 movies, each with a thumbnail URL, title, and description
    - [ ] `GetMovie(title)` — returns a specific movie's title and stream URL
- [ ] The ability to create and delete movies
    - [ ] `CreateMovie(title, thumbnail, description, file)` — creates a movie, returns `true`/`false`
    - [ ] `DeleteMovie(title)` — deletes a movie, returns `true`/`false`