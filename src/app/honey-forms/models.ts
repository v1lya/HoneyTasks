export interface IDoc {
  id: number;
  licenseCopy: IImage;
  expirationDate: Date;
  description: string;
}

export interface IImage {
  content: string;
  fileName: string;
  fileType: string;
  fileSize: number;
}
