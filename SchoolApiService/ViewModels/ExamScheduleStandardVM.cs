﻿using SchoolApp.Models.DataModels;

namespace SchoolApiService.ViewModels
{
    public class ExamScheduleStandardVM
    {
        public int ExamScheduleStandardId { get; set; }
        
        public string? StandardName { get; set; }
        public string? ExamScheduleName { get; set; }
        public IEnumerable<ExamSubjectVM>? ExamSubjects { get; set; } = [];
    }
}
