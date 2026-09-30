import Header from "../Components/header";
import Scard from "../Components/Scard";
import CourseCard from "../Components/CourseCard";

function DashboardPage() {
  const student = {
    initials: "M",
    name: "Mohamed",
    major: "Computer Science student",
    year: 3,
  };

  return (
    <div className="app-page">
      <Header />

      <main className="dashboard-content">
        <Scard
          initials={student.initials}
          name={student.name}
          major={student.major}
          year={student.year}
        />
        <CourseCard />
      </main>
    </div>
  );
}

export default DashboardPage;
