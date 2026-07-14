import { useState, useEffect, useRef } from "react";

export default function App() {
  const [activeForm, setActiveForm] = useState("product");
  const [notification, setNotification] = useState(null);
  const [submissions, setSubmissions] = useState([]);

  const [product, setProduct] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    stock: "",
    image: "",
    description: "",
  });

  const [enquiry, setEnquiry] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [contact, setContact] = useState({
    company: "",
    email: "",
    phone: "",
    address: "",
    instagram: "",
    facebook: "",
  });

  const [faq, setFaq] = useState({
    question: "",
    answer: "",
  });

  const [category, setCategory] = useState({
    name: "",
    image: "",
    description: "",
  });

  const [offer, setOffer] = useState({
    title: "",
    discount: "",
    startDate: "",
    endDate: "",
  });

  const [typingStates, setTypingStates] = useState({});

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleChange = (setter, state, fieldName) => (e) => {
    setter({
      ...state,
      [e.target.name]: e.target.value,
    });

    if (fieldName) {
      setTypingStates((prev) => ({
        ...prev,
        [fieldName]: true,
      }));

      setTimeout(() => {
        setTypingStates((prev) => ({
          ...prev,
          [fieldName]: false,
        }));
      }, 500);
    }
  };

  const submit = (title, data) => {
    const submission = {
      id: Date.now(),
      title,
      data,
      timestamp: new Date().toLocaleString(),
    };
    setSubmissions([submission, ...submissions]);
    setNotification({
      type: "success",
      message: `${title} submitted successfully!`,
    });
    console.log(title, data);
  };

  const clearForm = (setter, initialState) => {
    setter(initialState);
  };

  const Input = ({ label, name, value, onChange, type = "text", required = false }) => (
    <div className="mb-4 group">
      <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-slate-600 transition-all duration-300 group-focus-within:text-indigo-600">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-white/50 backdrop-blur-sm border-2 border-slate-200 rounded-lg p-3.5 text-slate-700 placeholder:text-slate-400 focus:ring-4 focus:ring-indigo-200/50 focus:border-indigo-400 outline-none transition-all duration-300 hover:border-indigo-300 hover:shadow-md"
      />
    </div>
  );

  const TextArea = ({ label, name, value, onChange, required = false }) => {
    const isTyping = typingStates[name];

    return (
      <div className="mb-4 group">
        <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-slate-600 transition-all duration-300 group-focus-within:text-indigo-600">
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
        <div className="relative">
          <textarea
            rows="4"
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className={`w-full bg-white/50 backdrop-blur-sm border-2 border-slate-200 rounded-lg p-3.5 text-slate-700 placeholder:text-slate-400 focus:ring-4 focus:ring-indigo-200/50 focus:border-indigo-400 outline-none transition-all duration-300 hover:border-indigo-300 hover:shadow-md resize-none ${
              isTyping ? "typing-effect" : ""
            }`}
            placeholder={`Type your ${label.toLowerCase()}...`}
          />
          {isTyping && (
            <div className="absolute bottom-3 right-3 flex items-center gap-1">
              <span
                className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              ></span>
              <span
                className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              ></span>
              <span
                className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              ></span>
            </div>
          )}
        </div>
      </div>
    );
  };

  const sidebarButtons = [
    { id: "product", label: "Products", icon: "📦", color: "indigo" },
    { id: "category", label: "Categories", icon: "📂", color: "blue" },
    { id: "offer", label: "Offers", icon: "🏷️", color: "emerald" },
    { id: "faq", label: "FAQs", icon: "❓", color: "amber" },
    { id: "contact", label: "Contact", icon: "📞", color: "cyan" },
    { id: "enquiry", label: "Enquiries", icon: "✉️", color: "rose" },
  ];

  const getButtonClasses = (id, color) => {
    const isActive = activeForm === id;
    const colorMap = {
      indigo:
        "from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 focus:ring-indigo-300",
      blue: "from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 focus:ring-blue-300",
      emerald:
        "from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 focus:ring-emerald-300",
      amber:
        "from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 focus:ring-amber-300",
      cyan: "from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 focus:ring-cyan-300",
      rose: "from-rose-500 to-rose-600 hover:from-rose-400 hover:to-rose-500 focus:ring-rose-300",
    };
    return `w-full mb-2 text-white text-sm font-medium p-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-white ${
      isActive
        ? `ring-4 ring-offset-2 ring-offset-white shadow-xl scale-[1.02] bg-gradient-to-r ${colorMap[color]}`
        : `bg-slate-200/80 hover:bg-slate-300/80 backdrop-blur-sm text-slate-700 hover:text-slate-900`
    }`;
  };

  const getHeaderGradient = (formType) => {
    const gradients = {
      product: "from-indigo-500 to-blue-500",
      category: "from-blue-500 to-cyan-500",
      offer: "from-emerald-500 to-teal-500",
      faq: "from-amber-500 to-orange-500",
      contact: "from-cyan-500 to-sky-500",
      enquiry: "from-rose-500 to-pink-500",
    };
    return gradients[formType] || "from-indigo-500 to-purple-500";
  };

  const getFormIcon = (formType) => {
    const icons = {
      product: "📦",
      category: "📂",
      offer: "🏷️",
      faq: "❓",
      contact: "📞",
      enquiry: "✉️",
    };
    return icons[formType] || "✨";
  };

  const getFormTitle = (formType) => {
    const titles = {
      product: "Add New Product",
      category: "Manage Categories",
      offer: "Create Offer",
      faq: "FAQ Management",
      contact: "Contact Information",
      enquiry: "Customer Enquiries",
    };
    return titles[formType] || "Form";
  };

  const getFormSubtitle = (formType) => {
    const subtitles = {
      product: "Add a new product to your catalog",
      category: "Organize your products with categories",
      offer: "Create promotional offers and discounts",
      faq: "Manage frequently asked questions",
      contact: "Update your company contact details",
      enquiry: "View and respond to customer enquiries",
    };
    return subtitles[formType] || "Fill in the details below";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Notification */}
      {notification && (
        <div className="fixed top-6 right-6 z-50 animate-slide-in-right">
          <div
            className={`p-4 rounded-xl shadow-2xl backdrop-blur-xl border ${
              notification.type === "success"
                ? "bg-emerald-500/10 border-emerald-500/30"
                : "bg-rose-500/10 border-rose-500/30"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">
                {notification.type === "success" ? "✅" : "❌"}
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  {notification.message}
                </p>
                <p className="text-xs text-slate-500">Just now</p>
              </div>
              <button
                onClick={() => setNotification(null)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="relative bg-white/80 backdrop-blur-xl border-b border-slate-200/50 px-6 py-5 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <span className="text-white text-xl">✨</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Cosmetics Admin
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                Dashboard Management
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-indigo-50 rounded-lg">
              <span className="text-xs text-indigo-600 font-medium">
                {submissions.length} Submissions
              </span>
            </div>
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-lg shadow-indigo-500/20">
              A
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-white/60 backdrop-blur-xl border-r border-slate-200/50 min-h-auto md:min-h-[calc(100vh-80px)] p-5">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-3 py-2">
              Navigation
            </p>
            {sidebarButtons.map(({ id, label, icon, color }) => (
              <button
                key={id}
                onClick={() => setActiveForm(id)}
                className={getButtonClasses(id, color)}
              >
                <span className="flex items-center gap-3">
                  <span className="text-lg">{icon}</span>
                  {label}
                  {activeForm === id && (
                    <span className="ml-auto w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                  )}
                </span>
              </button>
            ))}

            {/* Recent Submissions */}
            <div className="mt-8 pt-6 border-t border-slate-200/50">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-3 py-2">
                Recent Activity
              </p>
              <div className="max-h-48 overflow-y-auto space-y-1.5 px-2">
                {submissions.length === 0 ? (
                  <p className="text-xs text-slate-400 px-2 py-2 text-center">
                    No submissions yet
                  </p>
                ) : (
                  submissions.slice(0, 5).map((item) => (
                    <div
                      key={item.id}
                      className="px-3 py-2 bg-white/50 backdrop-blur-sm rounded-lg border border-slate-200/50 hover:border-indigo-200 transition-colors"
                    >
                      <p className="text-xs font-medium text-slate-700">
                        {item.title}
                      </p>
                      <p className="text-[10px] text-slate-400">
                        {item.timestamp}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          <div className="animate-slide-in-right">
            {/* Product Form */}
            {activeForm === "product" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submit("Product", product);
                }}
                className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-slate-200/50 hover:border-indigo-200/50 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${getHeaderGradient(
                        "product"
                      )} rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20`}
                    >
                      <span className="text-2xl">{getFormIcon("product")}</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                        {getFormTitle("product")}
                      </h2>
                      <p className="text-sm text-slate-500">
                        {getFormSubtitle("product")}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      clearForm(setProduct, {
                        name: "",
                        brand: "",
                        category: "",
                        price: "",
                        stock: "",
                        image: "",
                        description: "",
                      })
                    }
                    className="text-xs text-slate-400 hover:text-slate-600 transition-colors font-medium"
                  >
                    Clear All
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Product Name"
                    name="name"
                    value={product.name}
                    onChange={handleChange(setProduct, product, "name")}
                    required
                  />
                  <Input
                    label="Brand"
                    name="brand"
                    value={product.brand}
                    onChange={handleChange(setProduct, product, "brand")}
                    required
                  />
                  <Input
                    label="Category"
                    name="category"
                    value={product.category}
                    onChange={handleChange(setProduct, product, "category")}
                    required
                  />
                  <Input
                    label="Price"
                    name="price"
                    type="number"
                    value={product.price}
                    onChange={handleChange(setProduct, product, "price")}
                    required
                  />
                  <Input
                    label="Stock"
                    name="stock"
                    type="number"
                    value={product.stock}
                    onChange={handleChange(setProduct, product, "stock")}
                    required
                  />
                  <Input
                    label="Image URL"
                    name="image"
                    value={product.image}
                    onChange={handleChange(setProduct, product, "image")}
                    required
                  />
                </div>

                <TextArea
                  label="Description"
                  name="description"
                  value={product.description}
                  onChange={handleChange(setProduct, product, "description")}
                  required
                />

                <div className="flex gap-4 mt-6">
                  <button className="flex-1 md:flex-none bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/30 hover:from-indigo-400 hover:to-indigo-500 transform active:scale-95 font-semibold group">
                    <span className="flex items-center justify-center gap-2">
                      <span>💾</span> Save Product
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      clearForm(setProduct, {
                        name: "",
                        brand: "",
                        category: "",
                        price: "",
                        stock: "",
                        image: "",
                        description: "",
                      })
                    }
                    className="flex-1 md:flex-none px-8 py-3.5 rounded-xl border-2 border-slate-200 text-slate-600 hover:text-slate-800 hover:border-slate-400 transition-all duration-300 font-medium"
                  >
                    Reset
                  </button>
                </div>
              </form>
            )}

            {/* Category Form */}
            {activeForm === "category" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submit("Category", category);
                }}
                className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-slate-200/50 hover:border-blue-200/50 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${getHeaderGradient(
                        "category"
                      )} rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20`}
                    >
                      <span className="text-2xl">{getFormIcon("category")}</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        {getFormTitle("category")}
                      </h2>
                      <p className="text-sm text-slate-500">
                        {getFormSubtitle("category")}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      clearForm(setCategory, {
                        name: "",
                        image: "",
                        description: "",
                      })
                    }
                    className="text-xs text-slate-400 hover:text-slate-600 transition-colors font-medium"
                  >
                    Clear All
                  </button>
                </div>

                <Input
                  label="Category Name"
                  name="name"
                  value={category.name}
                  onChange={handleChange(setCategory, category, "categoryName")}
                  required
                />

                <Input
                  label="Category Image"
                  name="image"
                  value={category.image}
                  onChange={handleChange(setCategory, category, "categoryImage")}
                  required
                />

                <TextArea
                  label="Description"
                  name="description"
                  value={category.description}
                  onChange={handleChange(
                    setCategory,
                    category,
                    "categoryDescription"
                  )}
                  required
                />

                <div className="flex gap-4 mt-6">
                  <button className="flex-1 md:flex-none bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/30 hover:from-blue-400 hover:to-blue-500 transform active:scale-95 font-semibold group">
                    <span className="flex items-center justify-center gap-2">
                      <span>💾</span> Save Category
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      clearForm(setCategory, {
                        name: "",
                        image: "",
                        description: "",
                      })
                    }
                    className="flex-1 md:flex-none px-8 py-3.5 rounded-xl border-2 border-slate-200 text-slate-600 hover:text-slate-800 hover:border-slate-400 transition-all duration-300 font-medium"
                  >
                    Reset
                  </button>
                </div>
              </form>
            )}

            {/* Offer Form */}
            {activeForm === "offer" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submit("Offer", offer);
                }}
                className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-slate-200/50 hover:border-emerald-200/50 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${getHeaderGradient(
                        "offer"
                      )} rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20`}
                    >
                      <span className="text-2xl">{getFormIcon("offer")}</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                        {getFormTitle("offer")}
                      </h2>
                      <p className="text-sm text-slate-500">
                        {getFormSubtitle("offer")}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      clearForm(setOffer, {
                        title: "",
                        discount: "",
                        startDate: "",
                        endDate: "",
                      })
                    }
                    className="text-xs text-slate-400 hover:text-slate-600 transition-colors font-medium"
                  >
                    Clear All
                  </button>
                </div>

                <Input
                  label="Offer Title"
                  name="title"
                  value={offer.title}
                  onChange={handleChange(setOffer, offer, "offerTitle")}
                  required
                />

                <Input
                  label="Discount %"
                  name="discount"
                  value={offer.discount}
                  onChange={handleChange(setOffer, offer, "discount")}
                  required
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Start Date"
                    type="date"
                    name="startDate"
                    value={offer.startDate}
                    onChange={handleChange(setOffer, offer, "startDate")}
                    required
                  />
                  <Input
                    label="End Date"
                    type="date"
                    name="endDate"
                    value={offer.endDate}
                    onChange={handleChange(setOffer, offer, "endDate")}
                    required
                  />
                </div>

                <div className="flex gap-4 mt-6">
                  <button className="flex-1 md:flex-none bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/30 hover:from-emerald-400 hover:to-emerald-500 transform active:scale-95 font-semibold group">
                    <span className="flex items-center justify-center gap-2">
                      <span>💾</span> Save Offer
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      clearForm(setOffer, {
                        title: "",
                        discount: "",
                        startDate: "",
                        endDate: "",
                      })
                    }
                    className="flex-1 md:flex-none px-8 py-3.5 rounded-xl border-2 border-slate-200 text-slate-600 hover:text-slate-800 hover:border-slate-400 transition-all duration-300 font-medium"
                  >
                    Reset
                  </button>
                </div>
              </form>
            )}

            {/* FAQ Form */}
            {activeForm === "faq" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submit("FAQ", faq);
                }}
                className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-slate-200/50 hover:border-amber-200/50 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${getHeaderGradient(
                        "faq"
                      )} rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20`}
                    >
                      <span className="text-2xl">{getFormIcon("faq")}</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                        {getFormTitle("faq")}
                      </h2>
                      <p className="text-sm text-slate-500">
                        {getFormSubtitle("faq")}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      clearForm(setFaq, {
                        question: "",
                        answer: "",
                      })
                    }
                    className="text-xs text-slate-400 hover:text-slate-600 transition-colors font-medium"
                  >
                    Clear All
                  </button>
                </div>

                <Input
                  label="Question"
                  name="question"
                  value={faq.question}
                  onChange={handleChange(setFaq, faq, "question")}
                  required
                />

                <TextArea
                  label="Answer"
                  name="answer"
                  value={faq.answer}
                  onChange={handleChange(setFaq, faq, "answer")}
                  required
                />

                <div className="flex gap-4 mt-6">
                  <button className="flex-1 md:flex-none bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/30 hover:from-amber-400 hover:to-amber-500 transform active:scale-95 font-semibold group">
                    <span className="flex items-center justify-center gap-2">
                      <span>💾</span> Save FAQ
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      clearForm(setFaq, {
                        question: "",
                        answer: "",
                      })
                    }
                    className="flex-1 md:flex-none px-8 py-3.5 rounded-xl border-2 border-slate-200 text-slate-600 hover:text-slate-800 hover:border-slate-400 transition-all duration-300 font-medium"
                  >
                    Reset
                  </button>
                </div>
              </form>
            )}

            {/* Contact Form */}
            {activeForm === "contact" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submit("Contact", contact);
                }}
                className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-slate-200/50 hover:border-cyan-200/50 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${getHeaderGradient(
                        "contact"
                      )} rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20`}
                    >
                      <span className="text-2xl">{getFormIcon("contact")}</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-sky-600 bg-clip-text text-transparent">
                        {getFormTitle("contact")}
                      </h2>
                      <p className="text-sm text-slate-500">
                        {getFormSubtitle("contact")}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      clearForm(setContact, {
                        company: "",
                        email: "",
                        phone: "",
                        address: "",
                        instagram: "",
                        facebook: "",
                      })
                    }
                    className="text-xs text-slate-400 hover:text-slate-600 transition-colors font-medium"
                  >
                    Clear All
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Company Name"
                    name="company"
                    value={contact.company}
                    onChange={handleChange(setContact, contact, "company")}
                    required
                  />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={contact.email}
                    onChange={handleChange(setContact, contact, "contactEmail")}
                    required
                  />
                  <Input
                    label="Phone"
                    name="phone"
                    value={contact.phone}
                    onChange={handleChange(setContact, contact, "contactPhone")}
                    required
                  />
                  <Input
                    label="Address"
                    name="address"
                    value={contact.address}
                    onChange={handleChange(setContact, contact, "address")}
                    required
                  />
                  <Input
                    label="Instagram"
                    name="instagram"
                    value={contact.instagram}
                    onChange={handleChange(setContact, contact, "instagram")}
                  />
                  <Input
                    label="Facebook"
                    name="facebook"
                    value={contact.facebook}
                    onChange={handleChange(setContact, contact, "facebook")}
                  />
                </div>

                <div className="flex gap-4 mt-6">
                  <button className="flex-1 md:flex-none bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/30 hover:from-cyan-400 hover:to-cyan-500 transform active:scale-95 font-semibold group">
                    <span className="flex items-center justify-center gap-2">
                      <span>💾</span> Save Contact
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      clearForm(setContact, {
                        company: "",
                        email: "",
                        phone: "",
                        address: "",
                        instagram: "",
                        facebook: "",
                      })
                    }
                    className="flex-1 md:flex-none px-8 py-3.5 rounded-xl border-2 border-slate-200 text-slate-600 hover:text-slate-800 hover:border-slate-400 transition-all duration-300 font-medium"
                  >
                    Reset
                  </button>
                </div>
              </form>
            )}

            {/* Enquiry Form */}
            {activeForm === "enquiry" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submit("Enquiry", enquiry);
                }}
                className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-slate-200/50 hover:border-rose-200/50 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${getHeaderGradient(
                        "enquiry"
                      )} rounded-xl flex items-center justify-center shadow-lg shadow-rose-500/20`}
                    >
                      <span className="text-2xl">{getFormIcon("enquiry")}</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                        {getFormTitle("enquiry")}
                      </h2>
                      <p className="text-sm text-slate-500">
                        {getFormSubtitle("enquiry")}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      clearForm(setEnquiry, {
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      })
                    }
                    className="text-xs text-slate-400 hover:text-slate-600 transition-colors font-medium"
                  >
                    Clear All
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Name"
                    name="name"
                    value={enquiry.name}
                    onChange={handleChange(setEnquiry, enquiry, "enquiryName")}
                    required
                  />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={enquiry.email}
                    onChange={handleChange(
                      setEnquiry,
                      enquiry,
                      "enquiryEmail"
                    )}
                    required
                  />
                  <Input
                    label="Phone"
                    name="phone"
                    value={enquiry.phone}
                    onChange={handleChange(
                      setEnquiry,
                      enquiry,
                      "enquiryPhone"
                    )}
                    required
                  />
                  <Input
                    label="Subject"
                    name="subject"
                    value={enquiry.subject}
                    onChange={handleChange(setEnquiry, enquiry, "subject")}
                    required
                  />
                </div>

                <TextArea
                  label="Message"
                  name="message"
                  value={enquiry.message}
                  onChange={handleChange(setEnquiry, enquiry, "message")}
                  required
                />

                <div className="flex gap-4 mt-6">
                  <button className="flex-1 md:flex-none bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-rose-500/30 hover:from-rose-400 hover:to-rose-500 transform active:scale-95 font-semibold group">
                    <span className="flex items-center justify-center gap-2">
                      <span>📤</span> Submit Enquiry
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      clearForm(setEnquiry, {
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      })
                    }
                    className="flex-1 md:flex-none px-8 py-3.5 rounded-xl border-2 border-slate-200 text-slate-600 hover:text-slate-800 hover:border-slate-400 transition-all duration-300 font-medium"
                  >
                    Reset
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes typing-glow {
          0% {
            box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);
          }
          50% {
            box-shadow: 0 0 20px 5px rgba(99, 102, 241, 0.1);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);
          }
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out;
        }

        .animate-pulse {
          animation: pulse 1.5s ease-in-out infinite;
        }

        .animate-bounce {
          animation: bounce 0.8s infinite;
        }

        .typing-effect {
          animation: typing-glow 0.5s ease;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(241, 245, 249, 0.5);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #6366f1, #3b82f6);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #818cf8, #60a5fa);
        }

        /* Fix for continuous typing */
        textarea {
          font-family: inherit;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}