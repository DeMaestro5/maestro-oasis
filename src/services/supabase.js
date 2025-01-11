import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://gvpzgxgubhhawenqhodp.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2cHpneGd1YmhoYXdlbnFob2RwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1OTk5ODcsImV4cCI6MjA1MjE3NTk4N30.Zx7FOfZ_tJgCvY6ahTuclXWg4-3iH_RmjVg9IDRsq3U';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
// Compare this snippet from starter/services%20copy/apiSettings.j
