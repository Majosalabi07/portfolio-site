import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const { user, role, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        setLocation('/login');
      } else if (role === 'teacher') {
        setLocation('/teacher/dashboard');
      } else if (role === 'school') {
        setLocation('/school/dashboard');
      }
    }
  }, [user, role, loading, setLocation]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  if (!role || (role !== 'teacher' && role !== 'school')) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <p className="text-xl font-semibold text-foreground mb-2">Invalid User Role</p>
          <p className="text-muted-foreground mb-6">
            Your account doesn't have a valid role assigned. Please contact support or try signing up again.
          </p>
          <Button
            onClick={async () => {
              await supabase.auth.signOut();
              setLocation('/login');
            }}
            data-testid="button-logout"
          >
            Sign Out
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-muted-foreground">Redirecting...</p>
      </div>
    </div>
  );
}
