export interface Account {
  uid: string;
  isActive: boolean;
  isSuperuser: boolean;
  nin?: string;
  email?: string;
  password?: string;
  name?: string;
  photo?: string;
  phone?: string;
  idNumber?: string;
  birthday?: Date;
}
