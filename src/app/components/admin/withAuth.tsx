'use client';

import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const Wrapper = (props: any) => {
    const router = useRouter();
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    useEffect(() => {
      // Check if user is authenticated
      if (!isAuthenticated) {
        // Redirect to login page if not authenticated
        router.push('/admin/login');
      }
    }, [isAuthenticated, router]);

    // If not authenticated, return null to prevent rendering
    if (!isAuthenticated) {
      return null;
    }

    // If authenticated, render the wrapped component
    return <WrappedComponent {...props} />;
  };

  // Set display name for debugging
  Wrapper.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return Wrapper;
};