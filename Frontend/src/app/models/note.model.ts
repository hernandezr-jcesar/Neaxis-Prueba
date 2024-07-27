export interface Note {
  idNote: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description?: string;
}
