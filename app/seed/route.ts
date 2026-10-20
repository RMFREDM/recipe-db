import { bcrypt } from "bcrypt";
import postgres from "postgres";
const users = [
	{
		id: "410544b2-4001-4271-9855-fec4b6a6442a",
		name: "User",
		email: "user@nextmail.com",
		password: "123456",
	},
];

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });
let userCreator: string | null;
async function seedUsers() {
	await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
	await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

	const insertedUsers = await Promise.all(
		users.map(async (user) => {
			userCreator = user.id;
			const hashedPassword = await bcrypt.hash(user.password, 10);
			return sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
		}),
	);
	console.log("users inserted");

	return insertedUsers;
}

async function seedRecipes() {
	await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

	await sql`
    CREATE TABLE IF NOT EXISTS recipes (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      FOREIGN KEY user_id UUID,
      name VARCHAR(255) NOT NULL,
      image_id UUID,
      ingredients VARCHAR(255) NOT NULL,
      steps VARCHAR(255) NOT NULL,
    );
  `;

	const insertedRecipes = await sql`
        INSERT INTO recipes (user_id, name, ingredients, steps)
        VALUES (${userCreator}, ${"Spaghetti"}, )
        ON CONFLICT (id) DO NOTHING;
      `;

	return insertedRecipes;
}
export async function GET() {
	try {
		const result = await sql.begin((sql) => [seedUsers()]);

		return Response.json({ message: "Database seeded successfully" });
	} catch (error) {
		return Response.json(
			{ error: "An error occurred in the database" },
			{ status: 500 },
		);
	}
}
