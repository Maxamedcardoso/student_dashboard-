import Card from './Card';
import AvatarHeader from './AvatarHeader';

type ScardProps = {
  initials: string;
  name: string;
  major: string;
  year: number;
};

function Scard({ initials, name, major, year }: ScardProps) {
  return (
    <Card className="student-card">
      <AvatarHeader initials={initials} title={name} />
      <p>{major}</p>
      <p className="meta">Year: {year}</p>
    </Card>
  );
}

export default Scard;
