import Input from '../../components/Input/Input.jsx'
import Buttom from '../../components/Button/Button.jsx'
import { useAuth } from '../../context/AuthContext.jsx'
import { useNavigate } from 'react-router-dom'

function Login(){
    const { login } = useAuth()
    const { navigate } = useNavigate()

    function handleLogin(event) {
        event.preventDefault()
        login({

            name: 'Arthur Tardin',

        })

        navigate('/dashboard')
    }
    return(
        <div className="min-h-screen bg-black flex intems-center justify-center px-6">

            <div className='w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3x1 p-10'>

                <h1 className='text-5x1 font-black mb-10 text-center text-green-400'>

                    Rugby Ref

                </h1>

                <form 
                onSubmit={handleLogin}
                className='flex flex-col gap-6'>

                    <Input
                    label="Email"
                    placeholder="Enter your email"
                    />

                    <Input
                    label="Password"
                    placeholder="Enter your password"

                    type='password'
                    />

                    <Buttom>

                        Login

                    </Buttom>

                </form>

            </div>

        </div>

    )

}

export default Login