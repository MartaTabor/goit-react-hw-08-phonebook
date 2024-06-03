import { UserNavigation } from 'components/UserNavigation/UserNavigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { HomeNavigation } from 'components/HomeNavigation/HomeNavigation';
import { useAuth } from 'hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <UserNavigation />
      {isLoggedIn ? <UserMenu /> : <HomeNavigation />};
    </header>
  );
};
