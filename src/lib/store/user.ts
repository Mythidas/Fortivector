import type { User } from "@supabase/supabase-js";
import { writable } from 'svelte/store';

export const user = writable<User | undefined>(undefined);
export const tenantID = writable<string | undefined>(undefined);