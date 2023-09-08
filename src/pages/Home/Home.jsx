import { Card } from "../../components/Cards/Card"
import { getAllNews, getTopNew } from "../../services/postsServices"
import { HomeBody, HomeHeader } from "./HomeStyled"
import { useEffect, useState } from "react"

export function Home() {
    const [news, setNews] = useState([])
    const [topNew, setTopNew] = useState({})

    async function findNews() {
        const newsResponse = await getAllNews()
        setNews(newsResponse.data.results)

        const topNewsResponse = await getTopNew()
        setTopNew(topNewsResponse.data.news)
    }

    useEffect(() => {
        findNews()
    }, [])

    // Remove do array a primeira notícia em destaque
    delete news[0]

    return (
        <>
            <HomeHeader>
                <Card
                    top={true}
                    title={topNew.title}
                    text={topNew.text}
                    banner={topNew.banner}
                    likes={topNew.likes}
                    comments={topNew.comments}
                />
            </HomeHeader>
            <HomeBody>
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
            </HomeBody>
        </>
    )
}
