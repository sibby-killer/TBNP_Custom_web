const ERPNEXT_URL = process.env.ERPNEXT_URL || 'http://localhost:8080';

interface FetchOptions {
  method?: string;
  body?: Record<string, unknown>;
  headers?: Record<string, string>;
}

async function erpnextFetch(endpoint: string, options: FetchOptions = {}) {
  const { method = 'GET', body, headers = {} } = options;

  const defaultHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...headers,
  };

  // Add API key auth if available
  const apiKey = process.env.ERPNEXT_API_KEY;
  const apiSecret = process.env.ERPNEXT_API_SECRET;
  if (apiKey && apiSecret) {
    defaultHeaders['Authorization'] = `token ${apiKey}:${apiSecret}`;
  }

  const response = await fetch(`${ERPNEXT_URL}/api/${endpoint}`, {
    method,
    headers: defaultHeaders,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`ERPNext API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// Student APIs
export async function getStudent(user: string) {
  const data = await erpnextFetch(`resource/Student?filters=[["user","=","${user}"]]&limit_page_length=1`);
  return data.data?.[0] || null;
}

export async function getStudentEnrollment(student: string) {
  const data = await erpnextFetch(`resource/Program Enrollment?filters=[["student","=","${student}"]]&order_by=creation desc&limit_page_length=1`);
  return data.data?.[0] || null;
}

export async function getStudentCourses(enrollment: string) {
  const data = await erpnextFetch(`resource/Program Enrollment Course?filters=[["parent","=","${enrollment}"]]&fields=["course","course_name"]`);
  return data.data || [];
}

export async function getStudentFees(student: string) {
  const data = await erpnextFetch(`resource/Fees?filters=[["student","=","${student}"]]&order_by=creation desc&fields=["name","total_amount","paid_amount","outstanding_amount","posting_date"]`);
  return data.data || [];
}

// Staff APIs
export async function getEmployee(user: string) {
  const data = await erpnextFetch(`resource/Employee?filters=[["user_id","=","${user}"]]&limit_page_length=1`);
  return data.data?.[0] || null;
}

export async function getEmployeeDetails(name: string) {
  const data = await erpnextFetch(`resource/Employee/${name}`);
  return data.data || null;
}

export async function getStaffCourses(employee: string) {
  const data = await erpnextFetch(`resource/Course Instructor?filters=[["employee","=","${employee}"]]&fields=["course","course_name"]`);
  return data.data || [];
}

// Admin APIs
export async function getStudentCount() {
  const data = await erpnextFetch('resource/Student?fields=["name(*)"]&limit_page_length=0');
  return data.data?.length || 0;
}

export async function getEmployeeCount() {
  const data = await erpnextFetch('resource/Employee?fields=["name(*)"]&limit_page_length=0');
  return data.data?.length || 0;
}

export async function getProgramCount() {
  const data = await erpnextFetch('resource/Program?fields=["name(*)"]&limit_page_length=0');
  return data.data?.length || 0;
}

export async function getCourseCount() {
  const data = await erpnextFetch('resource/Course?fields=["name(*)"]&limit_page_length=0');
  return data.data?.length || 0;
}

export async function getAllStudents(limit = 20) {
  const data = await erpnextFetch(`resource/Student?fields=["name","student_name","student_email_id","program"]&limit_page_length=${limit}&order_by=creation desc`);
  return data.data || [];
}

export async function getAllEmployees(limit = 20) {
  const data = await erpnextFetch(`resource/Employee?fields=["name","employee_name","department","designation"]&limit_page_length=${limit}&order_by=creation desc`);
  return data.data || [];
}

export async function getAllPrograms() {
  const data = await erpnextFetch('resource/Program?fields=["name","program_name"]&limit_page_length=0');
  return data.data || [];
}

export async function getAllCourses() {
  const data = await erpnextFetch('resource/Course?fields=["name","course_name"]&limit_page_length=0');
  return data.data || [];
}

// Fee Management
export async function getAllFees(limit = 20) {
  const data = await erpnextFetch(`resource/Fees?fields=["name","student","student_name","total_amount","paid_amount","outstanding_amount","posting_date"]&limit_page_length=${limit}&order_by=creation desc`);
  return data.data || [];
}

export async function getFeeStructures() {
  const data = await erpnextFetch('resource/Fee Structure?fields=["name","program","fee_amount"]&limit_page_length=0');
  return data.data || [];
}

// Authentication helper - validates session
export async function validateSession(cookie: string) {
  try {
    const response = await fetch(`${ERPNEXT_URL}/api/method/frappe.auth.get_logged_user`, {
      headers: {
        Cookie: cookie,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data.message;
    }
    return null;
  } catch {
    return null;
  }
}

export { ERPNEXT_URL };
