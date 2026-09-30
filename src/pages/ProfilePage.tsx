import Button from "../Components/Button";
import Profile from "../Components/Profile";
import TopBar from "../Components/TopBar";

function ProfilePage() {
  const profile = {
    initials: "MC",
    name: "MOH CARDOSO",
    role: "Software Engineer",
    bio: "MC is a passionate software engineer with experience in React and Node.js.",
  };

  return (
    <div className="app-page">
      <TopBar title="Profile" eyebrow="Student Portal">
        <Button to="/">Back to dashboard</Button>
      </TopBar>

      <main className="dashboard-content">
        <Profile
          initials={profile.initials}
          name={profile.name}
          role={profile.role}
          bio={profile.bio}
        />
      </main>
    </div>
  );
}

export default ProfilePage;
