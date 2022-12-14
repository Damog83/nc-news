import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import formatText from '../../utils/formatText';

export default function SortArticles(props) {
	const [selectedSort, setSelectedSort] = useState('created_at');
	const [selectedOrder, setSelectedOrder] = useState('desc');
	const [, setParams] = useSearchParams({
		sort: `${selectedSort}`,
		order: `${selectedOrder}`,
	});
	const sortQueries = ['created_at', 'votes', 'comment_count'];

	useEffect(() => {
		setParams({ sort: `${selectedSort}`, order: `${selectedOrder}` });
	}, [selectedSort, selectedOrder, setParams]);

	const selectQuery = (event) => {
		setSelectedSort(event.target.value);
	};

	const orderQuery = (event) => {
		setSelectedOrder(event.target.value);
	};

	return (
		<>
			<label>
				<select className="select-menu" onChange={selectQuery} defaultValue="created_at">
					{sortQueries.map((query) => {
						if (query === 'created_at')
							return (
								<option key="Date" value={query}>
									Date
								</option>
							);
						return (
							<option value={query} key={`${query}`}>
								{formatText(`${query}`)}
							</option>
						);
					})}
				</select>
			</label>
			<label>
				<select className="select-menu" onChange={orderQuery} defaultValue="desc">
					<option key="Descending" value="desc">
						Descending
					</option>
					<option key="Ascending" value="asc">
						Ascending
					</option>
				</select>
			</label>
		</>
	);
}
