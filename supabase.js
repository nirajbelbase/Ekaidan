const SUPABASE_URL = "https://biycswigcsyrehqvgffk.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpeWNzd2lnY3N5cmVocXZnZmZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxNDg2MzcsImV4cCI6MjA5MzcyNDYzN30.EDqEvza14bOJqNfmquIpqVeTAGVLLnyd7Jlim7xcM-4";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

window.supabaseClient = supabase;