import React, { useState, useEffect } from "react";
import { Plus, X, Upload, Loader2, Book, CheckCircle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice.js";

import { addBook, removeBook } from "../features/adminSlice";

const AdminDashboard = (props) => {
  const dispatch = useDispatch();
  const { books, loading, error, success } = useSelector(
    (state) => state.admin
  );
  const allbooks = props.allBooks || [];
  const [adminToken, setAdminToken] = useState(
    localStorage.getItem("adminToken") || ""
  );
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(
    localStorage.getItem("role") === "admin"
  );

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    price: "",
    stock: "",
    description: "",
    condition: "Good",
    year: new Date().getFullYear().toString(),
    genre: "",
    image: null,
  });

  // --- Token Handling ---
  const handleTokenChange = (e) => {
    const token = e.target.value;
    const mockIsAdmin = token.length > 10;

    setAdminToken(token);
    setIsAdminLoggedIn(mockIsAdmin);

    localStorage.setItem("adminToken", token);
    localStorage.setItem("role", mockIsAdmin ? "admin" : "");
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("adminToken");
    localStorage.removeItem("role");
  };

  // --- Input & File ---
  const handleInputChange = (e) =>
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  const handleFileChange = (e) =>
    setNewBook({ ...newBook, image: e.target.files[0] });

  // --- Handlers ---
  const handleAddBookRedux = (e) => {
    e.preventDefault();
    if (!isAdminLoggedIn) return alert("Admin login required.");
    if (!newBook.image) return alert("Select a book cover image.");
    dispatch(addBook({ bookData: newBook, token: adminToken }));
    setNewBook({
      title: "",
      author: "",
      price: "",
      stock: "",
      description: "",
      condition: "Good",
      year: new Date().getFullYear().toString(),
      genre: "",
      image: null,
    });
    document.getElementById("image").value = null;
  };

  const handleRemoveBookRedux = (bookId) => {
    if (!isAdminLoggedIn) return alert("Admin login required.");
    if (!window.confirm("Are you sure you want to delete this book?")) return;
    dispatch(removeBook({ bookId, token: adminToken }));
  };

  // --- UI Rendering ---
  const conditionOptions = [
    "Like New",
    "Good",
    "Fair",
    "Worn",
    "Vintage/Collectible",
    "Excellent",
    "Mint",
  ];

  const renderBookItem = (book) => (
    <div
      key={book._id}
      className="flex items-center p-4 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition duration-200"
    >
      <img
        src={
          book.image || "https://placehold.co/80x100/F0F4F8/333?text=Cover"
        }
        alt={book.title}
        className="w-16 h-20 object-cover rounded-md mr-4 shadow-md"
        onError={(e) =>
          (e.target.src = "https://placehold.co/80x100/F0F4F8/333?text=Cover")
        }
      />
      <div className="flex-grow">
        <h3 className="font-bold text-lg text-gray-800">{book.title}</h3>
        <p className="text-sm text-gray-600">by {book.author}</p>
        <p className="text-xs text-gray-500">
          Stock: {book.stock} | Price: ${book.price}
        </p>
        <p className="text-xs text-gray-500">
          Condition: {book.condition} | Year: {book.year}
        </p>
      </div>
      <button
        onClick={() => handleRemoveBookRedux(book._id)}
        disabled={!isAdminLoggedIn || loading}
        className="p-2 ml-4 text-red-600 bg-red-100 rounded-full hover:bg-red-200 transition duration-150 disabled:opacity-50"
      >
        <X size={18} />
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10 font-sans antialiased">
      <header className="mb-8 p-4 bg-white rounded-xl shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Book className="w-8 h-8 text-indigo-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">
            Bookstore Admin Panel
          </h1>
        </div>

        {/* Admin Token */}
        <div className="flex flex-row gap-4">
        <div className="flex flex-col w-full md:w-auto">
          <div className="flex items-center space-x-2 p-2 rounded-lg bg-gray-100">
            <span
              className={`h-3 w-3 rounded-full ${
                isAdminLoggedIn ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
            <p className="text-sm font-semibold text-gray-700">
              Status:{" "}
              {isAdminLoggedIn ? "Admin Authenticated" : "Not Authenticated"}
            </p>
          </div>
          <input
            type="text"
            placeholder="Paste Admin Token here..."
            value={adminToken}
            onChange={handleTokenChange}
            className="mt-2 w-full p-1.5 border-2 border-indigo-200 rounded-lg text-xs"
          />
          <p className="text-xs text-gray-500 mt-1">
            Token is saved in local storage for refresh.
          </p>
        </div>
        <div className="mt-8">

        <button
          type="button" onClick={()=>handleLogout()}
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 
                     dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-2xl"
        >
          Logout
        </button>
        </div>
        </div>
      </header>

      {/* Success/Error Messages */}
      {success && (
        <div className="p-4 mb-6 bg-green-100 border-l-4 border-green-500 text-green-700 rounded-lg flex items-center">
          <CheckCircle className="mr-2" size={20} />
          <p className="text-sm">Operation Successful!</p>
        </div>
      )}
      {error && (
        <div className="p-4 mb-6 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-lg">
          <p className="font-bold">Error:</p>
          <p className="text-sm">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Add Book Form */}
        <div className="lg:col-span-1">
          <form
            onSubmit={handleAddBookRedux}
            className="bg-white p-6 rounded-xl shadow-2xl space-y-4"
          >
            <h2 className="text-2xl font-extrabold text-indigo-700 border-b pb-2 mb-4">
              Add New Book
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <Input
                name="title"
                label="Title"
                value={newBook.title}
                onChange={handleInputChange}
                required
              />
              <Input
                name="author"
                label="Author"
                value={newBook.author}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <Input
                name="price"
                label="Price ($)"
                type="number"
                value={newBook.price}
                onChange={handleInputChange}
                required
              />
              <Input
                name="stock"
                label="Stock"
                type="number"
                value={newBook.stock}
                onChange={handleInputChange}
                required
              />
              <Input
                name="year"
                label="Year"
                type="number"
                value={newBook.year}
                onChange={handleInputChange}
                required
              />
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Condition
                </label>
                <select
                  name="condition"
                  value={newBook.condition}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  {conditionOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <Input
              name="genre"
              label="Genre"
              value={newBook.genre}
              onChange={handleInputChange}
              required
            />
            <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-indigo-400">
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleFileChange}
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                required
              />
              <Upload className="mx-auto w-6 h-6 text-indigo-500" />
              <p className="text-sm text-gray-600 mt-1">
                {newBook.image
                  ? newBook.image.name
                  : "Click to select Book Cover"}
              </p>
            </div>
            <Textarea
              name="description"
              label="Description"
              value={newBook.description}
              onChange={handleInputChange}
              rows="3"
            />
            <button
              type="submit"
              disabled={!isAdminLoggedIn || loading}
              className="w-full flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-xl"
            >
              {loading ? (
                <Loader2 className="animate-spin mr-2" size={20} />
              ) : (
                <Plus className="mr-2" size={20} />
              )}
              Add Book
            </button>
          </form>
        </div>

        {/* Book List */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
            Current Inventory ({allbooks.length})
          </h2>
          {loading && (
            <div className="flex justify-center items-center h-40 bg-white rounded-xl shadow-lg">
              <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
              <span className="ml-3 text-lg text-gray-600">
                Loading Books...
              </span>
            </div>
          )}
          {!loading && allbooks.length === 0 && (
            <div className="p-8 bg-white rounded-xl shadow-lg text-center text-gray-500">
              <Book className="w-10 h-10 mx-auto mb-3" />
              <p className="text-lg font-medium">No books found.</p>
              <p className="text-sm">
                Add new books using the form on the left.
              </p>
            </div>
          )}
          {!loading && allbooks.map(renderBookItem)}
        </div>
      </div>
    </div>
  );
};

// --- Helper Components ---
const Input = ({ label, name, type = "text", ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      {...props}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
    />
  </div>
);

const Textarea = ({ label, name, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <textarea
      name={name}
      {...props}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
    />
  </div>
);

export default AdminDashboard;
