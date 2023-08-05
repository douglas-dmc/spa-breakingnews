import { Card } from "../../components/Cards/Card"
import { Navbar } from "../../components/Navbar/Navbar"
// import { news } from "../../Datas"
import { getAllPosts } from "../../services/postsServices"
import { HomeBody } from "./HomeStyled"
import { useEffect, useState } from "react"

export function Home() {
    const [news, setNews] = useState([])

    async function findAllPosts() {
        const NewsResponse = await getAllPosts()
        setNews(NewsResponse.data.results)
    }

    useEffect(() => {
        findAllPosts()
    }, [])

    return (
        <>
            <Navbar />
            <HomeBody>
                {news.map((item) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            text={item.text}
                            banner={item.banner}
                            likes={item.likes.length}
                            comments={item.comments.length}
                        />
                ))}
            </HomeBody>
        </>
    )
}
