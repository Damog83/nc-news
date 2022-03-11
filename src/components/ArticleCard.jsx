import formatDate from '../utils/formatDate'
import {Link} from 'react-router-dom'

export default function ArticleCard({article}) {
    return (
        <article className = 'article_card'>
            <h3>
            <nav>
            <Link className = 'articleListArticleTitle' to = {`/articles/article/${article.article_id}`}>{article.title}</Link>
            </nav>
            </h3>
            <p id = 'cardAuthor'>{article.author}</p>
            <p className = {`topic${article.topic}`}>{article.topic}</p>
            <p>{formatDate(article.created_at)}</p>
        </article>
    )
}