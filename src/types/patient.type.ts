export type PatientTypes = {
  _id: string;
  patientDetails: {
    arcsId: number;
    firstName: string;
    lastName: string;
    aptTime: string;
    timeCheckedIn: string;
    roomAssigned: number;
  };
};
