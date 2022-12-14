import { useParams , useSearchParams} from 'react-router-dom';
import { fetchArticles } from '../../services/Api';
import ArticleCard from './ArticleCard';
import SortArticles from './SortArticles';
import ErrorPage from '../Error/ErrorPage';
import useFetch from '../../hooks/useFetch';
import { useCallback } from 'react';

export default function ArticlesList() {
	const [params] = useSearchParams();
	const sort = params.get('sort');
	const order = params.get('order');
	const { topic } = useParams();

	const fetch = useCallback(() => {
		return fetchArticles(topic, sort, order);
	}, [topic, sort, order]);

	const { data : articles, error, isLoading } = useFetch(fetch, 'articles');

	if (error) return <ErrorPage error={error} />;
	if (isLoading) return <p>Loading...</p>;
	return (
		<ul>
			<li key="sort">
				<SortArticles key="sortArticles" />
			</li>
			{articles.map((article) => {
				return (
					<li key={article.article_id}>
						<ArticleCard article={article} />
					</li>
				);
			})}
		</ul>
	);
}
