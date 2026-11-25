// monday-punchlines: a program/v1 entry for "Monday Morning Punchlines"
// (make.fun, slug u-gentle-badger-68-monday-morning-punchlines-709645dc).
//
// Writes one joke about Monday mornings to /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt when set). Deterministic: the same fixed
// text every run, no clock, no randomness, no network, stdlib only.
// The joke is 109 characters, inside the gate's 1..200.
//
// The joke, in full:
//   My bed filed for custody this Monday morning. My alarm testified
//   against me, and my coffee pleaded the fifth.
// Three beats escalate one courtroom frame (bed, alarm, coffee); the
// last beat is the punchline, not a complaint about Mondays.
//
// Local test:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//   cat out/entry.txt

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

/** The entry: one joke about Monday mornings, at most 200 characters. */
const JOKE =
  'My bed filed for custody this Monday morning. ' +
  'My alarm testified against me, and my coffee pleaded the fifth.';

/** The gate refuses a text outside 1..200 characters, or whitespace only. */
function checkJoke(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`monday-punchlines: joke is ${text.length} characters, gate needs 1..200`);
  }
  if (text.trim().length === 0) {
    throw new Error('monday-punchlines: joke is whitespace only');
  }
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
checkJoke(JOKE);
mkdirSync(out, { recursive: true });
// No trailing newline: the file holds exactly the joke, byte for byte.
writeFileSync(join(out, 'entry.txt'), JOKE, 'utf8');
// Read it back and re-check, so a write failure can never slip through.
checkJoke(readFileSync(join(out, 'entry.txt'), 'utf8'));
