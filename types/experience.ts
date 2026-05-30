export interface RoleHistory {
  role: string;
  duration: string;
}

export interface Experience {
  company: string;
  location: string;
  currentRole: string;
  roleHistory?: RoleHistory[];
  achievements: string[];
}