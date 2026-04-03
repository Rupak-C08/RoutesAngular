import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { About } from './pages/about/about';
import { Profile } from './pages/profile/profile';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { UserDetail } from './pages/user-detail/user-detail';
import { Users } from './pages/users/users';
import { Deals } from './pages/deals/deals';
import { Offers } from './pages/offers/offers';

export const routes: Routes = [
    {path: '', component : Home, children: [
        {path: '', redirectTo: 'deals', pathMatch: 'full'},
        {path: 'deals', component: Deals},
        {path: 'offers', component: Offers},
    ]},
    {path: 'about/:name/:age', component: About},
    {path: 'about/:name', component: About},
    {path: 'about', component: About},
    {path: 'login', component: Login},
    {path: 'profile', component: Profile},
    {path: 'users', loadComponent:()=>import('./pages/users/users').then(m => m.Users)},
    {path: 'user-detail/:id',  loadComponent : () => import('./pages/user-detail/user-detail').then(m => m.UserDetail)},
    {path: '**', component: PageNotFound}
    // {path: '**', redirectTo: ''},
    
];
