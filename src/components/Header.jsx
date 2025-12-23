export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">
          PocketBank
        </h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">Hi, User</span>
          <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
            U
          </div>
        </div>
      </div>
    </header>
  );
}
