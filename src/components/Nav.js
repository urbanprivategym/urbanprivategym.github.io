import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
          <div id="menu">
            <ul>
              <li>
                <Link to="/">홈</Link>
              </li>
              <li>
                <Link to="/Gymtour">짐 투어</Link>
              </li>
              <li>
                <Link to="/Fee">이용요금 및 예약</Link>
              </li>
              <li>
                <Link to="/Info">이용안내</Link>
              </li>
              <li>
                <Link to="/Notice">공지사항</Link>
              </li>
              <li>
                <Link to="/Contact">위치 및 연락처</Link>
              </li>             
            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            >
              {''}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
