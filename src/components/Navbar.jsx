export default function Navbar() {
  return (
    <nav className="h-20 bg-slate-800 text-white flex justify-around">
      <span className="font-bold text-2xl my-auto">EShop</span>

      <ul className="flex gap-2 font-bold my-auto">
        <li>Accueil</li>
        <li>Articles</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
