export interface IEemployee {
  code: string;
  name: string;
  gender: string;
  annualSalary: string;
  dateOfBirth: string;
}
export class Employee implements IEemployee
{
  constructor(public code: string, public name: string, public gender: string, public annualSalary: string , public dateOfBirth: string) {

  }
}
