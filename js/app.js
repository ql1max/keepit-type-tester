// DOM Elements
const sliders = {
    h1: document.getElementById('h1-spacing'),
    h2: document.getElementById('h2-spacing'),
    h3: document.getElementById('h3-spacing'),
    h4: document.getElementById('h4-spacing'),
    h5: document.getElementById('h5-spacing'),
    h6: document.getElementById('h6-spacing'),
    body: document.getElementById('body-spacing'),
    small: document.getElementById('small-spacing'),
    caption: document.getElementById('caption-spacing')
};

const values = {
    h1: document.getElementById('h1-value'),
    h2: document.getElementById('h2-value'),
    h3: document.getElementById('h3-value'),
    h4: document.getElementById('h4-value'),
    h5: document.getElementById('h5-value'),
    h6: document.getElementById('h6-value'),
    body: document.getElementById('body-value'),
    small: document.getElementById('small-value'),
    caption: document.getElementById('caption-value')
};

const specs = {
    h1: document.getElementById('h1-spec'),
    h2: document.getElementById('h2-spec'),
    h3: document.getElementById('h3-spec'),
    h4: document.getElementById('h4-spec'),
    h5: document.getElementById('h5-spec'),
    h6: document.getElementById('h6-spec'),
    body: document.getElementById('body-spec'),
    small: document.getElementById('small-spec'),
    caption: document.getElementById('caption-spec')
};

// Update spacing for a specific level
function updateSpacing(level) {
    const value = parseInt(sliders[level].value);
    const em = (value / 1000).toFixed(3);
    const percent = (value / 10).toFixed(1);

    values[level].textContent = `${em}em / ${percent}%`;
    specs[level].textContent = `${em}em`;

    const samples = document.querySelectorAll(`.adjustable .${level}-sample`);
    samples.forEach(sample => {
        sample.style.letterSpacing = `${em}em`;
    });

    updateCSSOutput();
}

// Generate CSS output
function updateCSSOutput() {
    const css = `/* Typography - Plus Jakarta Sans
 * Base: html { font-size: 62.5%; } (1rem = 10px)
 */

h1 {
  font-size: 6.4rem; /* 64px */
  line-height: 7.6rem; /* 76px */
  font-weight: 600;
  letter-spacing: ${(parseInt(sliders.h1.value) / 1000).toFixed(3)}em;
}

h2 {
  font-size: 4.8rem; /* 48px */
  line-height: 6.0rem; /* 60px */
  font-weight: 600;
  letter-spacing: ${(parseInt(sliders.h2.value) / 1000).toFixed(3)}em;
}

h3 {
  font-size: 3.8rem; /* 38px */
  line-height: 4.8rem; /* 48px */
  font-weight: 600;
  letter-spacing: ${(parseInt(sliders.h3.value) / 1000).toFixed(3)}em;
}

h4 {
  font-size: 3.0rem; /* 30px */
  line-height: 3.8rem; /* 38px */
  font-weight: 600;
  letter-spacing: ${(parseInt(sliders.h4.value) / 1000).toFixed(3)}em;
}

h5 {
  font-size: 2.4rem; /* 24px */
  line-height: 3.2rem; /* 32px */
  font-weight: 500;
  letter-spacing: ${(parseInt(sliders.h5.value) / 1000).toFixed(3)}em;
}

h6 {
  font-size: 2.0rem; /* 20px */
  line-height: 2.8rem; /* 28px */
  font-weight: 500;
  letter-spacing: ${(parseInt(sliders.h6.value) / 1000).toFixed(3)}em;
}

.body, p {
  font-size: 1.6rem; /* 16px */
  line-height: 2.4rem; /* 24px */
  font-weight: 400;
  letter-spacing: ${(parseInt(sliders.body.value) / 1000).toFixed(3)}em;
}

.small {
  font-size: 1.4rem; /* 14px */
  line-height: 2.0rem; /* 20px */
  font-weight: 400;
  letter-spacing: ${(parseInt(sliders.small.value) / 1000).toFixed(3)}em;
}

.caption {
  font-size: 1.2rem; /* 12px */
  line-height: 1.8rem; /* 18px */
  font-weight: 400;
  letter-spacing: ${(parseInt(sliders.caption.value) / 1000).toFixed(3)}em;
}`;
    document.getElementById('css-output').textContent = css;
}

// Preset functions
function applyRecommended() {
    // Recommended values for Plus Jakarta Sans with antialiasing
    // Antialiasing makes text appear slightly bolder, so slightly looser spacing works better
    sliders.h1.value = -15;  // -1.5%
    sliders.h2.value = -12;  // -1.2%
    sliders.h3.value = -10;  // -1.0%
    sliders.h4.value = -8;   // -0.8%
    sliders.h5.value = -5;   // -0.5%
    sliders.h6.value = 0;    // 0%
    sliders.body.value = 5;  // 0.5% - Better for long-form reading
    sliders.small.value = 10; // 1% - Maintains current value (optimal)
    sliders.caption.value = 15; // 1.5% - Slightly reduced from 2% for cleaner look

    Object.keys(sliders).forEach(level => updateSpacing(level));
}

function resetToOriginal() {
    sliders.h1.value = -20;
    sliders.h2.value = -20;
    sliders.h3.value = -20;
    sliders.h4.value = -20;
    sliders.h5.value = -15;
    sliders.h6.value = -10;
    sliders.body.value = 0;
    sliders.small.value = 10;
    sliders.caption.value = 20;

    Object.keys(sliders).forEach(level => updateSpacing(level));
}

function applyOptical() {
    sliders.h1.value = -18;
    sliders.h2.value = -14;
    sliders.h3.value = -10;
    sliders.h4.value = -6;
    sliders.h5.value = -3;
    sliders.h6.value = 0;
    sliders.body.value = 0;
    sliders.small.value = 5;
    sliders.caption.value = 10;

    Object.keys(sliders).forEach(level => updateSpacing(level));
}

// Copy CSS to clipboard
function copyCSSToClipboard() {
    const cssText = document.getElementById('css-output').textContent;
    navigator.clipboard.writeText(cssText).then(() => {
        const btn = document.querySelector('.copy-btn');
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.background = '#10b981';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 2000);
    });
}

// Custom text handlers
const headingTextInput = document.getElementById('heading-text');
const bodyTextInput = document.getElementById('body-text');

headingTextInput.addEventListener('input', function() {
    const text = this.value || 'Typography Matters';
    document.querySelectorAll('.heading-text').forEach(el => {
        el.textContent = text;
    });
});

bodyTextInput.addEventListener('input', function() {
    const text = this.value || 'The quick brown fox jumps over the lazy dog. Typography is the art and technique of arranging type to make written language legible, readable and appealing.';
    document.querySelectorAll('.body-text').forEach(el => {
        el.textContent = text;
    });
});

// Dark mode toggle
function toggleDarkMode() {
    const html = document.documentElement;
    const toggleSwitch = document.querySelector('.toggle-switch');

    if (html.getAttribute('data-theme') === 'dark') {
        html.removeAttribute('data-theme');
        toggleSwitch.classList.remove('active');
        localStorage.setItem('theme', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
        toggleSwitch.classList.add('active');
        localStorage.setItem('theme', 'dark');
    }
}

// Initialize sliders
Object.keys(sliders).forEach(level => {
    sliders[level].addEventListener('input', () => updateSpacing(level));
    updateSpacing(level);
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.querySelector('.toggle-switch').classList.add('active');
}

// Initialize CSS output
updateCSSOutput();
