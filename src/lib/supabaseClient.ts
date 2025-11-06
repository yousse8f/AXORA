import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://pvvjvdhqdwfazbcpjkez.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2dmp2ZGhxZHdmYXpiY3Bqa2V6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0MTI3MTksImV4cCI6MjA3Nzk4ODcxOX0.RUqo7EtgCzKRewXC4gvT4sPM25A40fzn8cEgQ_rFuvM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
