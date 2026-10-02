# Contributing

Thank you for contributing to **Data Engineering Practical**.

This repository is primarily a learning and practical-work collection. Contributions should improve correctness, clarity, reproducibility, documentation, or maintainability without unnecessarily changing the educational intent of existing practicals.

## Before You Start

1. Check existing issues and pull requests.
2. For significant changes, open an issue first to discuss the proposed approach.
3. Do not rename or delete existing practical folders without explicit approval.
4. Never commit secrets, credentials, private datasets, or generated machine-specific files.

## Development Workflow

Create a feature or maintenance branch from `main`:

```bash
git checkout main
git pull origin main
git checkout -b feat/short-description
```

Make focused changes, test them locally, and keep unrelated changes out of the pull request.

## Conventional Commits

Use Conventional Commits for commit messages:

```text
feat: add a new ETL practical
fix: correct CSV parsing example
docs: improve practical 05 documentation
test: add pipeline validation
chore: update repository tooling
ci: improve GitHub Actions checks
```

## Pull Requests

A pull request should:

- Have a clear title.
- Explain what changed and why.
- Mention the affected practical(s).
- Include testing performed.
- Include screenshots when a visual output changed.
- Keep the scope focused.

The repository pull-request template provides a checklist.

## Code Quality

For Python changes:

- Prefer readable, idiomatic Python.
- Use descriptive names.
- Avoid unnecessary duplication.
- Keep functions focused.
- Add comments when they explain intent rather than obvious syntax.
- Preserve existing educational examples unless the change is specifically intended to correct them.

## Testing

Run the checks relevant to your changes before opening a pull request.

At minimum, validate Python syntax:

```bash
python -m compileall .
```

If a practical contains tests, run its test suite as well.

## Documentation

Update the relevant README or documentation whenever a change affects:

- Installation
- Usage
- Dependencies
- Inputs or outputs
- Expected results
- Project structure

## Questions

If you are unsure whether a change fits the repository, open an issue and describe the proposed change before implementing it.
