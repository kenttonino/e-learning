import React from 'react';

import Head from '../components/Head';
import NavbarTemplate from '../components/NavbarTemplate';
import Dashboard from '../features/dashboard/Dashboard';

export default function DashboardPage() {
 
  return (
    <>
      <Head title="Dashboard | E-Learning System" />

      <NavbarTemplate navClass="navbar navbar-expand-lg navbar-light bg-white wrapper"/>

      <Dashboard />
    </>
  );
};
