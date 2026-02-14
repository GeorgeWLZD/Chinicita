document.addEventListener('DOMContentLoaded', () => {
    // Envelope Interaction
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelope-container');
    const mainContent = document.getElementById('main-content');

    envelope.addEventListener('click', () => {
        envelope.classList.add('open');

        // Wait for animation, then fade out envelope and show content
        setTimeout(() => {
            envelopeContainer.style.opacity = '0';
            setTimeout(() => {
                envelopeContainer.style.display = 'none';
                mainContent.classList.remove('hidden');
            }, 1000);
        }, 1500);
    });

    // Gallery Data
    // Note for User: Update the messages here!
    const memories = [
        { file: "1.jpg", message: "Recuerdo especial ❤️" },
        { file: "2.jpg", message: "En Esan donde nos conocimos ✨" },
        { file: "3.jpeg", message: "De la manito siempre 🥰" },
        { file: "4.jpeg", message: "Mi persona favorita 🌹" },
        { file: "5.jpeg", message: "Sonrisas que enamoran 😍" },
        { file: "6.jpg", message: "Juntos es Chosica 🏡" },
        { file: "7.jpg", message: "Mi marketera top 🙌" },
        { file: "8.jpg", message: "Tú y yo siempre juntitos 💑" },
        { file: "9.jpg", message: "Mi alegría tiene tu nombre 😊" },
        { file: "10.jpg", message: "Un día bonito 🌟" },
        { file: "11.jpg", message: "Eres una cosita bien hecha 💖" },
        { file: "12.jpeg", message: "Mi amor bonito 💕" }
    ];

    const galleryContainer = document.getElementById('gallery');
    const modal = document.getElementById('photo-modal');
    const modalImg = document.getElementById('modal-img');
    const modalMessage = document.getElementById('modal-message');
    const closeModal = document.querySelector('.close-modal');

    // Populate Gallery
    memories.forEach(memory => {
        const item = document.createElement('div');
        item.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = `img/${memory.file}`;
        img.alt = memory.message;
        img.loading = 'lazy'; // Improve performance

        item.appendChild(img);
        galleryContainer.appendChild(item);

        // Click event for modal
        item.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = `img/${memory.file}`;
            modalMessage.textContent = memory.message;
        });
    });

    // Close Modal Logic
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
