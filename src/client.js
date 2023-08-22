import { createClient } from '@supabase/supabase-js';

const URL = 'https://dcksspxoundtlznbezpx.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRja3NzcHhvdW5kdGx6bmJlenB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIzNDUzNjcsImV4cCI6MjAwNzkyMTM2N30.Pv5dU81HmyUZEDNOasYXqSUCVMD7FpYx_Rp4RAcY8Mg';

// Create the Supabase client
const supabase = createClient(URL, API_KEY);

export default supabase; // Export the supabase client