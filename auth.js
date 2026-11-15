const supabaseUrl = 'https://yljtjmzepidwinjijgxu.supabase.co'
const supabaseKey = 'sb_publishable_6KKMzNrIAjcvMKsnBmAhgA_bv5OOIfn'
if (window.supabase?.createClient) {
  window.hackflowSupabase = window.supabase.createClient(supabaseUrl, supabaseKey)
} else {
  console.error('Не удалось загрузить библиотеку авторизации.')
}
