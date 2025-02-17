interface Author {
    name: string;
    ava: string;
  }

export interface Review {
    rating: number;
    title: string;
    comment: string;
    author: Author;
    location: string;
}