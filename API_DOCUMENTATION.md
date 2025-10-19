# Blog & Category API Documentation

## 📋 Overview
This document describes all the available APIs for managing blogs and categories in your application.

---

## 🔖 Blog APIs

### 1. Get All Blogs
**Endpoint:** `GET /api/blogs`

**Description:** Retrieve all blogs sorted by date (newest first)

**Response:**
```json
{
  "blogs": [
    {
      "_id": "blog_id",
      "title": "Blog Title",
      "description": "Blog description",
      "image": "image_url",
      "date": "2025-10-19T00:00:00.000Z",
      "category": "Technology",
      "createdAt": "2025-10-19T10:00:00.000Z",
      "updatedAt": "2025-10-19T10:00:00.000Z"
    }
  ],
  "success": true
}
```

---

### 2. Create New Blog
**Endpoint:** `POST /api/blogs`

**Description:** Create a new blog post

**Request Body:**
```json
{
  "title": "My New Blog",
  "description": "This is a detailed description of the blog",
  "image": "https://example.com/image.jpg",
  "date": "2025-10-19",
  "category": "Technology"
}
```

**Response:**
```json
{
  "msg": "Blog created successfully",
  "blog": {
    "_id": "new_blog_id",
    "title": "My New Blog",
    "description": "This is a detailed description of the blog",
    "image": "https://example.com/image.jpg",
    "date": "2025-10-19T00:00:00.000Z",
    "category": "Technology",
    "createdAt": "2025-10-19T10:00:00.000Z",
    "updatedAt": "2025-10-19T10:00:00.000Z"
  },
  "success": true
}
```

---

### 3. Get Single Blog
**Endpoint:** `GET /api/blogs/[id]`

**Description:** Retrieve a specific blog by ID

**Example:** `GET /api/blogs/507f1f77bcf86cd799439011`

**Response:**
```json
{
  "blog": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Blog Title",
    "description": "Blog description",
    "image": "image_url",
    "date": "2025-10-19T00:00:00.000Z",
    "category": "Technology",
    "createdAt": "2025-10-19T10:00:00.000Z",
    "updatedAt": "2025-10-19T10:00:00.000Z"
  },
  "success": true
}
```

---

### 4. Update Blog
**Endpoint:** `PUT /api/blogs/[id]`

**Description:** Update an existing blog

**Example:** `PUT /api/blogs/507f1f77bcf86cd799439011`

**Request Body:**
```json
{
  "title": "Updated Blog Title",
  "description": "Updated description",
  "image": "https://example.com/new-image.jpg",
  "date": "2025-10-20",
  "category": "Business"
}
```

**Response:**
```json
{
  "msg": "Blog updated successfully",
  "blog": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Updated Blog Title",
    "description": "Updated description",
    "image": "https://example.com/new-image.jpg",
    "date": "2025-10-20T00:00:00.000Z",
    "category": "Business",
    "createdAt": "2025-10-19T10:00:00.000Z",
    "updatedAt": "2025-10-20T11:00:00.000Z"
  },
  "success": true
}
```

---

### 5. Delete Blog
**Endpoint:** `DELETE /api/blogs/[id]`

**Description:** Delete a blog by ID

**Example:** `DELETE /api/blogs/507f1f77bcf86cd799439011`

**Response:**
```json
{
  "msg": "Blog deleted successfully",
  "success": true
}
```

---

## 📁 Category APIs

### 1. Get All Categories
**Endpoint:** `GET /api/categories`

**Description:** Retrieve all categories sorted alphabetically

**Response:**
```json
{
  "categories": [
    {
      "_id": "category_id",
      "name": "Technology",
      "createdAt": "2025-10-19T10:00:00.000Z",
      "updatedAt": "2025-10-19T10:00:00.000Z"
    },
    {
      "_id": "category_id_2",
      "name": "Business",
      "createdAt": "2025-10-19T10:00:00.000Z",
      "updatedAt": "2025-10-19T10:00:00.000Z"
    }
  ],
  "success": true
}
```

