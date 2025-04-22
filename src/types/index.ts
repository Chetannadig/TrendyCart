export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Milestone {
  id: number;
  title: string;
  date: string;
  description: string;
}

export interface SalesData {
  period: string;
  value: number;
}