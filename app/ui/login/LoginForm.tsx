export default function LoginForm() {
	return (
		<div className="flex justify-center">
			<form
				id="login-form"
				className="grid grid-cols-1 grid-rows-3 gap-2 w-fit p-1 m-4"
			>
				<label htmlFor="email">Email</label>
				<input type="email" id="email" className="border"></input>
				<label htmlFor="password">Password</label>
				<input type="password" id="password" className="border"></input>
				<button
					type="submit"
					className="bg-gray-300 active:bg-gray-500 border rounded-sm p-1 pr-2 pl-2 m-2"
				>
					Login
				</button>
			</form>
		</div>
	);
}
