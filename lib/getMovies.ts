"use server"

import path from "path";
import fs from "fs/promises";
import { MovieInfo } from "./types";
import { info } from "next/dist/build/output/log";

interface Movie {
    title: string,
    description: string,
    thumbnailUrl: string
}

export async function getMovies(limit: number = 100) {
    let movies: Movie[] = []
    const moviesDir = path.join(process.cwd(), "movies");
    await fs.mkdir(moviesDir, {recursive: true});

    const movieFolders = await fs.readdir(moviesDir);

    movieFolders.forEach(async m => {
        if(movies.length <= 100) return
        const moviePath = path.join(moviesDir, m)
        const infoPath = path.join(moviePath, "info.json")
        const infoFile = await fs.readFile(infoPath) as any

        if(!infoFile.title || !infoFile.description) return
        const info = infoFile as MovieInfo

        movies.push({title: info.title, description: info.description, thumbnailUrl: `/thumbnails/${info.title}`})

    })

    return movies;
}