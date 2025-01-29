import { faker } from '@faker-js/faker';
import type { Content } from '../types';

const certificates = ['G', 'PG', 'PG-13', 'R', 'NC-17'];
const genres = [
  'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy',
  'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller',
  'Animation', 'Documentary', 'Crime', 'Family'
];

// Fixed set of high-quality movie-related images
const imageUrls = [
  'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1280&h=720', // Movie theater
  'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1280&h=720', // Cinema
  'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=1280&h=720', // Action scene
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1280&h=720', // Drama
  'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1280&h=720'  // Anime style
];

const generateCast = (count: number) => {
  return Array.from({ length: count }, () => faker.person.fullName());
};

const generateCrew = () => {
  return {
    director: faker.person.fullName(),
    writers: Array.from({ length: 2 }, () => faker.person.fullName()),
  };
};

export const generateContent = (count: number): Content[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    title: faker.word.words({ count: { min: 1, max: 4 } }),
    type: faker.helpers.arrayElement(['movie', 'series', 'anime']),
    year: faker.number.int({ min: 1990, max: 2024 }),
    certificate: faker.helpers.arrayElement(certificates),
    genres: faker.helpers.arrayElements(genres, { min: 1, max: 3 }),
    cast: generateCast(5),
    crew: generateCrew(),
    description: faker.lorem.paragraph(),
    rating: Number(faker.number.float({ min: 1, max: 10, precision: 0.1 }).toFixed(1)),
    imageUrl: faker.helpers.arrayElement(imageUrls),
    duration: faker.helpers.arrayElement(['1h 30m', '2h 15m', '45m', '1h 45m']),
  }));
};

export const contentData = generateContent(2000);