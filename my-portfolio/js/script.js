document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio của Nguyễn Phúc Đức đã tải xong!');
  const form = document.querySelector('#contactForm');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Cảm ơn bạn! Đây là biểu mẫu minh họa, chưa gửi dữ liệu lên máy chủ.');
      form.reset();
    });
  }
});
