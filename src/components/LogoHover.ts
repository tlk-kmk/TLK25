// utils/LogoHover.ts

export const LogoHover = (element: HTMLAnchorElement) => {
  // Set initial styles for the <a> element
  element.style.position = 'relative';
  element.style.overflow = 'hidden';
  element.style.borderRadius = '20px';
  element.style.padding = '5px';
  element.style.transition = 'transform 300ms ease-in-out'; // Add transition for scale
  element.style.transform = 'scale(1)'; // Initial scale

  const img = element.querySelector('img');
  if (img) {
    img.style.transition = 'filter 300ms ease-in-out';
    img.style.position = 'relative';
  }

  // Inject CSS for the pseudo-element
  const style = document.createElement('style');
  style.textContent = `
    .socialmedia::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(to bottom right, #E7EBF9, #FFFFFF);
      opacity: 0;
      transition: opacity 300ms ease-in-out;
      z-index: -1;
    }
    .socialmedia.hovered::before,
    .socialmedia.clicked::before {
      opacity: 1;
    }
  `;
  document.head.appendChild(style);

  element.addEventListener('mouseenter', () => {
    element.classList.add('hovered');
    element.style.transform = 'scale(1.1)'; // Apply scale on hover
    if (img) {
      img.style.filter = 'invert(1)';
    }
  });

  element.addEventListener('mouseleave', () => {
    element.classList.remove('hovered');
    element.style.transform = 'scale(1)'; // Revert scale on mouse leave
    if (img) {
      img.style.filter = 'invert(0)';
    }
  });

  element.addEventListener('click', () => {
    element.classList.add('clicked');
    element.style.transform = 'scale(1.1)'; // Apply scale on click
    if (img) {
      img.style.filter = 'invert(1)';
    }
    setTimeout(() => {
      element.classList.remove('clicked');
      element.style.transform = 'scale(1)'; // Revert scale after click
      if (img) {
        img.style.filter = 'invert(0)';
      }
    }, 500);
  });
};