import { z } from "zod";
import type { Actions, PageServerLoad } from "./$types";
import { setError, superValidate } from "sveltekit-superforms/server";
import { fail, redirect } from "@sveltejs/kit";

const registerUserSchema = z.object({
  username: z
    .string()
    .max(30, "Username must have 30 or less characters")
    .nullish(),
  email: z
    .string()
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(6, "Password must have 6 or more characters")
    .max(100, "Password must have 100 or less characters"),
  confirmPassword: z
    .string()
    .min(6, "Password must have 6 or more characters")
    .max(100, "Password must have 100 or less characters"),
});

export const load: PageServerLoad = async (event) => {
  const session = await event.locals.getSession()

  if (session) {
    throw redirect(302, "/")
  }
  
  return {
    form: superValidate(registerUserSchema)
  }
};

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, registerUserSchema)

    if (!form.valid) {
      return fail(400, {
        form
      })
    }

    if (form.data.password != form.data.confirmPassword) {
      return setError(form, "confirmPassword", "Passwords do not match")
    }

    // console.log(form.data)

    const { error: authError } = await event.locals.supabase.auth.signUp({
      email: form.data.email,
      password: form.data.password,
      options: {
        data: {
          username: form.data.username ?? ''
        }
      }
    })

    if (authError) {
      return setError(form, "username", "An error occurred while registering. Please try again later.")
    }

    return {
      form,
    }
  }
};