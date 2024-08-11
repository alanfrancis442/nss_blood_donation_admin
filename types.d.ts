interface UserProps {
    blood_grp: string;
    created_at: string; 
    dob: string; 
    email: string;
    gender: "male" | "female" | "other"; 
    id: string;
    name: string;
    phone: number; 
    weight: number;
  }
  
  interface CampProps {
    id: number;
    name: string;
    branch: string; 
    year_study: number;
    date: string;
    email: string;
    created_at: string;
  }

  interface RequestProps {
    blood_group: string;
    created_at: string; 
    dob?: string; 
    age: number;
    units: number;
    hospital_name: string;
    bystander: string;
    send_to: string;

    email: string;
    gender: "male" | "female" | "other"; 
    id: string;
    name: string;
    phone: number; 
    weight: number;
  }