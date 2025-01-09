import { io } from 'socket.io-client';

// const socket = io('https://celebright.p-e.kr/api'); // WebSocket 서버 URL 확인
const socket = io('https://celebright.p-e.kr/api', {
  path: '/api', // 백엔드의 path와 동일하게 설정
  transports: ['websocket'], // 폴링 대신 WebSocket을 우선적으로 사용
  withCredentials: true, // 인증 정보 포함
});
socket.on('new_notification', (data) => {
  console.log('New notification received:', data);
  // 알림을 처리하는 로직 추가
});

export default socket;
