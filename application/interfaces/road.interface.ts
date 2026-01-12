export interface Road{
    id: string;
    name: string;
    length: number; // in kilometers
    type: 'highway' | 'city' | 'rural';
    condition: 'good' | 'fair' | 'poor';
    location: string;
}
    
export interface RoadCreateDTO{
    name: string;
    length: number;
    type: 'highway' | 'city' | 'rural';
    condition: 'good' | 'fair' | 'poor';
    location: string;
}
    
export interface RoadUpdateDTO{
    name?: string;
    length?: number;
    type?: 'highway' | 'city' | 'rural';
    condition?: 'good' | 'fair' | 'poor';
    location?: string;
}

export interface RoadFilterDTO{
    type?: 'highway' | 'city' | 'rural';
    condition?: 'good' | 'fair' | 'poor';
    location?: string;
}