using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyFirstASPNetWebApp.Models
{
    public class GradeCalcModel
    {
        [Required]
        public int Assignments { get; set; }
        public int GroupProject { get; set; }
        public int Quiz { get; set; }
        public int MidtermExam { get; set; }
        public int FinalExam { get; set; }
        public int Intex { get; set; }
    }
}
