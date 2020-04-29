import Home from './component/homepage/home'
import Login from './component/homepage/login'
import Register from './component/homepage/register'
import userHome from './component/dashboard/home'
import fundAccount from './component/dashboard/fundAccount'
import sendFund from './component/dashboard/sendFund'
import withdrawFund from './component/dashboard/withdrawFund'
import Dashboard from './component/dashboard/dashboard'
export const routes = [
    {path : '/', component : Home},
    {path : '/login', component : Login},
    {path : '/register', component : Register},
    {path : '/dashboard', component: userHome, children: [
        {path: '', component: Dashboard},
        {path: '/send', component: sendFund},
        {path: '/fund', component: fundAccount},
        {path: '/withdraw', component: withdrawFund}
    ]}

   

];