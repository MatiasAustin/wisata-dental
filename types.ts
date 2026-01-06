export interface DoctorSchedule {
  day: string;
  time: string;
}

export interface Doctor {
  id: string;
  name: string;
  schedules: DoctorSchedule[];
  image?: string;
}

export interface ServiceItem {
  name: string;
  price?: string;
  isPromo?: boolean;
}

export interface PromoCategory {
  title: string;
  description: string;
  items: ServiceItem[];
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}