import { useState, useEffect } from 'react';

export type UserRole = 'user' | 'admin' | 'govt' | 'coordinator';

export const useUserRole = () => {
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem('userRole') as UserRole | null;
    setUserRole(storedRole);
  }, []);

  const updateRole = (role: UserRole) => {
    localStorage.setItem('userRole', role);
    setUserRole(role);
  };

  const logout = () => {
    localStorage.removeItem('userRole');
    setUserRole(null);
  };

  const getRoleDisplayName = () => {
    switch (userRole) {
      case 'user': return 'Athlete';
      case 'admin': return 'System Admin';
      case 'govt': return 'Government Official';
      case 'coordinator': return 'Sports Coordinator';
      default: return 'Guest';
    }
  };

  const getRoleColor = () => {
    switch (userRole) {
      case 'user': return 'bg-blue-500';
      case 'admin': return 'bg-red-500';
      case 'govt': return 'bg-green-500';
      case 'coordinator': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return {
    userRole,
    updateRole,
    logout,
    getRoleDisplayName,
    getRoleColor,
    isLoggedIn: !!userRole
  };
};