export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  vin: string;
  mileage: number;
  color?: string;
  status: 'available' | 'rented' | 'maintenance';
}
export interface VehicleCreateDTO {
  make: string;
  model: string;
  year: number;
  vin: string;
  mileage: number;
  color?: string;
}
export interface VehicleUpdateDTO {
  make?: string;
  model?: string;
  year?: number;
  vin?: string;
  mileage?: number;
  color?: string;
  status?: 'available' | 'rented' | 'maintenance';
}
export interface VehicleFilterDTO {
  make?: string;
  model?: string;
  year?: number;
  status?: 'available' | 'rented' | 'maintenance';
}
export interface VehiclePaginationDTO {
  page: number;
  limit: number;
}
export interface VehicleListDTO {
  vehicles: Vehicle[];
  total: number;
  page: number;
  limit: number;
}   
export interface VehicleSearchDTO {
  query: string;
}
export interface VehicleSortDTO {
  sortBy: 'make' | 'model' | 'year' | 'mileage';
  order: 'asc' | 'desc';
}
export interface VehicleStatsDTO {
  totalVehicles: number;
  availableVehicles: number;
  rentedVehicles: number;
  maintenanceVehicles: number;
}
export interface VehicleImportDTO {
  vehicles: VehicleCreateDTO[];
}
export interface VehicleExportDTO {
  format: 'csv' | 'json' | 'xml';
}
export interface VehicleBulkUpdateDTO {
  vehicleIds: string[];
  updateData: VehicleUpdateDTO;
}
export interface VehicleBulkDeleteDTO {
  vehicleIds: string[];
}   
export interface VehicleAssignmentDTO {
  vehicleId: string;
  userId: string;
}
export interface VehicleReturnDTO {
  vehicleId: string;
  returnDate: Date;
}
export interface VehicleMaintenanceDTO {
  vehicleId: string;
  maintenanceDate: Date;
  details: string;
}
export interface VehicleHistoryDTO {
  vehicleId: string;
  history: Array<{
    date: Date;
    event: string;
    details?: string;
  }>;
}
export interface VehicleNotificationDTO {
  vehicleId: string;
  message: string;
  date: Date;
}
export interface VehicleAlertDTO {
  vehicleId: string;
  alertType: 'maintenance_due' | 'rental_overdue' | 'inspection_due';
  date: Date;
}
export interface VehicleLocationDTO {
  vehicleId: string;
  latitude: number;
  longitude: number;
  timestamp: Date;
}
export interface VehicleGeoFenceDTO {
  vehicleId: string;
  geoFenceId: string;
  action: 'enter' | 'exit';
  timestamp: Date;
}export interface VehicleUsageDTO {
  vehicleId: string;
  usageStats: {
    totalDistance: number;
    totalTime: number;
    averageSpeed: number;
  };
}
export interface VehicleReservationDTO {
  vehicleId: string;
  userId: string;
  reservationDate: Date;
  returnDate: Date;
}
export interface VehicleInspectionDTO {
  vehicleId: string;
  inspectionDate: Date;
  inspector: string;
  findings: string;
  passed: boolean;
}
export interface VehicleInsuranceDTO {
  vehicleId: string;
  provider: string;
  policyNumber: string;
  coverageDetails: string;
  expirationDate: Date;
}
export interface VehicleFuelDTO {
  vehicleId: string;
  fuelType: 'gasoline' | 'diesel' | 'electric' | 'hybrid';
  fuelLevel: number;
  lastRefuelDate: Date;
}
export interface VehicleEmissionDTO {
  vehicleId: string;
  emissionTestDate: Date;
  result: 'pass' | 'fail';
  details?: string;
}
export interface VehicleRecallDTO {
  vehicleId: string;
  recallDate: Date;
  description: string;
  resolved: boolean;
}
export interface VehicleAccessoryDTO {
  vehicleId: string;
  accessoryType: string;
  description: string;
}
export interface VehicleCustomFieldDTO {
  vehicleId: string;
  fieldName: string;
  fieldValue: string | number | boolean | Date;
}
export interface VehicleDepreciationDTO {
  vehicleId: string;
  purchasePrice: number;
  currentValue: number;
  depreciationRate: number;
}
export interface VehicleLeaseDTO {
  vehicleId: string;
  lessee: string;
  leaseStartDate: Date;
  leaseEndDate: Date;
  monthlyPayment: number;
}
export interface VehicleTelematicsDTO {
  vehicleId: string;
  data: {
    speed: number;
    location: {
      latitude: number;
      longitude: number;
    };
    engineStatus: 'on' | 'off';
    fuelLevel: number;
  }[];
}
export interface VehicleAuditDTO {
  vehicleId: string;
  auditDate: Date;
  auditor: string;
  findings: string;
}