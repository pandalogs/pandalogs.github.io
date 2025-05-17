// Terminal Typewriter Effect
const terminal = document.getElementById('terminal');
const terminalLines = [
  "> INITIATING NEURAL LINK...",
  "> USER: ANONYMOUS_JURIST",
  "> ACCESS LEVEL: ADMIN",
  "> LOADING BIOGRAPHICAL_DATA...",
  "> DECRYPTING PERSONAL MANIFESTO..."
];

let i = 0;
function typeTerminal() {
  if (i < terminalLines.length) {
    terminal.innerHTML += `<div>${terminalLines[i]}</div>`;
    terminal.scrollTop = terminal.scrollHeight;
    i++;
    setTimeout(typeTerminal, 800);
  } else {
    terminal.innerHTML += `<div>> SYSTEM READY</div>`;
  }
}
typeTerminal();

// Animate neural network connections
document.querySelectorAll('.node').forEach(node => {
  node.addEventListener('mouseenter', () => {
    const connections = document.querySelectorAll('.connection');
    connections.forEach(conn => {
      conn.style.animation = 'pulse 0.5s';
      setTimeout(() => conn.style.animation = '', 500);
    });
  });
});
