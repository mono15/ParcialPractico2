import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  selectedBAnime!: Anime;
  selected = false;
  animes: Array<Anime> = [];
  constructor(private animeService: AnimeService) { }

  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
      console.log('Animes:', this.animes);
    });
  }

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedBAnime = anime;
  }

  getSeasonsCount(anime: Anime): number {
    return anime.seasons.length;
}

getAverageRating(anime: Anime): number {
  if (anime.ratings && anime.ratings.length > 0) {
    const total = anime.ratings.reduce((sum, r) => sum + r, 0);
    return parseFloat((total / anime.ratings.length).toFixed(2));
  } else if (anime.Rating) {
    return parseFloat(anime.Rating);  // usa string fijo como último recurso
  }
  return 0;
}


getGlobalAverageRating(): number {
  const allRatings: number[] = this.animes.flatMap(anime => anime.ratings || []);
  if (allRatings.length === 0) return 0;
  const total = allRatings.reduce((sum, r) => sum + r, 0);
  return parseFloat((total / allRatings.length).toFixed(2));
}

  ngOnInit() {
    this.getAnimes();
  }

}
