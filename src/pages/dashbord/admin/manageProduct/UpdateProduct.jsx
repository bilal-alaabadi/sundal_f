// src/pages/dashboard/products/manageProduct/UpdateProduct.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchProductByIdQuery, useUpdateProductMutation } from '../../../../redux/features/products/productsApi';
import { useSelector } from 'react-redux';
import TextInput from '../addProduct/TextInput';
import SelectInput from '../addProduct/SelectInput';
import UploadImage from '../addProduct/UploadImage';

// ====== الفئات والأنواع (نفس خريطة الباك) ======
const CATEGORY_OPTIONS = [
  { label: 'أختر منتج', value: '' },
  { label: 'العناية بالبشرة', value: 'العناية بالبشرة' },
  { label: 'العناية بالشعر', value: 'العناية بالشعر' },
  { label: 'العناية بالشفاه', value: 'العناية بالشفاه' },
  { label: 'العطور والبخور', value: 'العطور والبخور' },
  { label: 'إكسسوارات العناية', value: 'إكسسوارات العناية' },
];

const SUBCATEGORIES_MAP = {
  'العناية بالبشرة': ['صوابين', 'مقشرات', 'تونر', 'ماسكات'],
  'العناية بالشعر': ['شامبوهات', 'زيوت', 'أقنعة'],
  'العناية بالشفاه': ['مرطب', 'محدد', 'مقشر'],
  'العطور والبخور': [],
  'إكسسوارات العناية': ['لوفة', 'فرش', 'أدوات'],
};

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const { data: productData, isLoading: isFetching, error: fetchError } = useFetchProductByIdQuery(id);
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();

  const [product, setProduct] = useState({
    name: '',
    category: '',
    subcategory: '',
    price: '',
    oldPrice: '',
    description: '',
    image: [], // صور حالية (روابط)
  });

  // صور جديدة (ملفات) سيتم رفعها الآن
  const [newImages, setNewImages] = useState([]); // File[]

  // الأنواع المتاحة حسب الفئة
  const availableSubcategories = useMemo(
    () => SUBCATEGORIES_MAP[product.category] || [],
    [product.category]
  );

  useEffect(() => {
    if (productData) {
      setProduct({
        name: productData.name || '',
        category: productData.category || '',
        subcategory: productData.subcategory || '',
        price: productData.price != null ? String(productData.price) : '',
        oldPrice: productData.oldPrice != null ? String(productData.oldPrice) : '',
        description: productData.description || '',
        image: Array.isArray(productData.image) ? productData.image : [],
      });
    }
  }, [productData]);

  // تنظيف subcategory لو الفئة الجديدة ما فيها أنواع
  useEffect(() => {
    if ((SUBCATEGORIES_MAP[product.category] || []).length === 0) {
      setProduct(prev => ({ ...prev, subcategory: '' }));
    }
  }, [product.category]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // تحقق الحقول
    const requiredFields = {
      'اسم المنتج': product.name,
      'صنف المنتج': product.category,
      'السعر': product.price,
      'الوصف': product.description,
    };

    // إذا الفئة لها أنواع، subcategory مطلوب
    if ((SUBCATEGORIES_MAP[product.category] || []).length > 0 && !product.subcategory) {
      alert('الرجاء اختيار النوع (subcategory) لهذه الفئة');
      return;
    }

    const missing = Object.entries(requiredFields).filter(([_, v]) => !v).map(([k]) => k);
    if (missing.length) {
      alert(`الرجاء ملء الحقول التالية: ${missing.join('، ')}`);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', product.name);
      formData.append('category', product.category);
      if (product.subcategory) formData.append('subcategory', product.subcategory);
      formData.append('price', product.price);
      formData.append('oldPrice', product.oldPrice || '');
      formData.append('description', product.description);
      formData.append('author', user?._id || '');

      // مرّر الصور القديمة التي تريد الإبقاء عليها (كرابط/مسار)
      // الباك يقبل existingImages[] أو existingImages كـ JSON
      product.image.forEach((img) => formData.append('existingImages[]', img));

      // أرفق الصور الجديدة (ملفات)
      newImages.forEach((file) => formData.append('image', file));

      await updateProduct({ id, body: formData }).unwrap();
      alert('تم تحديث المنتج بنجاح');
      navigate('/dashboard/manage-products');
    } catch (error) {
      console.error('فشل تحديث المنتج:', error);
      alert('حدث خطأ أثناء تحديث المنتج: ' + (error?.data?.message || error.message));
    }
  };

  if (isFetching) return <div className="text-center py-8">جاري تحميل بيانات المنتج...</div>;
  if (fetchError) return <div className="text-center py-8 text-red-500">خطأ في تحميل بيانات المنتج</div>;

  return (
    <div className="container mx-auto mt-8 px-4" dir="rtl">
      <h2 className="text-2xl font-bold mb-6 text-right">تحديث المنتج</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextInput
          label="اسم المنتج"
          name="name"
          placeholder="أكتب اسم المنتج"
          value={product.name}
          onChange={handleChange}
          required
        />

        <SelectInput
          label="صنف المنتج"
          name="category"
          value={product.category}
          onChange={handleChange}
          options={CATEGORY_OPTIONS}
          required
        />

        {availableSubcategories.length > 0 && (
          <SelectInput
            label="النوع"
            name="subcategory"
            value={product.subcategory}
            onChange={handleChange}
            options={[
              { label: 'أختر النوع', value: '' },
              ...availableSubcategories.map(s => ({ label: s, value: s })),
            ]}
            required
          />
        )}

        <TextInput
          label="السعر الحالي"
          name="price"
          type="number"
          placeholder="50"
          value={product.price}
          onChange={handleChange}
          required
        />

        <TextInput
          label="السعر القديم (اختياري)"
          name="oldPrice"
          type="number"
          placeholder="100"
          value={product.oldPrice}
          onChange={handleChange}
        />

        {/* مكوّن الصور:
            - initialImages: لعرض الصور الحالية
            - setImages: يرجّع ملفات جديدة (File[]) */}
        <UploadImage
          name="image"
          id="image"
          initialImages={product.image}
          setImages={setNewImages}
        />

        <div className="text-right">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            وصف المنتج
          </label>
          <textarea
            name="description"
            id="description"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
            value={product.description}
            placeholder="أكتب وصف المنتج"
            onChange={handleChange}
            required
            rows={4}
          />
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            disabled={isUpdating}
          >
            {isUpdating ? 'جاري التحديث...' : 'حفظ التغييرات'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
