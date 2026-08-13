create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  user_id uuid default auth.uid(),
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

drop policy if exists "contact_messages_anon_insert" on public.contact_messages;
create policy "contact_messages_anon_insert"
  on public.contact_messages
  for insert
  to anon, authenticated
  with check (true);

drop policy if exists "contact_messages_owner_select" on public.contact_messages;
create policy "contact_messages_owner_select"
  on public.contact_messages
  for select
  to authenticated
  using (auth.uid() = user_id);