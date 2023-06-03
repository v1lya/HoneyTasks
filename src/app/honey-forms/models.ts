export interface IDoc {
  docType: string;
  expDate: Date;
  description: string;
}

export interface IImage {
  content: string;
  fileName: string;
  fileType: string;
  fileSize: number;
}
