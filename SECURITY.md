# Security Policy

## Supported scope

This repository is a student practical portfolio and not a production service. Security issues are still welcome, especially those related to unsafe local execution.

## Reporting a vulnerability

Please use GitHub Security Advisories (private report) when possible. Include:

- Affected file path(s)
- Reproduction steps
- Impact assessment
- Suggested mitigation

## Practical-specific security notes

- **Pickle safety (Practical-01):** `pickle.load` can execute arbitrary code from untrusted files. Only load trusted local `.pkl` files.
- **Secrets:** do not commit API keys, passwords, or tokens in scripts, notebooks, or screenshots.
- **External APIs (Pratical-05):** network calls may expose request metadata; use only non-sensitive sample data.
- **Generated databases/reports:** SQLite files and CSV reports may include transformed records; review before sharing publicly.
- **Sample/synthetic data:** keep educational datasets free of personal or regulated data.

## Response expectations

Best-effort triage will be provided. Because this is a learning repository, remediation timelines are not guaranteed.
