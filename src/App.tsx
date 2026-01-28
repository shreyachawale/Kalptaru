import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseSchedules from './pages/CourseSchedules';
import ELearning from './pages/ELearning';
import TuitionFees from './pages/TuitionFees';
import EnrollmentForm from './pages/EnrollmentForm';
import UploadResume from './pages/UploadResume';
import DownloadBrochure from './pages/DownloadBrochure';
import Consultancy from './pages/Consultancy';
import PublishingMedia from './pages/PublishingMedia';
import GemTestingLab from './pages/GemTestingLab';
import JewelleryPortal from './pages/JewelleryPortal';
import EnquiryForm from './pages/EnquiryForm';
import CSR from './pages/CSR';
import Blog from './pages/Blog';
import Login from './pages/Login';
import PostGraduateDegree from './pages/PostGraduateDegree';
import DiplomaCourse from './pages/DiplomaCourse';
import DegreeCourses from './pages/DegreeCourses';
import CertificateCourses from './pages/CertificateCourses';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'landing';
      setCurrentPage(hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <Landing />;
      case 'about':
        return <About />;
      case 'courses':
        return <Courses />;
      case 'course-schedules':
        return <CourseSchedules />;
      case 'e-learning':
        return <ELearning />;
      case 'tuition-fees':
        return <TuitionFees />;
      case 'enrollment-form':
        return <EnrollmentForm />;
      case 'upload-resume':
        return <UploadResume />;
      case 'download-brochure':
        return <DownloadBrochure />;
      case 'consultancy':
        return <Consultancy />;
      case 'publishing-media':
        return <PublishingMedia />;
      case 'gem-testing-lab':
        return <GemTestingLab />;
      case 'jewellery-portal':
        return <JewelleryPortal />;
      case 'enquiry-form':
        return <EnquiryForm />;
      case 'csr':
        return <CSR />;
      case 'blog':
        return <Blog />;
      case 'login':
        return <Login />;
      case 'post-graduate-degree':
        return <PostGraduateDegree />;
      case 'diploma-course':
        return <DiplomaCourse />;
      case 'degree-courses':
        return <DegreeCourses />;
      case 'certificate-courses':
        return <CertificateCourses />;
      default:
        return <Landing />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
