
import { Product } from './types';

import barcalive from './productimgs/barcalive.jpeg';
import barcaretro from './productimgs/barcaretro.webp';
import dotafc from './productimgs/dotafc.png';
import realmadridblack from './productimgs/realmadridblack.jpeg';
import realmadridblue from './productimgs/realmadridblue.jpeg';
import realmadridpink from './productimgs/realmadridpink.jpeg';
import realmadridwhite from './productimgs/realmadridwhite.jpeg';
import smurffcback from './productimgs/smurffcback.png';
import smurffcfront from './productimgs/smurffcfront.png';
import spartaxfc from './productimgs/spartaxfc.png';

export const JERSEYS: Product[] = [
  { id: '1', name: 'Barcelona Live Jersey', price: 2550, originalPrice: 3000, image: barcalive, tag: 'Sale', rating: 5, reviewCount: 12 },
  { id: '2', name: 'Barcelona Retro Jersey', price: 2699, originalPrice: 3200, image: barcaretro, tag: 'Retro', rating: 4.5, reviewCount: 8 },
  { id: '3', name: 'Dota FC Special', price: 1999, image: dotafc, rating: 4.6, reviewCount: 9 },
  { id: '4', name: 'Real Madrid Black Edition', price: 2250, image: realmadridblack, rating: 5, reviewCount: 4 },
  { id: '5', name: 'Real Madrid Blue Edition', price: 2550, originalPrice: 3050, image: realmadridblue, tag: 'Limited', rating: 4.8, reviewCount: 15 },
  { id: '6', name: 'Real Madrid Pink Edition', price: 1999, originalPrice: 2499, image: realmadridpink, tag: 'Trending', rating: 4.2, reviewCount: 23 },
  { id: '7', name: 'Real Madrid White Edition', price: 2999, image: realmadridwhite, tag: 'National', rating: 5, reviewCount: 45 },
  { id: '8', name: 'Smurff FC Back', price: 2450, originalPrice: 3500, image: smurffcback, tag: 'New', rating: 4.9, reviewCount: 31 },
  { id: '9', name: 'Smurff FC Front', price: 2399, image: smurffcfront, rating: 4.7, reviewCount: 14 },
  { id: '10', name: 'Sparta X FC', price: 2599, image: spartaxfc, rating: 4.4, reviewCount: 7 }
];
