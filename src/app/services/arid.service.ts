import { Injectable } from '@angular/core';
import { IEemployee } from '../interfaces/commondefs';
 

@Injectable({
  providedIn: 'root'
})
export class AridService {

  private employee: IEemployee[];
  constructor() {
    this.employee = [
      { code: 'emp01', name: "Eli", gender: "Male", annualSalary: "10000", dateOfBirth: "1/5/2001" },
       { code: 'emp02', name: "Eli", gender: "Male", annualSalary: "20000", dateOfBirth: "1/2/2001" },
        { code: 'emp03', name: "Eli", gender: "Male", annualSalary: "30000", dateOfBirth: "1/4/2001" },
         { code: 'emp04', name: "Eli", gender: "Female", annualSalary: "40000", dateOfBirth: "1/2/2001" },
          { code: 'emp05', name: "Eli", gender: "Female", annualSalary: "50000", dateOfBirth: "1/12/2001" }
    ]
  }

  public GetEmployess(): IEemployee[] {
    return this.employee;
  }

}
