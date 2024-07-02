import { sql } from '@vercel/postgres';
import { Date, User } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

// Fetch all date ideas for a given user
export async function fetchDatesByUserId(userId: string) {
  noStore();
  try {
    const data = await sql<Date>`SELECT * FROM dates WHERE user_id = ${userId}`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch date ideas.');
  }
}

// Fetch a specific user by their ID
export async function fetchUserById(userId: string) {
  noStore();
  try {
    const data = await sql<User>`SELECT * FROM users WHERE id = ${userId}`;
    if (data.rows.length === 0) {
      return null;
    }
    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user.');
  }
}

// Fetch all users
export async function fetchAllUsers() {
  noStore();
  try {
    const data = await sql<User>`SELECT * FROM users ORDER BY name ASC`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch users.');
  }
}

// Add a new date idea
export async function addDate(date: Date) {
  noStore();
  try {
    const { id, userId, name, description, image_url, status, letter } = date;
    await sql`
      INSERT INTO dates (id, user_id, name, description, image_url, status, letter)
      VALUES (${id}, ${userId}, ${name}, ${description}, ${image_url}, ${status}, ${letter})
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to add date idea.');
  }
}

// Update an existing date idea
export async function updateDate(date: Date) {
  noStore();
  try {
    const { id, name, description, image_url, status, letter } = date;
    await sql`
      UPDATE dates
      SET name = ${name}, description = ${description}, image_url = ${image_url}, status = ${status}, letter = ${letter}
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to update date idea.');
  }
}

// Delete a date idea
export async function deleteDate(dateId: string) {
  noStore();
  try {
    await sql`DELETE FROM dates WHERE id = ${dateId}`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to delete date idea.');
  }
}
