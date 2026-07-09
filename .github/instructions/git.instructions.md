---
applyTo: "**/*"
description: "Git workflow and repository path conventions for the Time-Table project"
---

## Repository Root

- Use the repository root at `c:\Users\HP\Sreeni\Learnings\GitHub-CoPiilot\time-table`.
- Do not use a nested path like `...\time-table\time-table` for this project.

## Git Workflow

- Run Git and `gh` commands from the repo root only.
- Verify with `git status`, `git branch --show-current`, and `git remote -v` before pushing.
- Push branches with `git push -u origin <branch>` once the correct remote is configured.
- If the authenticated GitHub user is `dsreenivas`, the remote should be `https://github.com/dsreenivas/time-table.git`.
- If the authenticated account changes, update the remote URL with `git remote set-url origin <new-url>`.

## MCP and Git

- `mcp.json` is a VS Code MCP client configuration file, not a Git remote or push mechanism.
- Do not use MCP configuration to perform Git push operations.
- Use standard Git CLI or GitHub CLI (`gh`) for repository management and pushes.

## Commit Hygiene

- Add and commit only the intended files.
- If an incorrect file is committed and pushed, remove it with `git rm`, commit the removal, and push the cleanup.
- Keep commit messages clear and direct.
