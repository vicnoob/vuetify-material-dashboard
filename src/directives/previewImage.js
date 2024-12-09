export default {
  bind(el, binding) {
    el.style.cursor = 'pointer';

    el.addEventListener('click', () => {
      const src = binding.value;
      if (!src) return;

      // Create overlay
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.zIndex = 9999;

      // Create enlarged image
      const img = document.createElement('img');
      img.src = src;
      img.style.maxWidth = '90%';
      img.style.maxHeight = '90%';
      img.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.5)';
      img.style.borderRadius = '8px';

      // Append enlarged image to overlay
      overlay.appendChild(img);

      // Add click event to remove overlay
      overlay.addEventListener('click', () => {
        document.body.removeChild(overlay);
      });

      // Append overlay to body
      document.body.appendChild(overlay);
    });
  },
};
