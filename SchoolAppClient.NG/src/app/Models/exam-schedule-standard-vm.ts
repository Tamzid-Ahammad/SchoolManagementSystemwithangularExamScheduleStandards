import {ExamSubjectVm} from "./exam-subject-vm";

export class ExamScheduleStandardVm {
  examScheduleStandardId!: number;
  
  standardName!: string;
  examScheduleName!: string;
  examSubjects!: ExamSubjectVm[]
}
