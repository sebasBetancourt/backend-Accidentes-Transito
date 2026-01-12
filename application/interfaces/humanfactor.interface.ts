export interface humanFacror {
    id: string;
    name: string;
    role: 'driver' | 'passenger' | 'pedestrian' | 'cyclist';
    age: number;
    gender: 'male' | 'female' | 'other';    
    experienceLevel: 'novice' | 'intermediate' | 'expert';
    incidentHistory: number; // number of past incidents
}
    
export interface HumanFactorCreateDTO{
    name: string;
    role: 'driver' | 'passenger' | 'pedestrian' | 'cyclist';
    age: number;
    gender: 'male' | 'female' | 'other';    
    experienceLevel: 'novice' | 'intermediate' | 'expert';
    incidentHistory: number;
}   
export interface HumanFactorUpdateDTO{
    name?: string;
    role?: 'driver' | 'passenger' | 'pedestrian' | 'cyclist';
    age?: number;
    gender?: 'male' | 'female' | 'other';    
    experienceLevel?: 'novice' | 'intermediate' | 'expert';
    incidentHistory?: number;
}