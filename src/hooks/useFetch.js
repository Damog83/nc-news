import { useState, useEffect } from 'react';

export default function useFetch(fetch, key) {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		let subscribed = true;

		fetch()
			.then((response) => {
				if (subscribed) {
					setData(response.data[key]);
					setIsLoading(false);
				}
			})
			.catch((err) => {
				setError({ err });
			});
		return () => {
			subscribed = false;
		};
	}, [fetch, key]);

	return { data, error, isLoading };
}
