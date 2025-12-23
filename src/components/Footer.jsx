export default function Footer() {
  return (
    <footer className="mt-3 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-gray-700">Pocket Bank</span>.  
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
