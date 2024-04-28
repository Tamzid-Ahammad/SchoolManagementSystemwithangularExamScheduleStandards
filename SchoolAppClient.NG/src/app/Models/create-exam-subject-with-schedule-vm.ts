export class CreateExamSubjectWithScheduleVM {
  subjectId!: number;
  examTypeId!: number;
  examDate: Date = new Date();
  examStartTime: Date = new Date();
  examEndTime: Date = new Date();

}
