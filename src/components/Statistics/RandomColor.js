export default function randomBgColor() {
    return `#${Math.floor(Math.random() * (256 * 256 * 256)).toString(16).padStart(6, '0')}`;
  }
  