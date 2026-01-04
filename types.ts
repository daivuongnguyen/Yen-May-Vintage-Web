export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  status: string;
  tag?: string;
}

export interface TestimonialItem {
  id: string;
  rating: number;
  title: string;
  text: string;
  author: string;
  platform: string;
  avatar: string;
}

export interface CommunityItem {
  id: string;
  image: string;
  handle: string;
}

export interface ContentData {
  hero: {
    est: string;
    title: string;
    subtitle: string;
    cta: string;
    bgImage: string;
  };
  brandHeart: {
    subtitle: string;
    title: string;
    description: string;
    feature1Title: string;
    feature1Text: string;
    feature2Title: string;
    feature2Text: string;
    mainImage: string;
  };
  gallery: {
    subtitle: string;
    title: string;
    description: string;
    cta: string;
    items: GalleryItem[];
  };
  community: {
    subtitle: string;
    title: string;
    description: string;
    items: CommunityItem[];
  };
  prestige: {
    title: string;
    press: string[];
    testimonials: TestimonialItem[];
  };
  oasis: {
    tag: string;
    title: string;
    p1: string;
    p2: string;
    cta: string;
    images: string[];
  };
  location: {
    subtitle: string;
    title: string;
    description: string;
    address: string;
    hours: string;
  };
}