import { Auth } from "@supabase/auth-ui-react";
import './index.css'
import {
  // Import predefined theme
  ThemeSupa,
} from "@supabase/auth-ui-shared";
import { supabase } from "home/SupabaseClient/client";

export function AuthModal() {
  return (
    <div className="authbackground">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={["google" , 'github']}
        theme="dark" 
        magicLink
      />
    </div>
  );
}
