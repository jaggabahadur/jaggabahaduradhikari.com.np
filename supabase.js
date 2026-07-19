import { createClient } from "https://esm.sh/@supabase/supabase-js";

const supabaseUrl = "https://ogidwfpxpfbpjippefow.supabase.co/rest/v1/";
const supabaseKey = "sb_publishable_6D8b9LnY9si0vXszHonL1Q_BCMZtYi3";

export const supabase = createClient(supabaseUrl, supabaseKey);
