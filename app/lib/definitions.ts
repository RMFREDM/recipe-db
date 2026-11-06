// define a type for User objects
export type User = {
	id: string;
	name: string;
	email: string;
	password: string;
};

// define a type for Recipe objects
export type Recipe = {
	id: string;
	name: string;
	ingredients: string;
	steps: string;
	userid: string;
};
