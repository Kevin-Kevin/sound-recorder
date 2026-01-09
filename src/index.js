// src/index.js - Worker 核心入口脚本
export default {
  // Fetch 事件入口，处理所有请求
  async fetch(request, env, ctx) {
    // 返回简单响应，用于验证部署成功
    return new Response('GitHub 关联 Worker 部署成功！', {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  },
};