import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey =
  process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) {
  throw new Error("Missing SUPABASE_URL in backend environment");
}

if (!supabaseServiceKey) {
  throw new Error(
    "Missing SUPABASE_SECRET_KEY (or SUPABASE_SERVICE_ROLE_KEY) in backend environment"
  );
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
