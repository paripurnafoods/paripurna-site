const GOOGLE_BUSINESS =
  "https://share.google/ecNZejHgiZQngHGSu";
const INSTAGRAM =
  "https://www.instagram.com/parippurnadelicioushomefood?igsh=MW12OHZyMGQxdjFqcg%3D%3D&utm_source=qr";

import heroImg from "./assets/images/hero.jpg";
import logoImg from "./assets/images/logo.png";
import { useState } from "react";
import { MessageCircle, ShoppingCart } from "lucide-react";
import PinkSaucePastaImg from "./assets/images/PinkSaucePasta.jpg";
import LemonRiceImg from "./assets/images/LemonRice.jpg";
import NachoCornChatImg from "./assets/images/NachoCornChat.jpg";
import PavBhajjiImg from "./assets/images/PavBhajji.jpg";
import RedSaucePastaImg from "./assets/images/RedSaucePasta.jpg";
import SandwichImg from "./assets/images/Sandwich.jpg";
import VegShahiPulaoImg from "./assets/images/VegShahiPulao.jpg";
import WhiteSaucepastaImg from "./assets/images/WhiteSaucepasta.jpg";

const ZOMATO =
  "https://zomato.onelink.me/xqzv/75kz2rc1";
const SWIGGY =
  "https://www.swiggy.com/menu/1281832?source=sharing";
const WHATSAPP = "919958869887";

<a
  href={GOOGLE_BUSINESS}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-red-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-red-700 transition"
>
  View on Google Maps ⭐
</a>



