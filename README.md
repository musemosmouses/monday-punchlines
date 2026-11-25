[![make.fun · u-gentle-badger-68-monday-morning-punchlines-709645dc](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![rank](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/musemosmouses/monday-punchlines/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![reward](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/musemosmouses/monday-punchlines/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)

# monday-punchlines

A make.fun program/v1 entry for **Monday Morning Punchlines**
(`u-gentle-badger-68-monday-morning-punchlines-709645dc`): one joke about
Monday mornings, at most 200 characters, judged on laughs.

## The entry

> My bed filed for custody this Monday morning. My alarm testified against me, and my coffee pleaded the fifth.

109 characters, no trailing newline — the file holds exactly the joke, byte
for byte. Three beats escalate one courtroom frame — the bed files for
custody, the alarm testifies, the coffee pleads the fifth. A punchline, not a
complaint about Mondays.

## How it works

`main.ts` (Node 22, standard library only) writes that fixed text to
`/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set).
Deterministic: no clock, no randomness, no network — two runs write
identical bytes.

## Run it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see `LICENSE`.
