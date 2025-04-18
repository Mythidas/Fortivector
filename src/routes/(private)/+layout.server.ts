import { redirect } from "@sveltejs/kit";
import { supabase } from "$lib/contexts/auth";
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals: { safeGetSession }, cookies }) => {
  const { session } = await safeGetSession();
  if (!session) redirect(301, "/auth/login");

  const data = await supabase.from('users').select();
  console.log(data);

  return {
    session,
    cookies: cookies.getAll(),
  }
}