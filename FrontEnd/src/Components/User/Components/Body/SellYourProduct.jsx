import React, { useState } from 'react';
import "../CSS/SellYourProduct.css";

export default function SellYourProduct() {
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    price: '',
    quantity: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const categories = [
    'Electronics',
    'Fashion',
    'Home & Kitchen',
    'Sports & Outdoors',
    'Books & Media',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setSuccessMessage('Product listed successfully!');
      setFormData({
        productName: '',
        category: '',
        price: '',
        quantity: '',
        description: ''
      });
      setIsSubmitting(false);
      
      setTimeout(() => setSuccessMessage(''), 5000);
    }, 1500);
  };

  return (
    <React.Fragment>
      <div className="SellYourProductMainContainer">
        {/* Header Section */}
        <div className="sellHeaderSection">
          <h2 className="sellPageTitle">Sell Your Product</h2>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="successMessage">
            <span className="successIcon">✓</span>
            <p>{successMessage}</p>
          </div>
        )}

        {/* Form Section */}
        <form className="sellProductForm" onSubmit={handleSubmit}>
          <div className="formSection">
            <h3 className="formSectionTitle">Product Details</h3>
            
            <div className="formGroup fullWidth">
              <label className="formLabel">Product Name *</label>
              <input
                type="text"
                name="productName"
                className="formInput"
                placeholder="Enter product name"
                value={formData.productName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="formRow">
              <div className="formGroup">
                <label className="formLabel">Category *</label>
                <select
                  name="category"
                  className="formInput"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="formGroup">
                <label className="formLabel">Price *</label>
                <div className="priceInputWrapper">
                  <span className="currencySymbol">$</span>
                  <input
                    type="number"
                    name="price"
                    className="formInput priceInput"
                    placeholder="0.00"
                    value={formData.price}
                    onChange={handleInputChange}
                    step="0.01"
                    required
                  />
                </div>
              </div>

              <div className="formGroup">
                <label className="formLabel">Quantity *</label>
                <input
                  type="number"
                  name="quantity"
                  className="formInput"
                  placeholder="Number of items"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="formGroup fullWidth">
              <label className="formLabel">Description *</label>
              <textarea
                name="description"
                className="formTextarea"
                placeholder="Describe your product"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                required
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="formActions">
            <button 
              type="submit" 
              className="submitButton"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Listing...' : 'List Product'}
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

