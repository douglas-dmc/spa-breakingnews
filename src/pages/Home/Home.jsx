import { Card } from "../../components/Cards/Card"
import { Navbar } from "../../components/Navbar/Navbar"
import { getAllNews, getTopNews } from "../../services/postsServices"
import { HomeBody, HomeHeader } from "./HomeStyled"
import { useEffect, useState } from "react"

export function Home() {
    const [news, setNews] = useState([])
    const [topNews, setTopNews] = useState({})

    async function findNews() {
        const newsResponse = await getAllNews()
        setNews(newsResponse.data.results)

        const topNewsResponse = await getTopNews()
        setTopNews(topNewsResponse.data.news)
    }

    useEffect(() => {
        findNews()
    }, [])

    return (
        <>
            <Navbar />
            <HomeHeader>
                <Card
                    top={true}
                    title={topNews.title}
                    text={topNews.text}
                    banner={topNews.banner}
                    likes={topNews.likes}
                    comments={topNews.comments}
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
