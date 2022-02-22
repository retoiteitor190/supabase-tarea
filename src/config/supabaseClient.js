import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://vwqvhzsfnpxzajveaags.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3cXZoenNmbnB4emFqdmVhYWdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDU0MDUxNzAsImV4cCI6MTk2MDk4MTE3MH0.uBOxXh-QqpGiE76at0p5-4xf_WgqnOM5j6F0hmbdCFg"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)