import { useState } from "react";

export default function App() {
  const [activeForm, setActiveForm] = useState("product");

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

  const handleChange = (setter, state) => (e) => {
    setter({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (title, data) => {
    console.log(title, data);
    alert(`${title} Submitted Successfully`);
  };

  const Input = ({ label, name, value, onChange, type = "text" }) => (
    <div className="mb-4">
      <label className="block font-medium mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none"
      />
    </div>
  );

  const TextArea = ({ label, name, value, onChange }) => (
    <div className="mb-4">
      <label className="block font-medium mb-2">{label}</label>
      <textarea
        rows="4"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pink-500 outline-none"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-pink-50">

      <div className="bg-pink-600 text-white p-5 shadow-lg">
        <h1 className="text-3xl font-bold text-center">
          Cosmetics Admin Dashboard
        </h1>
      </div>

      <div className="flex">

        {/* Sidebar */}

        <div className="w-64 bg-white shadow-lg min-h-screen p-5">

          <button
            onClick={() => setActiveForm("product")}
            className="w-full mb-3 bg-pink-500 text-white p-3 rounded"
          >
            Product Form
          </button>

          <button
            onClick={() => setActiveForm("category")}
            className="w-full mb-3 bg-purple-500 text-white p-3 rounded"
          >
            Category Form
          </button>

          <button
            onClick={() => setActiveForm("offer")}
            className="w-full mb-3 bg-green-500 text-white p-3 rounded"
          >
            Offer Form
          </button>

          <button
            onClick={() => setActiveForm("faq")}
            className="w-full mb-3 bg-orange-500 text-white p-3 rounded"
          >
            FAQ Form
          </button>

          <button
            onClick={() => setActiveForm("contact")}
            className="w-full mb-3 bg-blue-500 text-white p-3 rounded"
          >
            Contact Form
          </button>

          <button
            onClick={() => setActiveForm("enquiry")}
            className="w-full bg-red-500 text-white p-3 rounded"
          >
            Enquiry Form
          </button>

        </div>

        {/* Content */}

        <div className="flex-1 p-10">

          {/* Product */}

          {activeForm === "product" && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit("Product", product);
              }}
              className="bg-white p-8 rounded-xl shadow"
            >
              <h2 className="text-2xl font-bold mb-6">Add Product</h2>

              <Input label="Product Name" name="name"
                value={product.name}
                onChange={handleChange(setProduct, product)}
              />

              <Input label="Brand" name="brand"
                value={product.brand}
                onChange={handleChange(setProduct, product)}
              />

              <Input label="Category" name="category"
                value={product.category}
                onChange={handleChange(setProduct, product)}
              />

              <Input label="Price" name="price"
                type="number"
                value={product.price}
                onChange={handleChange(setProduct, product)}
              />

              <Input label="Stock" name="stock"
                type="number"
                value={product.stock}
                onChange={handleChange(setProduct, product)}
              />

              <Input label="Image URL" name="image"
                value={product.image}
                onChange={handleChange(setProduct, product)}
              />

              <TextArea label="Description"
                name="description"
                value={product.description}
                onChange={handleChange(setProduct, product)}
              />

              <button className="bg-pink-600 text-white px-8 py-3 rounded-lg">
                Save Product
              </button>

            </form>
          )}

          {/* Category */}

          {activeForm === "category" && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit("Category", category);
              }}
              className="bg-white p-8 rounded-xl shadow"
            >
              <h2 className="text-2xl font-bold mb-6">Category Form</h2>

              <Input
                label="Category Name"
                name="name"
                value={category.name}
                onChange={handleChange(setCategory, category)}
              />

              <Input
                label="Category Image"
                name="image"
                value={category.image}
                onChange={handleChange(setCategory, category)}
              />

              <TextArea
                label="Description"
                name="description"
                value={category.description}
                onChange={handleChange(setCategory, category)}
              />

              <button className="bg-purple-600 text-white px-8 py-3 rounded">
                Save Category
              </button>

            </form>
          )}

          {/* Offer */}

          {activeForm === "offer" && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit("Offer", offer);
              }}
              className="bg-white p-8 rounded-xl shadow"
            >
              <h2 className="text-2xl font-bold mb-6">Offer Form</h2>

              <Input
                label="Offer Title"
                name="title"
                value={offer.title}
                onChange={handleChange(setOffer, offer)}
              />

              <Input
                label="Discount %"
                name="discount"
                value={offer.discount}
                onChange={handleChange(setOffer, offer)}
              />

              <Input
                label="Start Date"
                type="date"
                name="startDate"
                value={offer.startDate}
                onChange={handleChange(setOffer, offer)}
              />

              <Input
                label="End Date"
                type="date"
                name="endDate"
                value={offer.endDate}
                onChange={handleChange(setOffer, offer)}
              />

              <button className="bg-green-600 text-white px-8 py-3 rounded">
                Save Offer
              </button>

            </form>
          )}

          {/* FAQ */}

          {activeForm === "faq" && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit("FAQ", faq);
              }}
              className="bg-white p-8 rounded-xl shadow"
            >
              <h2 className="text-2xl font-bold mb-6">FAQ Form</h2>

              <Input
                label="Question"
                name="question"
                value={faq.question}
                onChange={handleChange(setFaq, faq)}
              />

              <TextArea
                label="Answer"
                name="answer"
                value={faq.answer}
                onChange={handleChange(setFaq, faq)}
              />

              <button className="bg-orange-600 text-white px-8 py-3 rounded">
                Save FAQ
              </button>

            </form>
          )}

          {/* Contact */}

          {activeForm === "contact" && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit("Contact", contact);
              }}
              className="bg-white p-8 rounded-xl shadow"
            >
              <h2 className="text-2xl font-bold mb-6">Contact Details</h2>

              <Input label="Company Name" name="company"
                value={contact.company}
                onChange={handleChange(setContact, contact)}
              />

              <Input label="Email" name="email"
                value={contact.email}
                onChange={handleChange(setContact, contact)}
              />

              <Input label="Phone" name="phone"
                value={contact.phone}
                onChange={handleChange(setContact, contact)}
              />

              <Input label="Address" name="address"
                value={contact.address}
                onChange={handleChange(setContact, contact)}
              />

              <Input label="Instagram" name="instagram"
                value={contact.instagram}
                onChange={handleChange(setContact, contact)}
              />

              <Input label="Facebook" name="facebook"
                value={contact.facebook}
                onChange={handleChange(setContact, contact)}
              />

              <button className="bg-blue-600 text-white px-8 py-3 rounded">
                Save Contact
              </button>

            </form>
          )}

          {/* Enquiry */}

          {activeForm === "enquiry" && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit("Enquiry", enquiry);
              }}
              className="bg-white p-8 rounded-xl shadow"
            >
              <h2 className="text-2xl font-bold mb-6">Customer Enquiry</h2>

              <Input label="Name" name="name"
                value={enquiry.name}
                onChange={handleChange(setEnquiry, enquiry)}
              />

              <Input label="Email" name="email"
                value={enquiry.email}
                onChange={handleChange(setEnquiry, enquiry)}
              />

              <Input label="Phone" name="phone"
                value={enquiry.phone}
                onChange={handleChange(setEnquiry, enquiry)}
              />

              <Input label="Subject" name="subject"
                value={enquiry.subject}
                onChange={handleChange(setEnquiry, enquiry)}
              />

              <TextArea
                label="Message"
                name="message"
                value={enquiry.message}
                onChange={handleChange(setEnquiry, enquiry)}
              />

              <button className="bg-red-600 text-white px-8 py-3 rounded">
                Submit Enquiry
              </button>

            </form>
          )}

        </div>
      </div>
    </div>
  );
}