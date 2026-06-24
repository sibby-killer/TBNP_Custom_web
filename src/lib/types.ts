export interface Student {
  name: string;
  student_name: string;
  student_email_id?: string;
  program?: string;
  image?: string;
}

export interface Employee {
  name: string;
  employee_name: string;
  department?: string;
  designation?: string;
  user_id?: string;
}

export interface Program {
  name: string;
  program_name: string;
}

export interface Course {
  name: string;
  course_name: string;
}

export interface Fee {
  name: string;
  student: string;
  student_name: string;
  total_amount: number;
  paid_amount: number;
  outstanding_amount: number;
  posting_date: string;
}

export interface Enrollment {
  name: string;
  student: string;
  program: string;
  academic_year?: string;
  academic_term?: string;
}

export interface CourseEnrollment {
  course: string;
  course_name: string;
}

export type UserRole = 'student' | 'staff' | 'admin';
