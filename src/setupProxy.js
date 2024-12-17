import { createProxyMiddleware } from 'http-proxy-middleware';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://celebright.p-e.k', // 프록시할 대상 서버의 URL 입력
      changeOrigin: true,
    })
  );
}
