export type Session = {
  userId: string;
  orgId: string;
  roles: string[];
};

/**
 * Placeholder auth helpers. Wire in NextAuth, Clerk, or custom SSO later.
 */
export async function getSession(): Promise<Session> {
  // TODO: connect to real auth provider.
  return {
    userId: "user_mock",
    orgId: "org_mock",
    roles: ["admin"],
  };
}

export function assertRole(session: Session, role: string) {
  if (!session.roles.includes(role)) {
    throw new Error(`Missing role ${role}`);
  }
}
