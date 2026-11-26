# Obsidian Memory Prompts

Paste these prompts into Claude Code, in order.

- **Memory setup (Prompts 1-2):** Prompt 1 builds the memory in your vault. Prompt 2 connects a repo to it.
- **Calculator example (Prompts 3-6):** a sample workflow that builds `src/calculator.js` and its tests, then saves the lessons to memory.
- **Skills (Prompt 7):** registers the graphify skill for this repo.

## Memory setup

### Prompt 1: Set up persistent agent memory using Obsidian

````text
# Set Up Persistent Agent Memory Using Obsidian

I want you to implement a persistent memory system using my Obsidian vault.

## Goal
Your memory should persist across different conversations and sessions. You should be able to store useful knowledge, retrieve it when needed, learn from previous experiences, and avoid repeating mistakes.

## Memory Structure
Organize the memory into these categories:

- **Context:** Project information, environment, and important background.
- **Decisions:** Decisions made and their reasoning.
- **Patterns:** Practices, conventions, and approaches that work well.
- **Mistakes:** Previous issues, their causes, and how to avoid them.
- **Sessions:** Short summaries of important work completed and lessons learned.

Create an Index.md file linking to these categories.

## Memory Rules

1. Before starting a task, check existing memory for relevant information.
2. Save important new knowledge after completing a task.
3. Record useful decisions, patterns, mistakes, and context.
4. Update existing notes instead of creating duplicate notes.
5. Link related notes using Obsidian links, such as [[API Validation Pattern]].
6. Keep notes short, clear, and useful for future tasks.
7. Do not save everything from conversations. Save only information that could be useful again.
8. If existing memory is outdated or conflicts with new information, verify it and update it rather than blindly trusting it.
9. When using memory, mention the relevant knowledge briefly if it affects your approach.
10. Treat memory as persistent knowledge that should improve over time.

## Setup

Create the required folders and files in my Obsidian vault.

Create an Index.md that acts as the main entry point.

Create a README.md explaining the memory system and how it works.

Configure your available agent instructions so these memory rules are followed automatically in future sessions, not only in this conversation.

Use the existing Obsidian vault. If you cannot access it, ask me for its folder path.

## Validation

After setup:

- Show me the folder structure.
- Show me the memory instructions you configured.
- Create one example memory note.
- Verify that you can read and write files in the vault.
- Explain how the memory will be retrieved in a new session.

Do not just describe the implementation. Actually create and configure it wherever you have access.
````

### Prompt 2: Connect Claude Code to my Obsidian memory

````text
# Connect Claude Code to My Obsidian Memory

Create a `.claude/` folder in the CURRENT repository (not inside the Obsidian vault).

Structure:

.claude/
├── CLAUDE.md
└── rules/
    └── memory.md

## Requirements

1. Locate my existing Obsidian vault. Ask for its path if unknown.
2. Do not recreate or duplicate the existing memory system.
3. Configure `.claude/CLAUDE.md` to reference the Obsidian vault using its absolute path.
4. Before every task:
   - Read Obsidian `Index.md`.
   - Read `Memory-Summary.md` if it exists.
   - Retrieve relevant detailed notes.
5. After important tasks:
   - Save useful decisions, patterns, mistakes, and lessons.
   - Update existing notes instead of creating duplicates.
   - Update the memory summary and index when necessary.
6. Keep memory concise and use Obsidian links `[[Note Name]]`.
7. Never save secrets or unnecessary conversation history.

## Validation

- Create the files in the current repository.
- Verify read/write access to the Obsidian vault.
- Show the resulting `.claude` structure.
- Show the configured instructions.
- Confirm memory retrieval works in a new session.

Actually implement everything. Do not just explain it.
````

## Calculator example

### Prompt 3: Create a Calculator class

````text
Create a simple **Calculator Class using JavaScript (ES6)**.

### Requirements:
1. Create a class named `Calculator`.
2. Add the following methods:
   - `add(a, b)` – Addition.
   - `subtract(a, b)` – Subtraction.
   - `multiply(a, b)` – Multiplication.
   - `divide(a, b)` – Division (handle division by zero).
3. Use JavaScript class syntax and constructors if needed.
4. Keep the code clean, simple, and beginner-friendly.
5. Include examples of creating a calculator object and calling each method.
6. Add comments explaining the code.
7. Handle invalid inputs gracefully.

### Output:
- Complete JavaScript code.
- Explanation of how the class works.
- Example usage with expected results.

Use plain JavaScript without external libraries.
````

### Prompt 4: Create unit tests

````text
Can you create unit test cases for this?
````

### Prompt 5: Improve the unit tests

````text
I want to improve these tests.

Please make the test names more descriptive, separate normal cases from edge cases, and make sure each test checks only one behavior.

I also want tests to be simple, readable, and independent from each other.
````

### Prompt 6: Save lessons to Obsidian memory

````text
Review my work, identify what you learned from my feedback, and save the useful lessons to my Obsidian memory
````

## Skills

### Prompt 7: Set up the graphify skill

````text
# Set Up the graphify Skill

Set up the `graphify` skill so Claude Code can turn this repo into a knowledge graph and answer codebase questions from it.

## Requirements

1. Check whether the skill is installed at `~/.claude/skills/graphify/SKILL.md`. If it is missing, install it. Do not reinstall or overwrite it if it exists.
2. Register the skill in `.claude/CLAUDE.md` of the CURRENT repository, under a `# Skills` heading, with its path and the `/graphify` trigger. Do not duplicate an entry that already exists.
3. When the user types `/graphify`, use the installed skill before doing anything else.
4. When `graphify-out/` exists, treat questions about the codebase, its architecture or file relationships as a graphify query first.
5. Run `/graphify src` once to build the first graph.

## Validation

- Show the skill path and confirm the file exists.
- Show the entry added to `.claude/CLAUDE.md`.
- Show `graphify-out/` (`GRAPH_REPORT.md`, `graph.html`, `graph.json`).
- Ask one codebase question and show that the answer comes from the graph.

Actually implement everything. Do not just explain it.
````
