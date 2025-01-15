function buy(product) {
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.innerHTML = `Anda memilih <strong>${product}</strong>!, Anda akan di arahkan ke whatsapp Owner`;

  setTimeout(() => {
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add('hide');
      setTimeout(() => {
        notification.remove();
      }, 500);
    }, 3000);
  }, 300); // Menunggu selama 2 detik
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.1)';
    button.style.transition = 'transform 0.2s ease-in-out';
  });
  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
  });
});

function showLoading(button) {
  button.disabled = true;
  button.innerHTML = '<span class="dots"><span>•</span><span>•</span><span>•</span></span>';

  setTimeout(() => {
    button.disabled = false;
    button.innerHTML = 'Beli Sekarang';
    const product = button.parentElement.querySelector('h2').innerText;
    buy(product);
  }, 2000); // Loading selesai dalam 2 detik
}

// Fungsi untuk menangani zoom pada produk
document.querySelectorAll('.product').forEach(product => {
  product.addEventListener('click', () => {
    // Hapus kelas zoom dari produk lain jika ada
    document.querySelectorAll('.product').forEach(p => p.classList.remove('zoomed'));

    // Tambahkan kelas zoom pada produk yang dipilih
    function buy(product) {
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.innerHTML = `Anda memilih <strong>${product}</strong>!, Anda akan di arahkan ke whatsapp Owner`;

  setTimeout(() => {
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add('hide');
      setTimeout(() => {
        notification.remove();
      }, 500);
    }, 3000);
  }, 300); // Menunggu selama 2 detik
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.1)';
    button.style.transition = 'transform 0.2s ease-in-out';
  });
  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
  });
});

function showLoading(button) {
  button.disabled = true;
  button.innerHTML = '<span class="dots"><span>•</span><span>•</span><span>•</span></span>';

  setTimeout(() => {
    button.disabled = false;
    button.innerHTML = 'Beli Sekarang';
    const product = button.parentElement.querySelector('h2').innerText;
    buy(product);
  }, 4000); // Loading selesai dalam 2 detik
}

// Fungsi untuk menangani zoom pada produk
document.querySelectorAll('.product').forEach(product => {
  product.addEventListener('click', () => {
    // Hapus kelas zoom dari produk lain jika ada
    document.querySelectorAll('.product').forEach(p => p.classList.remove('zoomed'));

    // Tambahkan kelas zoom pada produk yang dipilih
    product.classList.add('zoomed');
  });
});

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', (event) => {
    showLoading(event.target);
  });
});.classList.add('zoomed');
  });
});

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', (event) => {
    showLoading(event.target);
  });
});