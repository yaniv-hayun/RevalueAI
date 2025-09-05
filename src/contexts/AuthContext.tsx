import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  picture?: string;
  loginTime?: number;
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on app load
    const savedUser = localStorage.getItem('fraudAppUser');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        // Check if session is still valid (24 hours)
        const sessionDuration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
        const now = Date.now();
        
        if (userData.loginTime && (now - userData.loginTime) < sessionDuration) {
          setUser(userData);
        } else {
          // Session expired, clear it
          localStorage.removeItem('fraudAppUser');
        }
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('fraudAppUser');
      }
    }
    setLoading(false);
  }, []);

  const login = (userData: User) => {
    const userWithTimestamp = {
      ...userData,
      loginTime: Date.now()
    };
    setUser(userWithTimestamp);
    localStorage.setItem('fraudAppUser', JSON.stringify(userWithTimestamp));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('fraudAppUser');
  };

  // Refresh session on user activity
  useEffect(() => {
    if (!user) return;

    const refreshSession = () => {
      const savedUser = localStorage.getItem('fraudAppUser');
      if (savedUser) {
        try {
          const userData = JSON.parse(savedUser);
          const updatedUser = {
            ...userData,
            loginTime: Date.now()
          };
          localStorage.setItem('fraudAppUser', JSON.stringify(updatedUser));
        } catch (error) {
          console.error('Error refreshing session:', error);
        }
      }
    };

    // Refresh session every 30 minutes
    const interval = setInterval(refreshSession, 30 * 60 * 1000);

    // Refresh session on user activity
    const handleActivity = () => {
      refreshSession();
    };

    window.addEventListener('click', handleActivity);
    window.addEventListener('keypress', handleActivity);
    window.addEventListener('scroll', handleActivity);

    return () => {
      clearInterval(interval);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('keypress', handleActivity);
      window.removeEventListener('scroll', handleActivity);
    };
  }, [user]);

  const value = {
    user,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
