# Memory rules

MEM = `/Users/diaasharqawi_itg/Documents/Obsidian Vault/Agent Memory/`

## On request only
In this repo this section overrides the global "Persistent agent memory" rules (which say to read and save automatically). Do not read or write MEM on your own. Use it only when I ask, for example: "check memory", "what do you remember about X", "save this to memory", "summarize to memory", "remember this". Otherwise ignore the vault.

## When I ask you to look something up
1. Read `MEM/Index.md`.
2. Read `MEM/Memory-Summary.md` if it exists.
3. Open only the detailed notes that fit my question (Grep MEM if unsure).
4. Say in one line which notes you used, e.g. "Per [[Note Name]], ...".
5. If MEM is unreachable, say so.

## When I ask you to save or summarize
Save only what is useful again: decisions with reasons, patterns that work, mistakes with cause and prevention, a short session summary.
- Search MEM first and update an existing note instead of creating a duplicate.
- Put new notes in the matching category folder and add them to `Index.md`.
- Update `Memory-Summary.md` (if it exists) when the saved knowledge changes the big picture.
- Verify and fix any note that conflicts with what you observe; bump its `updated` date.

## Style
- Short notes (about 40 lines). Fact first, then why, then how to apply.
- File name is a plain-language title. Front matter: `type`, `updated`, optional `tags`.
- Link related notes with `[[Note Name]]`.

## Never save
Secrets, credentials, tokens, connection strings, personal data beyond the task, whole conversations, or anything derivable from the code.
