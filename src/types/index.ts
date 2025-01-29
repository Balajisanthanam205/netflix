export interface Content {
  id: string;
  title: string;
  type: 'movie' | 'series' | 'anime';
  year: number;
  certificate: string;
  genres: string[];
  cast: string[];
  crew: {
    director: string;
    writers: string[];
  };
  description: string;
  rating: number;
  imageUrl: string;
  duration: string;
}