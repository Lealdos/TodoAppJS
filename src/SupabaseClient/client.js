/* eslint-disable no-unused-vars */
import { createClient } from "@supabase/supabase-js";
const url = import.meta.env.VITE_URL_DATABASE
const apiKey=import.meta.env.VITE_API_KEY
  
export const supabase = createClient(url, apiKey);

