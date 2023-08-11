import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../../components/Button/Button"
import { Input } from "../../components/Input/Input"
import { AuthContainer, Section } from "./AuthenticationStyled"
import { useForm } from "react-hook-form"

export function Authentication() {
    const {
        register: registerSignup,
        handleSubmit: handleSubmitSignup,
        reset: resetSignup,
        formState: { errors: errorsSignup },
    } = useForm(
        // resolver: zodResolver(SignupSchema),
    )

    const {
        register: registerSignin,
        handleSubmit: handleSubmitSignin,
        reset: resetSignin,
        formState: { errors: errorsSignin },
    } = useForm(
        // resolver: zodResolver(SigninSchema),
    )

    function inHandleSubmit(data){
        console.log(data)
    }

    function upHandleSubmit(data){
        console.log(data)
    }

    return (
        <AuthContainer>
            <Section type="signin">
                <h2>Entrar</h2>
                <form onSubmit={handleSubmitSignin(inHandleSubmit)}>
                    <Input
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        register={registerSignin}
                    />
                    <Input
                        type="password"
                        placeholder="Senha"
                        name="password"
                        register={registerSignin}
                    />
                    <Button type="submit" text="Entrar" />
                </form>
            </Section>
            <Section type="signup">
                <h2>Cadastrar</h2>
                <form onSubmit={handleSubmitSignup(upHandleSubmit)}>
                    <Input
                        type="text"
                        placeholder="Nome"
                        name="name"
                        register={registerSignup}
                    />
                    <Input
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        register={registerSignup}
                    />
                    <Input
                        type="password"
                        placeholder="Senha"
                        name="password"
                        register={registerSignup}
                    />
                    <Input
                        type="password"
                        placeholder="Confirmar senha"
                        name="confirmPassword"
                        register={registerSignup}
                    />
                    <Button type="submit" text="Cadastrar" />
                </form>
            </Section>
        </AuthContainer>
    )
}
