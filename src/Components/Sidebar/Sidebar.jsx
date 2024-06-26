import React from 'react';
import './Sidebar.css';
import home from '../../assets/logos/home.png';
import game_icon from '../../assets/logos/game_icon.png';
import automobiles from '../../assets/logos/automobiles.png';
import sports from '../../assets/logos/sports.png';
import entertainment from '../../assets/logos/entertainment.png';
import tech from '../../assets/logos/tech.png';
import music from '../../assets/logos/music.png';
import blogs from '../../assets/logos/blogs.png';
import news from '../../assets/logos/news.png';
import jack from '../../assets/logos/jack.png';
import simon from '../../assets/logos/simon.png';
import tom from '../../assets/logos/tom.png';
import megan from '../../assets/logos/megan.png';
import cameron from '../../assets/logos/cameron.png';

const Sidebar = ({sidebar, category, setCategory}) => {
  return (
    <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
      <div className="shortcut-links">
        <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
          <img src={home} alt="Home" /><p>Home</p>
        </div>
        <div className={`side-link ${category === 20 ? 'active' : ''}`} onClick={() => setCategory(20)}>
          <img src={game_icon} alt="Gaming" /><p>Gaming</p>
        </div>
        <div className={`side-link ${category === 2 ? 'active' : ''}`} onClick={() => setCategory(2)}>
          <img src={automobiles} alt="AutoMobiles" /><p>AutoMobiles</p>
        </div>
        <div className={`side-link ${category === 17 ? 'active' : ''}`} onClick={() => setCategory(17)}>
          <img src={sports} alt="Sport" /><p>Sport</p>
        </div>
        <div className={`side-link ${category === 24 ? 'active' : ''}`} onClick={() => setCategory(24)}>
          <img src={entertainment} alt="Entertainment" /><p>Entertainment</p>
        </div>
        <div className={`side-link ${category === 28 ? 'active' : ''}`} onClick={() => setCategory(28)}>
          <img src={tech} alt="Technology" /><p>Technology</p>
        </div>
        <div className={`side-link ${category === 10 ? 'active' : ''}`} onClick={() => setCategory(10)}>
          <img src={music} alt="Music" /><p>Music</p>
        </div>
        <div className={`side-link ${category === 22 ? 'active' : ''}`} onClick={() => setCategory(22)}>
          <img src={blogs} alt="Blogs" /><p>Blogs</p>
        </div>
        <div className={`side-link ${category === 25 ? 'active' : ''}`} onClick={() => setCategory(25)}>
          <img src={news} alt="News" /><p>News</p>
        </div>
        <hr />
      </div>

      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="PewDiepie" /><p>PewDiepie</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="MrBeast" /><p>MrBeast</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="Justin Bieber" /><p>Justin Bieber</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="5-Minute Crafts" /><p>5-Minute Crafts</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="Nas Daily" /><p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
