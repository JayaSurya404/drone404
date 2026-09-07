import "server-only";

import { createClient } from "@supabase/supabase-js";

import { getAdminSupabaseEnvironment } from "@/config/environment";

/** Server-only administrative client. Never import this module into client code. */
export function createAdminClient() {
  const { NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = getAdminSupabaseEnvironment();

  return createClient(NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
