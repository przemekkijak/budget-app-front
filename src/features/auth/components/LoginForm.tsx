import { useForm, SubmitHandler } from 'react-hook-form'
import { loginWithEmailAndPassword} from "@/features/auth/api/login";
import {LoginCredentialsDTO, UserResponse} from "@/features/auth/types";

import storage from "@/utils/storage";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginCredentialsDTO>()
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<LoginCredentialsDTO> = async (data) => {
        try {
            const response: UserResponse = await loginWithEmailAndPassword(data)
            if (response.token) {
                storage.setToken(response.token)
                navigate('/')

            }
        } catch (error) {
            console.error('Login failed: ', error)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input className="bg-white m-3" {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}
            </div>

            <div>
                <input className="bg-white" {...register("password", { required: true })} />
                {errors.password && <span>This field is required</span>}
            </div>

            <input className="bg-white m-3" type="submit"/>
        </form>
    )
}