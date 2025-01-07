import { io } from 'socket.io-client';

const socket = io('https://celebright.p-e.kr/api'); // WebSocket 서버 URL 확인

socket.on('new_notification', (data) => {
  console.log('New notification received:', data);
  // 알림을 처리하는 로직 추가
});

export default socket;
