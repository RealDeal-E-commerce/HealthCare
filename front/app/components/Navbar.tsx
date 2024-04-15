'use client'
import React, { useState } from 'react';
import { useAppSelector, useAppDispatch, useAppStore } from '../lib/hooks'
import Link from 'next/link';
import { logout } from '../lib/authSlice';
import styles from '../styles/Navbar.module.css'

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.user.user);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
  };

  return (
    <div className={styles.divNavbar}>
      <div className={styles.logoContainer}>
        <Link href="/">
          
            <img
              className={styles.logo}
              src="/path-to-your-logo-image.png"
              alt="Logo"
            />
        
        </Link>
        <Link className={styles.brand} href="/" passHref>
        
            health<span className={styles.greenText}>care</span>
         
        </Link>
      </div>

      <div className={styles.navLinks}>
        <Link href="/">
          <a className={styles.navLink}>HOME</a>
        </Link>
        <Link href="/service">
          <a className={styles.navLink}>Service</a>
        </Link>
        <Link href="/contact">
          <a className={styles.navLink}>Contact Us</a>
        </Link>
        <Link href="/bloglist">
          <a className={styles.navLink}>Blogs</a>
        </Link>
        <Link href="/Pharmacy">
          <a className={styles.navLink}>Pharmacy</a>
        </Link>
        <Link href="/doctorlist">
          <a className={styles.navLink}>Doctors</a>
        </Link>
        <Link href="/profile">
          <a className={styles.navLink}>Profile</a>
        </Link>

        {isLoggedIn ? (
          <div className={styles.dropdown}>
            <a className={styles.profile} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <img
                className={styles.profileIcon}
                src="/path-to-profile-icon.png"
                alt="Profile Icon"
              />
            </a>
            {isDropdownOpen && (
              <div className={styles.dropdownContent}>
                <a onClick={handleLogout}>Logout</a>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link href="/signup">
              <a className={styles.navLink}>Sign Up</a>
            </Link>
            <Link href="/login">
              <button className={styles.loginButton}>Log In</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
