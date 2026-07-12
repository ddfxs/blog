document.addEventListener("DOMContentLoaded", () => {
    // 1. 自动为页面注入统一的导航栏（解决了手写流重复劳动的痛点）
    const header = document.getElementById("global-header");
    if (header) {
        header.innerHTML = `
            <nav style="display: flex; justify-content: space-between; padding-bottom: 20px; border-bottom: 1px solid #ddd;">
                <a href="/" style="font-weight: bold;">🏠 我的个人主页</a>
                <div>
                    <a href="/about.html" style="margin-left: 15px;">关于</a>
                </div>
            </nav>
        `;
    }

    // 2. 自动为页面注入带年份的统一页脚
    const footer = document.getElementById("global-footer");
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = `
            <div style="text-align: center; margin-top: 50px; color: #888; font-size: 14px;">
                <p>© ${currentYear} 纯手写博客. Powered by Cloudflare Pages.</p>
            </div>
        `;
    }
});
