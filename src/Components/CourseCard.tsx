import Card from './Card';

function CourseCard() {
  return (
    <Card className="course-card">
      <div className="course-row">
        <h3>React</h3>
        <span className="status-pill">In progress</span>
      </div>
      <p>Progress: 50%</p>
      <div className="progress-bar">
        <span className="progress-fill"></span>
      </div>
    </Card>
  );
}

export default CourseCard;
