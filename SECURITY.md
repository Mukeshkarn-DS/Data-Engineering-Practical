# Security Policy

## Supported Versions

This is primarily an educational repository. Security fixes are considered for the current `main` branch and active pull requests.

| Version | Supported |
|---|---|
| main | Yes |
| Older commits/releases | No |

## Reporting a Vulnerability

Please do **not** disclose suspected security vulnerabilities in a public GitHub issue.

Instead, use GitHub's private security reporting features for this repository when available. If private reporting is unavailable, contact the repository owner through the GitHub profile and request a private reporting channel.

When reporting a vulnerability, include:

- A clear description of the issue
- Affected file or practical
- Steps to reproduce
- Potential impact
- Suggested remediation, if known

Please avoid including secrets, credentials, personal data, or exploit code that could unnecessarily increase risk.

## Secrets

Never commit:

- Passwords
- API keys
- Access tokens
- Cloud credentials
- Database credentials
- Private certificates or keys
- Personal or confidential datasets

If a secret is accidentally committed, revoke or rotate it immediately and then remove it from the repository history as appropriate.