---

### 2. Create New Category
**Endpoint:** `POST /api/categories`

**Description:** Create a new category

**Request Body:**
```json
{
  "name": "Technology"
}
```

**Response:**
```json
{
  "msg": "Category created successfully",
  "category": {
    "_id": "new_category_id",
    "name": "Technology",
    "createdAt": "2025-10-19T10:00:00.000Z",
    "updatedAt": "2025-10-19T10:00:00.000Z"
  },
  "success": true
}
```

**Error (if category exists):**
```json
{
  "msg": "Category already exists",
  "success": false
}
```

---

### 3. Update Category
**Endpoint:** `PUT /api/categories/[id]`

**Description:** Update an existing category

**Example:** `PUT /api/categories/507f1f77bcf86cd799439011`

**Request Body:**
```json
{
  "name": "Updated Category Name"
}
```

**Response:**
```json
{
  "msg": "Category updated successfully",
  "category": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Updated Category Name",
    "createdAt": "2025-10-19T10:00:00.000Z",
    "updatedAt": "2025-10-20T11:00:00.000Z"
  },
  "success": true
}
```

---

### 4. Delete Category
**Endpoint:** `DELETE /api/categories/[id]`

**Description:** Delete a category by ID

**Example:** `DELETE /api/categories/507f1f77bcf86cd799439011`

**Response:**
```json
{
  "msg": "Category deleted successfully",
  "success": true
}
```

---

## 🔍 Usage Examples

### JavaScript/TypeScript (Fetch API)

#### Create a Blog
```javascript
const createBlog = async () => {
  const response = await fetch('/api/blogs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: 'My New Blog',
      description: 'This is a detailed description',
      image: 'https://example.com/image.jpg',
      date: '2025-10-19',
      category: 'Technology'
    })
  });
  
  const data = await response.json();
  console.log(data);
};
```

#### Get All Blogs
```javascript
const getAllBlogs = async () => {
  const response = await fetch('/api/blogs');
  const data = await response.json();
  console.log(data.blogs);
};
```

#### Update a Blog
```javascript
const updateBlog = async (blogId) => {
  const response = await fetch(`/api/blogs/${blogId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: 'Updated Title',
      description: 'Updated description',
      image: 'https://example.com/new-image.jpg',
      date: '2025-10-20',
      category: 'Business'
    })
  });
  
  const data = await response.json();
  console.log(data);
};
```

#### Delete a Blog
```javascript
const deleteBlog = async (blogId) => {
  const response = await fetch(`/api/blogs/${blogId}`, {
    method: 'DELETE'
  });
  
  const data = await response.json();
  console.log(data);
};
```

#### Get All Categories
```javascript
const getAllCategories = async () => {
  const response = await fetch('/api/categories');
  const data = await response.json();
  console.log(data.categories);
};
```

#### Create a Category
```javascript
const createCategory = async () => {
  const response = await fetch('/api/categories', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'Technology'
    })
  });
  
  const data = await response.json();
  console.log(data);
};
```

---

## 📝 Notes

- All dates should be in ISO 8601 format (e.g., "2025-10-19" or "2025-10-19T10:00:00.000Z")
- All image fields should contain valid URLs
- Category names must be unique
- All blog fields (title, description, image, date, category) are required
- The APIs automatically handle MongoDB connection via the `connectToDB` utility
- Blogs are sorted by date in descending order (newest first)
- Categories are sorted alphabetically by name

---

## ⚠️ Error Responses

All APIs return standardized error responses:

```json
{
  "msg": "Error message description",
  "success": false
}
```

Common HTTP status codes:
- `200`: Success (GET, PUT, DELETE)
- `201`: Created (POST)
- `400`: Bad Request (validation errors)
- `404`: Not Found
- `500`: Server Error
