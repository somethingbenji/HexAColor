    function get24bitKey(hex) {
  hex = hex.replace('#','');
  const r = parseInt(hex.slice(0,2),16);
  const g = parseInt(hex.slice(2,4),16);
  const b = parseInt(hex.slice(4,6),16);
  return r * 65536 + g * 256 + b; // 24-bit key
}

function encrypt() {
  const text = document.getElementById('encInput').value;
  const key = get24bitKey(document.getElementById('Color').value);

  let out = "";
  for (let i = 0; i < text.length; i++) {
    let code = text.charCodeAt(i);
    let shifted = (code + key) % 65536; // 16-bit wrap
    out += shifted.toString(16).padStart(4, '0');
  };

  document.getElementById('encOutput').value = out;
};

function decrypt() {
  const hex = document.getElementById('decInput').value.trim();
  const key = get24bitKey(document.getElementById('Color').value);

  let out = "";
  for (let i = 0; i < hex.length; i += 4) {
    const block = parseInt(hex.slice(i, i+4), 16);
    const code = (block - key + 65536) % 65536;
    out += String.fromCharCode(code);
  };

  document.getElementById('decOutput').value = out;
};

