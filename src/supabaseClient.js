import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Helps catch misconfiguration during development
  // Do not ship secrets in code.
  console.warn('Supabase env vars missing: REACT_APP_SUPABASE_URL or REACT_APP_SUPABASE_ANON_KEY');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,        // do not persist between reloads
    autoRefreshToken: true,       // keep tokens fresh while tab is open
    detectSessionInUrl: true,
  },
});

// dev log (sanitized)
if (process.env.NODE_ENV === 'development') {
  console.log('[supabase]', {
    url: supabaseUrl,
    keyPreview: supabaseAnonKey ? `${supabaseAnonKey.slice(0, 6)}…${supabaseAnonKey.slice(-6)}` : 'missing',
  });
}