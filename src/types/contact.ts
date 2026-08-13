export interface ContactMessageRow {
	id: string;
	name: string;
	email: string;
	message: string;
	user_id: string | null;
	created_at: string;
}