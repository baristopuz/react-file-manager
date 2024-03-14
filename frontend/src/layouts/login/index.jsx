import { Outlet } from 'react-router-dom'

export default function LoginLayout() {
    return (
        <div>
            <div>Login Layout!</div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
