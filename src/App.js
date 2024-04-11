import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import ArticlePage14 from './components/Articles/ArticlePage14';
import ArticlePage15 from './components/Articles/ArticlePage15';
import ArticlePage16 from './components/Articles/ArticlePage16';
import ArticlePage17 from './components/Articles/ArticlePage17';
import ArticlePage18 from './components/Articles/ArticlePage18';
import ArticlePage19 from './components/Articles/ArticlePage19';
import ArticlePage20 from './components/Articles/ArticlePage20';
import ArticlePage21 from './components/Articles/ArticlePage21';
import ArticlePage22 from './components/Articles/ArticlePage22';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './fonts/fonts.css';
import './App.css';

function App() {
  return (
    <Router>
      <div >
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
          <Route path="/article14" element={<ArticlePage14 />} />
          <Route path="/article15" element={<ArticlePage15 />} />
          <Route path="/article16" element={<ArticlePage16 />} />
          <Route path="/article17" element={<ArticlePage17 />} />
          <Route path="/article18" element={<ArticlePage18 />} />
          <Route path="/article19" element={<ArticlePage19 />} />
          <Route path="/article20" element={<ArticlePage20 />} />
          <Route path="/article21" element={<ArticlePage21 />} />
          <Route path="/article22" element={<ArticlePage22 />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
