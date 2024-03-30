import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import AboutUs from './components/AboutUs';
import MembersBA from './components/MembersBA';
import Members from './components/Members';
import Geography from './components/Geography';
import Statute from './components/Statute';
import EthicsCodex from './components/EthicsCodex';
import Order from './components/Order';
import MembersOfOrder from './components/MembersOfOrder';
import Articles from './components/Articles';
import ArticlePage01 from './components/Articles/ArticlePage01';
import ArticlePage02 from './components/Articles/ArticlePage02';
import ArticlePage03 from './components/Articles/ArticlePage03';
import ArticlePage04 from './components/Articles/ArticlePage04';
import ArticlePage05 from './components/Articles/ArticlePage05';
import ArticlePage06 from './components/Articles/ArticlePage06';
import ArticlePage07 from './components/Articles/ArticlePage07';
import ArticlePage08 from './components/Articles/ArticlePage08';
import ArticlePage09 from './components/Articles/ArticlePage09';
import ArticlePage10 from './components/Articles/ArticlePage10';
import ArticlePage11 from './components/Articles/ArticlePage11';
import ArticlePage12 from './components/Articles/ArticlePage12';
import ArticlePage13 from './components/Articles/ArticlePage13';
import Reviews from './components/Reviews';
import ReviewPage from './components/Reviews/ReviewPage';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './fonts/fonts.css';
import './App.css';

function App() {
  return (
    <Router>
      <div >
        {/* <Header /> */}
        <Navigation />
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/" element={<MainContent />} />
          <Route path="/membersBA" element={<MembersBA />} />
          <Route path="/geography" element={<Geography />} />
          <Route path="/members" element={<Members />} />
          <Route path="/statute" element={<Statute />} />
          <Route path="/ethicscodex" element={<EthicsCodex />} />
          <Route path="/order" element={<Order />} />
          <Route path="/membersoforder" element={<MembersOfOrder />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article01" element={<ArticlePage01 />} />
          <Route path="/article02" element={<ArticlePage02 />} />
          <Route path="/article03" element={<ArticlePage03 />} />
          <Route path="/article04" element={<ArticlePage04 />} />
          <Route path="/article05" element={<ArticlePage05 />} />
          <Route path="/article06" element={<ArticlePage06 />} />
          <Route path="/article07" element={<ArticlePage07 />} />
          <Route path="/article08" element={<ArticlePage08 />} />
          <Route path="/article09" element={<ArticlePage09 />} />
          <Route path="/article10" element={<ArticlePage10 />} />
          <Route path="/article11" element={<ArticlePage11 />} />
          <Route path="/article12" element={<ArticlePage12 />} />
          <Route path="/article13" element={<ArticlePage13 />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reviews/:slug" element={<ReviewPage />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
