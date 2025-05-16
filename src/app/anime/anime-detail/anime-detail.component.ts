import { Component, Input, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../anime.service';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {
  goBack(): void {
    this.router.navigate(['/']);
  }
getAverageRating(anime: Anime): number {
  if (!anime.ratings || anime.ratings.length === 0) return 0;
  const total = anime.ratings.reduce((sum, r) => sum + r, 0);
  return parseFloat((total / anime.ratings.length).toFixed(2));
}

  animeDetail!: Anime;

  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.animeService.getAnimes().subscribe(animes => {
      const found = animes.find(anime => anime.id === id);
      if (found) {
        this.animeDetail = found;
      } else {
        console.error('Anime no encontrado con id:', id);
      }
    });
  }


}
