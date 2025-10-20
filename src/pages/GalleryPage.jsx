import "./GalleryPage.css";
import Footer from "../components/Footer";
import img1 from "../assets/images/bmoi1.jpg";
import img2 from "../assets/images/bmoi2.jpg";
import img3 from "../assets/images/bmoi3.jpg";
import img4 from "../assets/images/bmoi4.jpg";
import img5 from "../assets/images/bmoi5.jpg";
import img6 from "../assets/images/bmoi6.jpg";
import img7 from "../assets/images/bmoi7.jpg";
import img8 from "../assets/images/bmoi8.jpg";
import img9 from "../assets/images/bmoi9.jpg";
import img10 from "../assets/images/bmoi10.jpg";

function GalleryPage() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <section className="gallery-page">
      <header className="gallery-header">
        <h2 className="font-display">Our Moments</h2>
        <p className="font-serif">A glimpse of our journey together</p>
      </header>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <figure
            className="gallery-item"
            key={src}
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <img src={src} alt={`Gallery ${index + 1}`} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default GalleryPage;
