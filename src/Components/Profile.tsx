import Card from './Card';
import AvatarHeader from './AvatarHeader';

type ProfileProps = {
  initials: string;
  name: string;
  role: string;
  bio: string;
};

function Profile({ initials, name, role, bio }: ProfileProps) {
  return (
    <Card className="profile-card">
      <AvatarHeader initials={initials} title={name} meta={role} label="Profile" />
      <p>{bio}</p>
    </Card>
  );
}

export default Profile;
