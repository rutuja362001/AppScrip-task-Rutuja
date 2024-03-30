import Head from 'next/head';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../pages/api/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingBag, faUser, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faCcMastercard, faGooglePay, faCcVisa, faCreditCard } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Home.module.css'; // Imported CSS module
import Link from "next/link";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCustomizable, setSelectedCustomizable] = useState(false);
  const [selectedIdealFor, setSelectedIdealFor] = useState('All');
  const [selectedOccasion, setSelectedOccasion] = useState('All');
  const [selectedSegment, setSelectedSegment] = useState('All');
  const [selectedSuitableFor, setSelectedSuitableFor] = useState('All');
  const [selectedRawMaterial, setSelectedRawMaterial] = useState('All');
  const [selectedPattern, setSelectedPattern] = useState('All');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    fetchData();
  }, []);

  const handleCustomizableChange = (e) => {
    setSelectedCustomizable(e.target.checked);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    if (selectedCustomizable && !product.customizable) {
      return false;
    }
    if (selectedIdealFor !== 'All' && product.idealFor !== selectedIdealFor) {
      return false;
    }
    if (selectedOccasion !== 'All' && product.occasion !== selectedOccasion) {
      return false;
    }
    if (selectedSegment !== 'All' && product.segment !== selectedSegment) {
      return false;
    }
    if (selectedSuitableFor !== 'All' && product.suitableFor !== selectedSuitableFor) {
      return false;
    }
    if (selectedRawMaterial !== 'All' && product.rawMaterial !== selectedRawMaterial) {
      return false;
    }
    if (selectedPattern !== 'All' && product.pattern !== selectedPattern) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <Head>
      <title>Appscrip Page </title>
        <meta name="description" content="These website includes shopping products by Appscrip." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/551ef3a7d4.js" crossOrigin="anonymous"></script>
        <style>{`
          body {
            font-family: Arial, sans-serif;
          }
          .custom-class {
            color: red;
          }
        `}</style>
      </Head>
      <div className={styles.topBar}>
        <div className={styles.log}>LOGO</div>
        <div className={styles.cont}>
        <a href="/search" className="icon-link"><FontAwesomeIcon icon={faSearch} /></a>
        <a href="/wishlist" className="icon-link"><FontAwesomeIcon icon={faHeart} /></a>
        <a href="/cart" className="icon-link"><FontAwesomeIcon icon={faShoppingBag} /></a>
        <a href="/profile" className="icon-link"><FontAwesomeIcon icon={faUser} /></a>
        <a href="/language" className="icon-link"><FontAwesomeIcon icon={faLanguage} /></a>
      </div>
      </div>
      <nav className={styles.navBar}>
        <ul>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/stores">Stores</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/careers">Careers</a></li>
        </ul>
      </nav>
      <div className={styles.About}>
        <h1> DISCOVER OUR PRODUCT </h1>
      </div>
      <div>
        <p className={styles.descript}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, accusantium?</p>
      </div>

      <div className={styles.container}>
        <div className={styles.leftSidebar}>
          <div className={styles.filterSection}>
            {/* Filters go here */}
            {/* Customizable */}
            <div className={styles.filterOption}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCustomizable}
                  onChange={handleCustomizableChange}
                />
                Customizable
              </label>
            </div>
            {/* Ideal For */}
            <div className={styles.filterOption}>
              <label>
                Ideal For:
                <select value={selectedIdealFor} onChange={(e) => setSelectedIdealFor(e.target.value)}>
                  <option value="All">All</option>
                </select>
              </label>
            </div>
            {/* Occasion */}
            <div className={styles.filterOption}>
              <label>
                Occasion:
                <select value={selectedOccasion} onChange={(e) => setSelectedOccasion(e.target.value)}>
                  <option value="All">All</option>
                </select>
              </label>
            </div>
            {/* Segment */}
            <div className={styles.filterOption}>
              <label>
                Segment:
                <select value={selectedSegment} onChange={(e) => setSelectedSegment(e.target.value)}>
                  <option value="All">All</option>
                </select>
              </label>
            </div>
            {/* Suitable For */}
            <div className={styles.filterOption}>
              <label>
                Suitable For:
                <select value={selectedSuitableFor} onChange={(e) => setSelectedSuitableFor(e.target.value)}>
                  <option value="All">All</option>
                </select>
              </label>
            </div>
            {/* Raw Material */}
            <div className={styles.filterOption}>
              <label>
                Raw Material:
                <select value={selectedRawMaterial} onChange={(e) => setSelectedRawMaterial(e.target.value)}>
                  <option value="All">All</option>
                </select>
              </label>
            </div>
            {/* Pattern */}
            <div className={styles.filterOption}>
              <label>
                Pattern:
                <select value={selectedPattern} onChange={(e) => setSelectedPattern(e.target.value)}>
                  <option value="All">All</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className={styles.mainContent}>
          {/* Product grid */}
          <div className={styles.productsGrid}>
            {filteredProducts.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <img src={product.image} alt={`Product Image: ${product.title}`} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <span>{product.price}$</span>
              </div>
            ))}
          </div>
        </div>
      </div> <footer className={styles.footer}>
        <div className={styles.footerone}>
          <div className={styles.subscribeSection}>
            <p>BE the first to know</p>
            <p>Sign up for the update from meta muse</p>
            <div className={styles.emailSubscription}>
              <input
                type="text"
                placeholder="Enter your e-mail"
                value={email}
                onChange={handleEmailChange}
              />
              <button className={styles.subscribeButton}>Subscribe</button>
            </div>
          </div>
          <div className={styles.contactUs}>
            <p>Contact Us</p>
            <div className={styles.contactInfo}>
              <p>442211335360</p>
              <p>customercare@metamuse.com</p>
            </div>
            <div>
              <p>CURRENCY</p>
              <p>USD</p>
              <p>
                TRANSACTIONS WILL BE COMPLETED IN EUROS AND CURRENCY REFERENCE
                IS AVAILABLE ON HOVER
              </p>
            </div>
          </div>
        </div>
        <div className={styles.footertwo}>
          <div className={styles.mettaMuseSection}>
            <p>Metta Muse</p>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/stories">Stories</Link>
              </li>
              <li>
                <Link href="/artisans">Artisans</Link>
              </li>
              <li>
                <Link href="/boutiques">Boutiques</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className={styles.quickLinks}>
            <p>Quick Links</p>
            <ul>
              <li>Orders and Shipping</li>
              <li>Join / Login as a Seller</li>
              <li>Payment and Pricing</li>
              <li>Return and Refund</li>
              <li>More</li>
            </ul>
          </div>
          <div className={styles.followUs}>
            <p>Follow Us</p>
            <div className={styles.socialIcons}>
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>
          <div className={styles.paymentMethods}>
            <p>Metta Muse Accepts</p>
            <div className={styles.paymentIcons}>
              <FontAwesomeIcon icon={faCcMastercard} />
              <FontAwesomeIcon icon={faCcVisa} />
              <FontAwesomeIcon icon={faGooglePay} />
              <FontAwesomeIcon icon={faCreditCard} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;