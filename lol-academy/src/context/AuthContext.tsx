import type { User } from "@supabase/supabase-js";
import React, { createContext, useContext, useEffect, useState } from "react";
import supabase from "../lib/supabase";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/profile";
interface Profile {
  id: string;
  username: string;
  xp: number;
  streak: number;
  last_played: string | null;
  avatar: string | null;
}
interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  authLoading: boolean;
  profile: Profile | null;
  profileLoading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoggedIn: false,
  authLoading: true,
  profile: null,
  profileLoading: false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const {
    data: profile,
    isLoading: profileLoading,
    error,
  } = useQuery({
    queryKey: ["profile", user?.id],
    queryFn: () => getProfile(user!.id),
    enabled: !!user,
  });

  useEffect(() => {
    const getInitialSession = async () => {
      setAuthLoading(true);

      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        console.error("Error getting session:", error.message);
        setUser(null);
      } else {
        setUser(session?.user ?? null);
      }

      setAuthLoading(false);
    };

    getInitialSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setAuthLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        authLoading,
        profile: profile ?? null,
        profileLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
