export class Anime {
  [x: string]: any;
  id: number;
  name: string;
  description: string;
  Rating: string;
  total_episodes: number;
  categorie: string;
  studio: string;
  img: string;
  ratings: number[] = [];    
  seasons: Season[] = [];     

  constructor(
    id: number,
    name: string,
    description: string,
    Rating: string,
    total_episodes: number,
    categorie: string,
    studio: string,
    img: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.Rating = Rating,
    this.total_episodes = total_episodes;
    this.categorie= categorie,
    this.studio= studio,
    this.img = img;
    this.ratings = [],
    this.seasons = []
  }
 }
 export class Season {
  name: string;
  episodes: string[];

  constructor(name: string, episodes: string[]) {
    this.name = name;
    this.episodes = episodes;
  }
}