import formatDate from '../utils/formatDate'

export default function ArticleCard({article}) {
    return (
        <article className = 'article_card'>
            <h3 id ='title'>{article.title}</h3>
            <p id = 'cardAuthor'>{article.author}</p>
            <p>{article.topic}</p>
            <p>{formatDate(article.created_at)}</p>
        </article>
    )
}