export interface Project {
  id: number;
  name: string;
  image: string;
}

export interface Activities {
  project_id: number;
  activities: Activity[];
}

export interface Activity {
  id: number;
  image: string;
  date: string;
  project: string;
  description: string;
  details_activities?: DetailsActivities;
  activity_details?: ActivityDetail[];
  tag?: Array<string>;
}

export interface ActivityDetail {
  project_id: number;
  description: string;
  images: any[];
}

export interface DetailsActivities {
  description: string;
  images: string[];
  tab?: boolean;
}

