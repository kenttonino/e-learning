import Head from '../components/Head';
import NavbarTemplate from '../components/NavbarTemplate';
import Profile from '../features/profile/Profile';

export default function ProfilePage() {

  return (
    <>
      <Head title="Profile | E-Learning System" />

      <NavbarTemplate navClass="navbar navbar-expand-lg navbar-light bg-white wrapper fixed-top profileNavigation" />

      <Profile />
    </>
  );
};
