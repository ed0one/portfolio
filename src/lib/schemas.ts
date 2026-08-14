import { z } from "zod";

export const contactSchema = z.strictObject({
	name: z
		.string()
		.trim()
		.min(2, "Please enter your name.")
		.max(120, "Name must be under 120 characters.")
		.regex(/^[^\r\n]+$/, "Name must be a single line."),
	email: z.string().trim().email("Please enter a valid email address."),
	message: z
		.string()
		.trim()
		.min(10, "Message must be at least 10 characters.")
		.max(5000, "Message must be under 5000 characters."),
});

export type ContactMessageInput = z.infer<typeof contactSchema>;