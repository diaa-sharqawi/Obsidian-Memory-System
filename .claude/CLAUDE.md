# Project memory

This repo uses the existing Obsidian memory system. Do not create a second one.

- Vault: `/Users/diaasharqawi_itg/Documents/Obsidian Vault`
- Memory root (MEM): `/Users/diaasharqawi_itg/Documents/Obsidian Vault/Agent Memory/`
- Entry point: `MEM/Index.md`. Optional digest: `MEM/Memory-Summary.md` (read it only if it exists).
- Categories: `Context/`, `Decisions/`, `Patterns/`, `Mistakes/`, `Sessions/`.

Use memory only when I ask for it (check, save, summarize). Follow @.claude/rules/memory.md.

# Skills

- **graphify** (`~/.claude/skills/graphify/SKILL.md`) - turns any input into a knowledge graph. Trigger: `/graphify`
When the user types `/graphify`, use the installed graphify skill before doing anything else. When `graphify-out/` exists, treat questions about the codebase or its architecture as a graphify query first.
