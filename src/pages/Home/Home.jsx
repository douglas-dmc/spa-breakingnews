import { Card } from "../../components/Cards/Card"
import Navbar from "../../components/Navbar/Navbar"
import { news } from "../../Datas"

export function Home() {
    return (
        <>
            <Navbar />
            {news.map((item, index) => {
                return <Card key={index} props={item} />
            })}
        </>
    )
}