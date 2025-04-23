import { createClient } from "@supabase/supabase-js";
import { PUBLIC_SUPABASE_URL } from "$env/static/public"
import { SUPABASE_ADMIN_KEY } from "$env/static/private";

const supabaseUrl = PUBLIC_SUPABASE_URL;
const supabaseAdminKey = SUPABASE_ADMIN_KEY;

export const supabaseAdmin = createClient(supabaseUrl, supabaseAdminKey);