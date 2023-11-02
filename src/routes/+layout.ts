import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from "$env/static/public";
import type { Database } from "$lib/supabase-types";
import type { LayoutLoad } from "./$types";
import { createSupabaseLoadClient } from "@supabase/auth-helpers-sveltekit";

export const load: LayoutLoad = async ({ fetch, data, depends }) => {
  /*
   * A load function depends on URL if it is called in a fetch() or depends(). 
   * That URL can be a custom identifier and Invalidating the URL will 
   * cause the load function to run again.
   * https://kit.svelte.dev/docs/load#rerunning-load-functions-manual-invalidation
   */
  depends("supabase:auth")

  const supabase = createSupabaseLoadClient<Database>({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,

    // I have no idea why fetch needs to be passed in as an object, only that the parameter
    // type definition uses TS's Pick utility type to pull it out of the LoadEvent type.
    event: { fetch },
    serverSession: data.session,
  })

  const {
    data: {session},
  } = await supabase.auth.getSession()

  return {
    supabase,
    session
  }
}