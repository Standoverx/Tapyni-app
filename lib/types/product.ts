export type CategoryId = 'cartes-nfc' | 'stickers-nfc' | 'tags-nfc' | 'presentoirs-nfc' | 'chevalets-nfc';

export interface Product {
  id: string | number;
  name: string;
  description: string;
  originalPrice?: string;
  price: string;
  images: string[];
  type: string;
  customLabel: string;
}

export interface Category {
  id: CategoryId;
  name: string;
  products: Product[];
}

export interface CategoryDetails {
  size: string;
}

export interface VolumeDiscount {
  quantity: number;
  discount: number;
  savingsDhs: number;
}