import formatDate from '../utils/formatDate'

export default function ArticleCard({title, author, top, created_at}) {
    return (
        <article class = 'article_card' >
            <h3 id ='title'>{title}</h3>
            <p id = 'cardAuthor'>{author}</p>
            <p>{top}</p>
            <p>{formatDate(created_at)}</p>
        </article>
    )
}