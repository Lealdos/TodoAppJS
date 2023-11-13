import { createClient } from "@supabase/supabase-js";
import { Auth } from '@supabase/auth-ui-react'
import {
    // Import predefined theme
    ThemeSupa,
  } from '@supabase/auth-ui-shared'
  
export const supabase = createClient(import.meta.env.URL_DATABASE, import.meta.env.API_KEY);

const App = () => <Auth supabaseClient={supabase} />