const pickles = [
  { name: "Gajar Mooli", price: 210 },
  { name: "Mixed", price: 210 },
  { name: "Amla", price: 210 },
  { name: "Pyaj", price: 210 },
  { name: "Crushed Lehshun Mirch", price: 210 },
  { name: "Lehshun", price: 250 },
  { name: "Mirch", price: 210 },
  { name: "Haldi", price: 210 },
  { name: "Gobi Matar", price: 210 },
  { name: "Aam (Seasonal)", price: 210 },
  { name: "Crushed Aam Lehshun Mirch", price: 210 },
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (i) => {
    setCart(cart.filter((_, index) => index !== i));
  };

  const whatsappOrder = () => {
    const msg = cart
      .map((i) => `${i.name} - ₹${i.price}`)
      .join("%0A");

    window.open(
      `https://wa.me/${WHATSAPP}?text=Hello Paripurna!%0AI want to order:%0A${msg}`,
      "_blank"
    );
  };

  return (
    <div className="bg-slate-50">

      {/* HEADER */}
      <header className="bg-white shadow sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <div>
            <h1 className="text-3xl font-bold text-green-700">Paripurna</h1>
            <p className="italic">Delicious Home Food</p>
          </div>
          <img src={logoImg} className="h-20" />
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          <div>
            <h2 className="text-5xl font-bold mb-6">
              Pure Vegetarian Cloud Kitchen 🍱
            </h2>
            <p className="mb-8">
              Snacks • Tiffins • Pickles • Fruit Platters
            </p>

            <div className="flex gap-4">
              <a href={ZOMATO} className="bg-white text-red-600 px-6 py-3 rounded-xl font-bold">
                Order on Zomato
              </a>
              <a href={SWIGGY} className="bg-white text-orange-500 px-6 py-3 rounded-xl font-bold">
                Order on Swiggy
              </a>
            </div>
          </div>


          <img
  src={heroImg}
  className="rounded-3xl shadow-xl"
/>
        </div>
      </section>

{/* OUR SERVICES SECTION */}
<section className="py-20 bg-rose-50">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* Small Heading */}
    <p className="text-red-600 font-semibold uppercase tracking-widest mb-2">
      Our Services
    </p>

    {/* Main Heading */}
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
      What We Offer
    </h2>

    {/* Subtitle */}
    <p className="text-gray-600 max-w-3xl mx-auto mb-14 text-lg">
      From daily tiffins to special orders, we bring authentic homemade
      vegetarian flavors straight to your table.
    </p>

    {/* Services Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Service 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-red-100">
        <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-xl flex items-center justify-center text-red-600 text-2xl">
          🍘
        </div>
        <h3 className="text-xl font-semibold mb-4">
          Home Snacks on Zomato & Swiggy
        </h3>
        <p className="text-gray-600">
          Delicious homemade snacks delivered fresh to your doorstep through
          Zomato and Swiggy. Authentic vegetarian flavors made with love.
        </p>
      </div>

      {/* Service 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-red-100">
        <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-xl flex items-center justify-center text-red-600 text-2xl">
          🍱
        </div>
        <h3 className="text-xl font-semibold mb-4">
          Tiffin Services
        </h3>
        <p className="text-gray-600">
          Nutritious, home-cooked vegetarian meals delivered daily.
          Perfect for professionals and students who crave wholesome food.
        </p>
      </div>

      {/* Service 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-red-100">
        <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-xl flex items-center justify-center text-red-600 text-2xl">
          🫙
        </div>
        <h3 className="text-xl font-semibold mb-4">
          Homemade Pickles (Made on Order)
        </h3>
        <p className="text-gray-600">
          Traditional vegetarian pickles crafted with authentic recipes and
          premium ingredients. Every jar is freshly prepared on order.
        </p>
      </div>

      {/* Service 4 */}
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-red-100">
        <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-xl flex items-center justify-center text-red-600 text-2xl">
          🍎
        </div>
        <h3 className="text-xl font-semibold mb-4">
          Fruit Platters
        </h3>
        <p className="text-gray-600">
          Fresh, beautifully arranged fruit platters perfect for parties,
          events, or healthy snacking. Seasonal fruits at their best.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* PICKLES */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h3 className="text-4xl text-center font-bold mb-10">
          Homemade Pickles
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {pickles.map((p, i) => (
            <div
              key={i}
              className="bg-white shadow-xl rounded-2xl p-6 text-center"
            >
              <h4 className="font-semibold text-lg">{p.name}</h4>
              <p className="text-green-700 font-bold mt-2">
                ₹{p.price}/250g
              </p>
              <button
                onClick={() => addToCart(p)}
                className="mt-4 bg-green-600 text-white px-5 py-2 rounded-xl"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="bg-white mt-10 p-6 rounded-2xl shadow">
            <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <ShoppingCart /> Your Cart
            </h4>

            {cart.map((c, i) => (
              <div
                key={i}
                className="flex justify-between mb-2"
              >
                <span>{c.name}</span>
                <button
                  className="text-red-600"
                  onClick={() => removeItem(i)}
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              onClick={whatsappOrder}
              className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl"
            >
              Order on WhatsApp
            </button>
          </div>
        )}

{/* TRUST & QUALITY SECTION */}
<section className="py-20 bg-rose-50">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* Small Label */}
    <p className="text-red-600 font-semibold uppercase tracking-widest mb-2">
      Trust & Quality
    </p>

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
      What Our Customers Say
    </h2>

    {/* Subtitle */}
    <p className="text-gray-600 max-w-3xl mx-auto mb-14 text-lg">
      Join hundreds of happy customers who trust Paripurna for fresh,
      hygienic and purely vegetarian homemade meals.
    </p>

    {/* Reviews Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Review 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-red-100 hover:shadow-xl transition">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Priya Sharma</h3>
          <span className="bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full">
            Greater Noida
          </span>
        </div>

        <div className="text-yellow-500 mb-4 text-lg">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-gray-600">
          "The best homemade vegetarian food I've had! Tastes just like
          mom's cooking. The tiffin service is a lifesaver for my busy schedule.
          Always fresh and hygienic."
        </p>
      </div>

      {/* Review 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-red-100 hover:shadow-xl transition">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Rajesh Kumar</h3>
          <span className="bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full">
            Gaur City (Noida)
          </span>
        </div>

        <div className="text-yellow-500 mb-4 text-lg">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-gray-600">
          "Amazing quality and authentic taste! The homemade pickles are
          absolutely delicious and the delivery is always on time.
          Highly recommend Paripurna."
        </p>
      </div>

      {/* Review 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-red-100 hover:shadow-xl transition">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Anita Desai</h3>
          <span className="bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full">
            Greater Noida West
          </span>
        </div>

        <div className="text-yellow-500 mb-4 text-lg">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-gray-600">
          "Fresh ingredients, hygienic packaging and pure vegetarian
          food. Their fruit platters and tiffin combos are worth every rupee.
          Highly satisfied!"
        </p>
      </div>

    </div>
  </div>
</section>

{/* OUR STORY SECTION */}
<section className="py-24 bg-rose-50">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* Image Side */}
    <div>
      <img
        src="/hero1.jpg"
        alt="Homemade Vegetarian Food"
        className="rounded-3xl shadow-xl w-full h-[420px] object-cover"
      />
    </div>

    {/* Content Side */}
    <div>

      {/* Small Label */}
      <p className="text-red-600 font-semibold uppercase tracking-widest mb-3">
        Our Story
      </p>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        Pure Vegetarian Food <br /> Made With Love
      </h2>

      {/* Content */}
      <p className="text-gray-600 text-lg leading-relaxed mb-4">
        Paripurna began with a simple belief — food should be pure,
        hygienic, and made with the same care as home-cooked meals.
        We are proud to serve 100% vegetarian dishes prepared fresh daily.
      </p>

      <p className="text-gray-600 text-lg leading-relaxed mb-4">
        Every ingredient is carefully selected to maintain authentic taste
        and nutritional value. We focus on quality, cleanliness,
        and traditional recipes that bring comfort to every bite.
      </p>

      <p className="text-gray-600 text-lg leading-relaxed">
        Serving Greater Noida, Gaur City (Noida), and Greater Noida West,
        we continue to build trust one meal at a time.
      </p>

    </div>

  </div>
</section>


{/* WHY US SECTION */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold mb-6 text-green-700">
      Why Choose Paripurna?
    </h2>

    <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
      At Paripurna – Delicious Home Food, we believe great meals begin with purity,
      care, and tradition. We are a 100% vegetarian cloud kitchen preparing fresh,
      hygienic, home-style food every day using premium ingredients. Our dishes are
      cooked in small batches to maintain quality and authentic taste. From daily
      tiffins to handcrafted pickles and wholesome snacks, every order is prepared
      with love. With flexible subscriptions, timely delivery, and uncompromising
      cleanliness, Paripurna brings homemade goodness straight to your doorstep.
    </p>

  </div>
</section>
      </section>
      {/* FLOATING WHATSAPP */}
      <a
        href={`https://wa.me/${WHATSAPP}`}
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-xl"
      >
        <MessageCircle className="text-white" />
      </a>
{/* GET IN TOUCH SECTION */}
<section className="py-20 bg-rose-50">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold text-gray-900 mb-6">
      Get In Touch
    </h2>

    <p className="text-gray-600 mb-12 text-lg">
      Have questions or want to place an order? We'd love to hear from you.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Phone */}
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
        <h3 className="text-xl font-semibold mb-3">📞 Call Us</h3>
        <p className="text-gray-600">+91 9958869887</p>
      </div>

      {/* WhatsApp */}
<div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
  <h3 className="text-xl font-semibold mb-3">💬 WhatsApp</h3>
  <a
    href="https://wa.me/9958869887"
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-600 font-medium hover:underline"
  >
    Chat With Us on WhatsApp
  </a>
</div>

      {/* Location */}
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
        <h3 className="text-xl font-semibold mb-3">📍 Service Areas</h3>
        <p className="text-gray-600">
          Greater Noida <br />
        </p>
      </div>

    </div>

  </div>
</section>

{/* FIND US SECTION */}
<section className="py-20 bg-gray-50 text-center">
  <h2 className="text-4xl font-bold mb-8">Find Us</h2>

  <div className="flex justify-center gap-8">

    {/* Google */}
    <a
      href={GOOGLE_BUSINESS}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow hover:shadow-lg transition"
    >
      <img
        src="/google.png"
        alt="Google"
        className="w-8 h-8"
      />
      <span className="font-semibold">Google Maps</span>
    </a>

    {/* Instagram */}
    <a
      href={INSTAGRAM}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow hover:shadow-lg transition"
    >
      <img
        src="/instagram.png"
        alt="Instagram"
        className="w-8 h-8"
      />
      <span className="font-semibold">Instagram</span>
    </a>

  </div>
</section>

{/* FOOTER */}
<footer className="bg-gray-900 text-white py-10">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h3 className="text-2xl font-bold mb-3">Paripurna</h3>
    <p className="text-gray-400 mb-6">
      Pure Vegetarian • Hygienic • Homemade Food
    </p>

    <div className="flex justify-center gap-6 mb-6">
      <a
        href="YOUR_GOOGLE_BUSINESS_LINK"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-400 transition"
      >
        Google
      </a>

      <a
        href="YOUR_INSTAGRAM_LINK"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-400 transition"
      >
        Instagram
      </a>
    </div>

    <p className="text-gray-500 text-sm">
      © {new Date().getFullYear()} Paripurna. All Rights Reserved.
    </p>

  </div>
</footer>


 </div>

  );
}
