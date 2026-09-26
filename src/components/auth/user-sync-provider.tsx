import { useEffect, useRef, type ReactNode } from "react";
import { useUser } from "@clerk/clerk-react";
import { userService } from "@/services/user-service";

interface UserSyncProviderProps {
  children?: ReactNode;
}

export function UserSyncProvider({ children }: UserSyncProviderProps) {
  const { user, isLoaded, isSignedIn } = useUser();
  const lastSyncedUserIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !user) {
      lastSyncedUserIdRef.current = null;
      return;
    }

    // Prevent duplicate sync within the same session for the same user
    if (lastSyncedUserIdRef.current === user.id) {
      return;
    }

    lastSyncedUserIdRef.current = user.id;

    userService
      .syncUser({
        id: user.id,
        email: user.primaryEmailAddress?.emailAddress,
        fullName: user.fullName || `${user.firstName || ""} ${user.lastName || ""}`.trim() || undefined,
      })
      .catch((err) => {
        console.warn("Failed to sync Clerk user with database:", err);
      });
  }, [isLoaded, isSignedIn, user]);

  return <>{children}</>;
}
