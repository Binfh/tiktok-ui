//Layouts
import HeaderOnly from '~/components/Layout/HeaderOnly';

//Pages
import Search from '~/pages/Search';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

//Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/Following', component: Following },
    { path: '/Profile', component: Profile },
    { path: '/Upload', component: Upload, layout: HeaderOnly },
    { path: '/Search', component: Search, layout: null },
];
//Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
