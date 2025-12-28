"use server"

import { Resend } from 'resend';
import { contactSchema } from '@/lib/validations/contact';

// Initialize Resend with your API Key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: any) {
  // 1. Validate the data
  const validatedFields = contactSchema.safeParse(formData);

  if (!validatedFields.success) {
    return { success: false, message: "Invalid fields." };
  }

  const { name, email, message } = validatedFields.data;

  try {
    // 2. Send the email
    await resend.emails.send({
      from: 'Agency Contact <onboarding@resend.dev>', // Resend provides this for testing
      to: 'nuhelahmed768@gmail.com', // 👈 PUT YOUR EMAIL HERE
      subject: `New Project Inquiry from ${name}`,
      replyTo: email,
      html: `
        <h3>New Message from your Website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return { success: true, message: "Message sent! I'll get back to you soon." };
  } catch (error) {
    return { success: false, message: "Failed to send message. Please try again." };
  }
}