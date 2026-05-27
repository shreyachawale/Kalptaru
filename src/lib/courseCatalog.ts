export interface CourseDefinition {
  courseId: string;
  title: string;
  category: string;
  price: number;
}

export const courseCatalog: CourseDefinition[] = [
  { courseId: 'certificate-jewellery-photography', title: 'Jewellery Photography', category: 'Certificate', price: 4999 },
  { courseId: 'certificate-jewellery-hallmarking', title: 'Jewellery Hallmarking', category: 'Certificate', price: 4999 },
  { courseId: 'certificate-jewellery-online-marketing', title: 'Jewellery Online Marketing', category: 'Certificate', price: 5999 },
  { courseId: 'certificate-retail-sales', title: 'How to Retail Increase Sales?', category: 'Certificate', price: 3999 },
  { courseId: 'certificate-jewellery-accounting', title: 'Jewellery Accounting', category: 'Certificate', price: 5499 },
  { courseId: 'degree-gemology', title: 'Gemology', category: 'Degree', price: 29999 },
  { courseId: 'degree-manual-jewellery-design', title: 'Manual Jewellery Design', category: 'Degree', price: 34999 },
  { courseId: 'degree-cad-cam-designing', title: 'Computer Jewellery Designing with CAD Designing to CAM Development', category: 'Degree', price: 39999 },
  { courseId: 'degree-accounting-operations', title: 'Accounting Operations (Manufacturing to Retail)', category: 'Degree', price: 24999 },
  { courseId: 'degree-manufacturing-management', title: 'Manufacturing Management', category: 'Degree', price: 27999 },
  { courseId: 'degree-marketing-operations', title: 'Marketing Operations', category: 'Degree', price: 24999 },
  { courseId: 'diploma-jewellery-manufacturing', title: 'Diploma In Jewellery Manufacturing', category: 'Diploma', price: 19999 },
  { courseId: 'post-graduate-jewellery-management', title: 'Post Graduate Diploma In Jewellery Management', category: 'Post Graduate Degree', price: 49999 },
];

export function getCourse(courseId: string) {
  return courseCatalog.find((course) => course.courseId === courseId);
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
}
