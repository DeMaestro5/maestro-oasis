import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://ovupsjohmrucsrtbocgu.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92dXBzam9obXJ1Y3NydGJvY2d1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1ODQxODAsImV4cCI6MjA0OTE2MDE4MH0.VkoNfCU1oOP5LjpJrL1ufY7reQTLIAMYlLebTN3kdQk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
// Compare this snippet from starter/services%20copy/apiSettings.j
