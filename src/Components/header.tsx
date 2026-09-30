import Button from './Button';
import TopBar from './TopBar';

function Header() {
  return (
    <TopBar title="Student Dashboard">
      <Button to="/profile">View profile</Button>
    </TopBar>
  );
}

export default Header;
