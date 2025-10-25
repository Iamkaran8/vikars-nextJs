'use client';

import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { useEffect, ComponentType, FC } from "react";

export function withAuth<P extends object>(WrappedComponent: ComponentType<P>): FC<P> {
  const Wrapper: FC<P> = (props) => {
    const router = useRouter();
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    useEffect(() => {
      if (!isAuthenticated) {
        router.push("/admin/login");
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) return null;

    return <WrappedComponent {...props} />;
  };

  Wrapper.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return Wrapper;
}
