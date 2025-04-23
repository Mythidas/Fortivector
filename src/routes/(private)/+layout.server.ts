import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals: { safeGetSession, supabase }, cookies }) => {
  const { session } = await safeGetSession();
  if (!session) redirect(301, "/auth/login");

  return {
    session,
    cookies: cookies.getAll(),
  }
}