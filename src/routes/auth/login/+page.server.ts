import { fail, redirect } from '@sveltejs/kit'

import type { Actions } from './$types'

export const actions: Actions = {
  signup: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()
    const email = formData.get('Email') as string
    const password = formData.get('Password') as string

    const { error } = await supabase.auth.signUp({ email, password })
    if (error) {
      return fail(401, { error: error.message })
    } else {
      redirect(303, '/dashboard')
    }
  },
  login: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()
    const email = formData.get('Email') as string
    const password = formData.get('Password') as string

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      console.log(error);
      return fail(504, { error: error.message })
    } else {
      redirect(303, '/dashboard')
    }
  },
}