import { z } from "zod";
import type { PageServerLoad, Actions } from "./$types";
import { setError, superValidate } from "sveltekit-superforms/server";
import { fail, redirect } from "@sveltejs/kit";
import { AuthApiError } from "@supabase/supabase-js";

const loginUserSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password cannot be empty"),
})

export const load: PageServerLoad = async (event) => {
  const session = await event.locals.getSession()

  if (session) {
    throw redirect(302, "/")
  }
  
  return {
    form: superValidate(loginUserSchema)
  }
};

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, loginUserSchema)

    if (!form.valid) {
      return fail(400, {
        form
      })
    }

    const { error: authError } = await event.locals.supabase.auth.signInWithPassword(form.data)

    if (authError) {
      if (authError instanceof AuthApiError && authError.status === 400) {
        setError(form, "email", "Invalid email or password")
        setError(form, "password", "Invalid email or password")
        return fail(400, {
          form
        })
      }
    }
    throw redirect(302, "/")
  }

}