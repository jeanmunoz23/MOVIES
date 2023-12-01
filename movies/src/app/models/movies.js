export class Movies {
    _id?: number;
    title: string;
    description: string;
    genre: string;
    rating: number;
    releasedDate: string;
   trailerLink: string;
    constructor(title: string, description: string, genre: string, rating: number, releasedDate: string, trailerLink: string){
        this.title = title;
        this.description = description;
        this.genre = genre;
        this.rating = rating;
        this.releasedDate = releasedDate;
        this.trailerLink = trailerLink;
    }
}