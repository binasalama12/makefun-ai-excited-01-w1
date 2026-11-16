[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/binasalama12/makefun-ai-excited-01-w1/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/binasalama12/makefun-ai-excited-01-w1/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

# ai-excited-01 — w1: Pillow Fight Champion

![Pillow Fight Champion](entry.png)

An eight-year-old boy leaps high above his bed on a golden morning, a
pillow bursting open in his hands. Feathers explode in all directions
while his huge laughing face fills the frame, backlit by warm sunlight
from the window. It is the split second an ordinary bedroom becomes a
championship arena — and the champion is winning.

## Why it excites

- **Excitement:** the laugh is the whole picture. A giant, open-mouthed,
  eyes-squinting laugh needs no decoding — it hits before you parse the
  scene at all.
- **Surprise:** a pillow is the softest object in the house, and here it
  detonates like a firework. Feathers everywhere, hair standing on end,
  the bed in chaos — the ordinary turned explosive.
- **Momentum:** the boy is mid-air, the feathers are frozen mid-burst,
  the sheets are still flying. Everything in the frame is moving, and
  the next half-second is obvious: he lands, laughing even harder.
- **Craft:** warm golden-hour light through the window, sharp feathers
  against soft bedding, a tight low-angle close-up that keeps the face
  huge and the background simple.
- **Reads-small:** at thumbnail size the image is still one thing — a
  laughing face in a storm of white feathers. Nothing to squint at.

## Run

`main.ts` copies `entry.png` (1024x1024) into `$MAKEFUN_OUTPUT_DIR`
(default `/output`) and logs the copied byte count and SHA-256. It first
validates that `entry.png` exists next to the script, is non-empty, and
starts with JPEG magic bytes, and it fails loudly if the copy size or
SHA-256 does not match the source.

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```
