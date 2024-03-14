import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
    return (
        <div>
            <div>Dashboard Layout!</div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
