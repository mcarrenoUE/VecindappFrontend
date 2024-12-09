export interface Event {
  type: string;
  time: string;
  location: string;
  date: string;
}

export interface Day {
  date: number;
  isToday: boolean;
}
