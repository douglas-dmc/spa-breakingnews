import { Card } from "../../components/Cards/Card"
import { Navbar } from "../../components/Navbar/Navbar"
import { news } from "../../Datas"
import { HomeBody } from "./HomeStyled"

export function Home() {
    return (
        <>
            <Navbar />
            <HomeBody>
                {news.map((item, index) => {
                    return <Card key={index} props={item} />
                })}
            </HomeBody>
        </>
    )
}
