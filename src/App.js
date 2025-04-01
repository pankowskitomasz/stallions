import * as React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

import AboutView from './views/aboutView';
import AccountView from './views/accountView';
import AccountCreateView from './views/account/accountCreateView';
import AccountProfileView from './views/account/accountProfileView';
import AccountUpdateView from './views/account/accountUpdateView'; 
import ContactView from './views/contactView';
import DashboardView from './views/dashboardView';
import GalleryView from './views/galleryView';
import GalleryImageView from './views/gallery/galleryImageView';
import GalleryListView from './views/gallery/galleryListView';
import PackageView from './views/packageView';
import PackageDetailsView from './views/package/packageDetailsView';
import PackageListView from './views/package/packageListView';
import PasswordUpdateView from './views/passwordUpdateView';
import RestorePasswordView from './views/restorePasswordView';
import SignInView from './views/signInView';
import SignUpView from './views/signUpView';
import WelcomeView from './views/welcomeView';

import './App.css';


function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<WelcomeView/>}/>
            <Route exact path="/about" element={<AboutView/>}/>
            <Route exact path="/account" element={<AccountView/>}/>
            <Route exact path="/account/create" element={<AccountCreateView/>}/>
            <Route exact path="/account/profile" element={<AccountProfileView/>}/>
            <Route exact path="/account/update" element={<AccountUpdateView/>}/>
            <Route exact path="/contact" element={<ContactView/>}/>
            <Route exact path="/dashboard" element={<DashboardView/>}/>
            <Route exact path="/gallery" element={<GalleryView/>}/>
            <Route exact path="/gallery/image/*">
              <Route path=":id" element={<GalleryImageView/>}/>
            </Route>
            <Route exact path="/gallery/list" element={<GalleryListView/>}/>
            <Route exact path="/package" element={<PackageView/>}/>
            <Route exact path="/package/details/*">
              <Route path=":id" element={<PackageDetailsView/>}/>
            </Route>
            <Route exact path="/package/list" element={<PackageListView/>}/>
            <Route exact path="/restore-password" element={<RestorePasswordView/>}/>
            <Route exact path="/update-password" element={<PasswordUpdateView/>}/>
            <Route exact path="/signin" element={<SignInView/>}/>
            <Route exact path="/signup" element={<SignUpView/>}/>
        </Routes>
    </Router>
  );
}

export default App;
