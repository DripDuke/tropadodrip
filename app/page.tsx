'use client';

import Image from 'next/image';
import './globals.css';

export default function Home() {
  // Função para tocar som
  const playSound = () => {
    const audio = new Audio('/click.mp3'); // coloque o arquivo em /public
    audio.play();
  };

  return (
    <main className="drip-container">
      <div className="banner-area">
        <Image src="/banner.png" alt="Banner" width={300} height={300} className="banner" />
        
        <h1 className="neon-wave">
          <span>𝐓</span>
          <span>𝐑</span>
          <span>𝐎</span>
          <span>𝐏</span>
          <span>𝐀</span>
          <span>&nbsp;</span>
          <span>𝐃</span>
          <span>𝐎</span>
          <span>&nbsp;</span>
          <span>𝐃</span>
          <span>𝐑</span>
          <span>𝐈</span>
          <span>𝐏</span>
        </h1>

        <h2 className="glitch-text">@Drip_Duke</h2>
      </div>

      <div className="links">
        <a 
          href="https://discord.gg/TROPADODRIP" 
          className="drip-button" 
          target="_blank" 
          rel="noopener noreferrer" 
          onClick={playSound}
        >
          Entrar no Discord
        </a>

        <a 
          href="https://instagram.com/seuuser" 
          className="drip-button" 
          target="_blank" 
          rel="noopener noreferrer" 
          onClick={playSound}
        >
          Instagram
        </a>

        <a 
          href="https://youtube.com/@seucanal" 
          className="drip-button" 
          target="_blank" 
          rel="noopener noreferrer" 
          onClick={playSound}
        >
          YouTube
        </a>
      </div>

      <audio controls autoPlay loop className="player">
        <source src="/musica.mp3" type="audio/mpeg" />
      </audio>
    </main>
  );
}
