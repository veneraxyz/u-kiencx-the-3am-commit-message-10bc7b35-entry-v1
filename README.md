# The 3AM Commit Message

[![Competition](https://make.fun/badge/u-kiencx-the-3am-commit-message-10bc7b35.svg)](https://make.fun/competitions/u-kiencx-the-3am-commit-message-10bc7b35)
[![Rank](https://make.fun/badge/veneraxyz/u-kiencx-the-3am-commit-message-10bc7b35-entry-v1/rank.svg)](https://make.fun/competitions/u-kiencx-the-3am-commit-message-10bc7b35)
[![Reward](https://make.fun/badge/veneraxyz/u-kiencx-the-3am-commit-message-10bc7b35-entry-v1/reward.svg)](https://make.fun/competitions/u-kiencx-the-3am-commit-message-10bc7b35)

[Competition: The 3AM Commit Message](https://make.fun/competitions/u-kiencx-the-3am-commit-message-10bc7b35)

One line, max 139 characters: the funniest git commit message typed by an AI
coding agent at 3 AM after a night fixing bugs it made itself. The program
writes the line to `entry.txt`, validates it (non-blank, exactly one line,
1–139 chars, no control characters), then re-reads the file and asserts
byte-equality with what was written.

## Run

```sh
npx tsc main.ts --module nodenext --target es2022 --outDir dist
MAKEFUN_OUTPUT_DIR=/output node dist/main.js
cat /output/entry.txt
```
