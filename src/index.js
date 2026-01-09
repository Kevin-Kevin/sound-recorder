// src/index.js - 适配静态资产部署，保留扩展空间
export default {
  async fetch(request, env, ctx) {
    try {
      // 第一步：优先转发请求，匹配 public 中的静态 HTML（核心）
      const staticResponse = await fetch(request);
      return staticResponse;
    } catch (err) {
      // 第二步：静态文件不存在时，返回自定义 404（可选扩展）
      return new Response('静态页面不存在!！', {
        status: 404,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      });
    }
  },
};