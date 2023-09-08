import { Link, Outlet, useNavigate } from "react-router-dom"
import logo from "../../images/LogoBN.png"
import { ErrorSpan, ImageLogo, InputSpace, Nav } from "./NavbarStyled"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../Button/Button"
import { searchSchema } from "../../schemas/searchSchema"
import { userLogged } from "../../services/userServices"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"

export function Navbar() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(searchSchema),
    })

    const navigate = useNavigate()

    const [user, setUser] = useState({})

    function onSearch(data) {
        const { title } = data
        navigate(`/search/${title}`)
        reset()
    }

    async function findUserLogged() {
        try {
            const response = await userLogged()
            setUser(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (Cookies.get("token")) findUserLogged()
    }, [])

    return (
        <>
            <Nav>
                <form onSubmit={handleSubmit(onSearch)}>
                    <InputSpace className="input-search-space">
                        <button type="submit">
                            <i className="bi bi-search"></i>
                        </button>

                        <input
                            {...register("title")}
                            type="text"
                            placeholder="Pesquise por um título"
                        />
                    </InputSpace>
                </form>

                <Link to="/">
                    <ImageLogo src={logo} alt="Logo Breaking News" />
                </Link>

                {user ? (
                    <p>{user.name}</p>
                ) : (
                    <Link to="/auth">
                        <Button type="button" text="Entrar" />
                    </Link>
                )}
            </Nav>
            {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
            <Outlet />
        </>
    )
}
