export default function ErrorPage(props) {
	const { error } = props;

	let errorMessage = error.err.response.data.msg;
	let errorStatus = error.err.request.status;

	return (
		<>
			<p>Error</p>
			<p>{errorMessage}</p>
			<p>{errorStatus}</p>
		</>
	);
}
