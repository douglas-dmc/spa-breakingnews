import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { searchNews } from "../../services/postsServices"
import { ContainerResults, SearchNews, TextResults } from "./SearchStyled"
import { Card } from "../../components/Cards/Card"

export function Search() {
    const { title } = useParams()
    const [news, setNews] = useState([])

    async function search() {
        try {
            const newsApi = await searchNews(title)
            setNews(newsApi.data.results)
        } catch (error) {
            console.log(error)
            setNews([])
        }
    }

    useEffect(() => {
        search()
    }, [title])

    return (
        <>
            <ContainerResults>
                <TextResults>
                    <span>
                        {news.length
                            ? `Encontramos ${news.length} ${
                                  news.length > 1 ? "resultados" : "resultado"
                              } para : ${title}`
                            : `Não encontramos resultados para:  ${title}`}
                    </span>
                </TextResults>
                <SearchNews>
                    {news.map((item) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            text={item.text}
                            banner={item.banner}
                            likes={item.likes}
                            comments={item.comments}
                        />
                    ))}
                </SearchNews>
            </ContainerResults>
        </>
    )
}
