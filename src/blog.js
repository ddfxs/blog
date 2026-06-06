// 博客增强功能
class Blog {
    constructor() {
        this.posts = [];
    }
    
    // 加载文章索引
    async loadIndex() {
        try {
            const response = await fetch('posts/posts-index.js');
            this.posts = await response.json();
            return this.posts;
        } catch (error) {
            console.error('加载文章索引失败:', error);
            return [];
        }
    }
    
    // 搜索文章
    search(keyword) {
        if (!keyword.trim()) return this.posts;
        
        return this.posts.filter(post => 
            post.title.toLowerCase().includes(keyword.toLowerCase()) ||
            (post.excerpt && post.excerpt.toLowerCase().includes(keyword.toLowerCase())) ||
            (post.category && post.category.toLowerCase().includes(keyword.toLowerCase()))
        );
    }
    
    // 按分类筛选
    filterByCategory(category) {
        if (!category) return this.posts;
        return this.posts.filter(post => post.category === category);
    }
    
    // 获取所有分类
    getCategories() {
        const categories = new Set();
        this.posts.forEach(post => {
            if (post.category) categories.add(post.category);
        });
        return Array.from(categories);
    }
}

// 初始化博客实例
const blog = new Blog();