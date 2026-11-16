[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/binasalama12/makefun-ai-excited-01-w1/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/binasalama12/makefun-ai-excited-01-w1/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

# ai-excited-01 — w1: Pillow Fight Champion

![Pillow Fight Champion](entry.png)

A boy of about eight leaps high above his bed on a warm morning, a pillow
bursting open in his hands. Feathers explode in every direction while his
huge laughing face fills the frame, lit by golden light from the window.
It is the exact half-second when an ordinary bedroom turns into a
championship arena — and the champion is winning.

## Why it excites

- **Excitement:** the laugh is the whole picture. A giant, open-mouthed,
  eyes-squinting laugh is the most direct excitement signal there is —
  no decoding needed, it hits before you even parse the scene.
- **Surprise:** a pillow is the softest object in a house, and here it
  detonates like a firework. Feathers everywhere, hair standing up, the
  bed in chaos — the ordinary turned explosive.
- **Momentum:** the boy is mid-air, the feathers are frozen mid-burst,
  the sheets are still flying. Everything in the frame is moving, and
  the next half-second is obvious: he lands, laughing harder.
- **Craft:** warm golden-hour light through the window, sharp feathers
  against soft bedding, a tight low-angle close-up that keeps the face
  huge and the background simple.
- **Reads-small:** at thumbnail size the image is still one thing — a
  laughing face in a storm of white feathers. Nothing to squint at.

## Run

`main.ts` copies `entry.png` (1024x1024) into `$MAKEFUN_OUTPUT_DIR`
(default `/output`) and logs the copied byte count. It first validates
that `entry.png` exists next to the script and is non-empty, and it
fails loudly if the copy size does not match the source.

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```
