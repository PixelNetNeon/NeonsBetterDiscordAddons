/**
 * @name AMOLED
 * @author PixelNetNeon
 * @authorId 433051556602970131
 * @version 1.0.0
 * @description Toggles Amoled (On Desktop!)
 */

module.exports = class MyPlugin {
    start() {
      document.body.classList.add("theme-amoled");
    }
    stop() {
      document.body.classList.remove("theme-amoled");
    }
  };
