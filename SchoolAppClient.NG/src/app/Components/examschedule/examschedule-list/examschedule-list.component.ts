import { Component } from '@angular/core';
import { ExamSchedule } from '../../../Models/exam-schedule';
import { ExamScheduleService } from '../../../Services/exam-schedule.service';

@Component({
  selector: 'app-examschedule-list',
  templateUrl: './examschedule-list.component.html',
  styleUrl: './examschedule-list.component.css'
})
export class ExamscheduleListComponent {

  public examSchedules: ExamSchedule[] = [];
  constructor(private service: ExamScheduleService) {

  }
  ngOnInit(): void {
    this.LoadData();

  }
  LoadData() {
    this.service.GetExamSchedule().subscribe
      ((response: ExamSchedule[]) => {
        this.examSchedules = response;
        console.log(response);
      }, (error) => {
        console.log('Observable emitted an error: ' + error);
      });

  }
  DeleteExamSchedule(exs: ExamSchedule) {
    let confirmDelete: boolean = confirm(`Delete ${exs.examScheduleName}?`);
    if (confirmDelete) {
      this.service.DeleteExamSchedule(exs.examScheduleId).subscribe(() => {
        this.LoadData();
      }, (error) => {
        console.log('Observable emitted an error: ' + error);
      });
    }
  }


}
