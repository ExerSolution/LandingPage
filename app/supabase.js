import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase project URL and API key
const supabaseUrl = 'https://rwqchaotxwcftswcfrmp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3cWNoYW90eHdjZnRzd2Nmcm1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUyNzUzNDYsImV4cCI6MjAxMDg1MTM0Nn0.FOqdieXtS-JeEM4EbHAkIw1s6HhryEZkt0sFIbixa2Q';

// Initialize the Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
