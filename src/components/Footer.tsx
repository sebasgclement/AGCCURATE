export default function Footer() {
  const year = new Date().getFullYear();

  const icons = [
    { src: "/icons/facebook.svg", alt: "Facebook" },
    { src: "/icons/instagram.svg", alt: "Instagram" },
    { src: "/icons/twitter.svg", alt: "Twitter" },
    { src: "/icons/linkedin.svg", alt: "LinkedIn" },
  ];

  return (
    <footer className="bg-black text-white py-4 px-6 text-sm">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-white text-opacity-80 text-center md:text-left">
          © {year} AGCCURATE - Todos los derechos reservados
        </p>
        <div className="flex gap-5">
          {icons.map((icon, index) => (
            <a key={index} href="#" aria-label={icon.alt}>
              <img
                src={icon.src}
                alt={icon.alt}
                className="w-5 h-5 transition-transform duration-300 hover:scale-125 hover:opacity-80"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
