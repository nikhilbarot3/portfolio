let targetX = 0;
const MAX_X = 280;
const MIN_X = 0;

const keysDown = {
  ArrowLeft: false,
  ArrowRight: false,
  KeyA: false,
  KeyD: false,
};

let activeDirection: "left" | "right" | null = null;
let jumpTriggered = false;
let blockedX: number | null = null; // Represents the X coordinate we cannot pass

export function installKeyboardInput() {
  if (typeof window === "undefined") return () => {};

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code in keysDown) keysDown[e.code as keyof typeof keysDown] = true;
    if (e.code === "Space" || e.code === "ArrowUp" || e.code === "KeyW") triggerJump();
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code in keysDown) keysDown[e.code as keyof typeof keysDown] = false;
  };

  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);

  const loop = setInterval(() => {
    const left = keysDown.ArrowLeft || keysDown.KeyA || activeDirection === "left";
    const right = keysDown.ArrowRight || keysDown.KeyD || activeDirection === "right";

    if (left) nudge("left", 0.35);
    if (right) nudge("right", 0.35);
  }, 16);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("keyup", handleKeyUp);
    clearInterval(loop);
  };
}

export function nudge(direction: "left" | "right", amount = 1) {
  if (direction === "left") {
    targetX = Math.max(MIN_X, targetX - amount);
  } else {
    // If we are blocked, we cannot nudge past the blockedX
    const nextX = targetX + amount;
    if (blockedX !== null && nextX >= blockedX) {
      targetX = blockedX; // Stop exactly at the barrier
    } else {
      targetX = Math.min(MAX_X, nextX);
    }
  }
}

export function press(direction: "left" | "right") { activeDirection = direction; }
export function release(direction: "left" | "right") { if (activeDirection === direction) activeDirection = null; }
export function getTargetX() { return targetX; }
export function setBlockX(val: number | null) { blockedX = val; }

export function triggerJump() { jumpTriggered = true; }
export function consumeJump() {
  if (jumpTriggered) {
    jumpTriggered = false;
    return true;
  }
  return false;
}