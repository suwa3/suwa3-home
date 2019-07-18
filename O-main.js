'use script';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    // const results = ['A', 'B', 'C'];
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];
    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = 'A'; // 5%
    } else if (n < 0.2) {
      btn.textContent = 'B'; // 15%
    } else {
      btn.textContent = 'C'; // 80%
    }
  });

  btn.addEventListener('mousedown', () => {
    btn.classList.add('pressed');
  });
  btn.addEventListener('mouseup', () => {
    btn.classList.remove('pressed');
  });
}
