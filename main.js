/* simple interaction for proceed button and small entrance polish */
const btn = document.getElementById('proceed');

btn.addEventListener('click', async () => {
  // quick click animation
  btn.animate(
    [{ transform: 'scale(1)' }, { transform: 'scale(0.98)' }, { transform: 'scale(1)' }],
    { duration: 220, easing: 'cubic-bezier(.2,.9,.2,1)' }
  );

  // replace this with navigation or app bootstrap
  btn.disabled = true;
  btn.querySelector('.label').textContent = 'loading…';

  // fake load then dispatch a custom event so integrator can hook in
  setTimeout(() => {
    btn.querySelector('.label').textContent = 'proceeding';
    window.dispatchEvent(new CustomEvent('obcodex:proceed'));
  }, 700);
});

/* expose a tiny API to listen for proceed from other scripts */
export function onProceed(handler){
  window.addEventListener('obcodex:proceed', handler, { once: true });
}

