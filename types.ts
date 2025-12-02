export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits?: string[];
  duration?: string;
  price?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  image: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: number;
  before: string;
  after: string;
  serviceName: string;
}