# Data Engineering Practical

[![CI](https://github.com/Mukeshkarn-DS/Data-Engineering-Practical/actions/workflows/ci.yml/badge.svg)](https://github.com/Mukeshkarn-DS/Data-Engineering-Practical/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/Mukeshkarn-DS/Data-Engineering-Practical)](https://github.com/Mukeshkarn-DS/Data-Engineering-Practical/blob/main/LICENSE)
[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](https://github.com/Mukeshkarn-DS/Data-Engineering-Practical)
[![Stars](https://img.shields.io/github/stars/Mukeshkarn-DS/Data-Engineering-Practical)](https://github.com/Mukeshkarn-DS/Data-Engineering-Practical/stargazers)
[![Issues](https://img.shields.io/github/issues/Mukeshkarn-DS/Data-Engineering-Practical)](https://github.com/Mukeshkarn-DS/Data-Engineering-Practical/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/Mukeshkarn-DS/Data-Engineering-Practical)](https://github.com/Mukeshkarn-DS/Data-Engineering-Practical/pulls)

A structured collection of hands-on **Data Engineering practicals**, covering file processing, databases, MongoDB, analytics, Power BI, data extraction, Apache Airflow, ETL, PySpark, testing, and end-to-end data pipelines.

> **Status:** Active learning repository  
> **Audience:** Students, recruiters, reviewers, and contributors  
> **License:** MIT

## Table of Contents

- [Features](#features)
- [Practicals](#practicals)
- [Screenshots](#screenshots)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Repository Structure](#repository-structure)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- Python-based file parsing and data-quality exercises
- Regular expressions and binary-file processing
- SQLite/database CRUD practice
- MongoDB document operations with mongosh/JavaScript
- Exploratory data analysis and visualization
- Power BI and Excel business-intelligence work
- Data extraction and cleaning workflows
- Apache Airflow workflow-orchestration concepts
- ETL pipeline exercises
- PySpark CSV and DataFrame processing
- Project-based data-engineering workflows
- Testing, dependency management, and GitHub Actions CI
- Practical documentation and reproducible examples

## Practicals

| Practical | Focus | Main Technologies |
|---|---|---|
| 01 | File parsing, anomaly checks, binary files, regex, CRUD | Python, Pandas, SQLite |
| 02 | Business Intelligence dashboard | Power BI, Excel |
| 03 | MongoDB document operations | JavaScript, MongoDB, mongosh |
| 04 | Data analysis and visualization | Python, Pandas, Matplotlib |
| 05 | Data extraction and warehouse/location data | Python, Pandas, CSV |
| 06 | Workflow orchestration | Apache Airflow |
| 07 | ETL pipeline concepts and implementation | Python, ETL |
| 08 | CSV processing with Spark | Python, PySpark |
| 09 | Project-based data engineering | Python, data/warehouse concepts |
| 10 | Structured end-to-end pipeline | Python, database, testing |

### Important folder names

Existing coursework folder names are intentionally preserved, including:

- `Pratical-02/`
- `Practical-3/`
- `Praticall-08/`

These names are part of the current repository structure and are **not renamed by this maintenance change**.

## Screenshots

Selected dashboard and practical screenshots are already stored inside the relevant practical folders.

For example, Practical 02 contains Power BI dashboard views covering sales overview, channel performance, product analysis, and forecasting.

To browse the screenshots and project outputs, open the corresponding practical folder in GitHub.

## Demo

This repository is a learning/practical collection and does not currently have a hosted web demo.

For a local demonstration, clone the repository and run the individual practical according to its folder-level instructions.

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Mukeshkarn-DS/Data-Engineering-Practical.git
cd Data-Engineering-Practical
```

### 2. Create a Python virtual environment

Windows:

```powershell
python -m venv .venv
.venv\Scripts\activate
```

Linux/macOS:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 3. Install project dependencies

Some practicals have their own `requirements.txt`. Install dependencies from the practical you want to run:

```bash
python -m pip install -r requirements.txt
```

If a practical does not provide a requirements file, install only the libraries required by that practical.

## Usage

Each practical is intentionally independent. Start by opening the relevant folder and checking its files.

Typical Python execution:

```bash
python path/to/script.py
```

For Practical 10, where applicable:

```bash
cd Pratical-10/praticalno-10
python run_pipeline.py
```

For MongoDB practical work, open the JavaScript file and execute the commands with `mongosh` after starting a MongoDB instance.

For Power BI work, open the `.pbix` file with Microsoft Power BI Desktop.

For Airflow work, follow the DAG/project instructions inside Practical 06 before starting the Airflow services.

> Practical-specific dependencies and execution requirements take precedence over these generic commands.

## Configuration

No repository-wide secrets or environment variables are required for the documentation-only parts of this project.

If an individual practical requires configuration:

1. Check that practical's README or source files.
2. Keep secrets out of Git.
3. Use environment variables for credentials.
4. Never commit passwords, API keys, database credentials, or private tokens.

Use a local `.env` file when appropriate; `.env` is excluded by the root `.gitignore`.

## Repository Structure

```text
Data-Engineering-Practical/
├── Practical-01/       # File processing and database fundamentals
├── Practical-3/        # Existing Practical 03 folder name
├── Pratical-02/        # Existing Practical 02 folder name
├── Pratical-04/        # Data analysis and visualization
├── Pratical-05/        # Data extraction and cleaning
├── Pratical-06/        # Apache Airflow
├── Pratical-07/        # ETL
├── Praticall-08/       # Existing Practical 08 folder name
├── Pratical-09/        # Data engineering project
├── Pratical-10/        # End-to-end pipeline
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── dependabot.yml
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── workflows/
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── SECURITY.md
└── README.md
```

## Roadmap

- [ ] Add a concise README inside each practical
- [ ] Add practical-specific dependency files where needed
- [ ] Add more automated tests to project-based practicals
- [ ] Improve reproducibility of ETL examples
- [ ] Add Docker examples for selected pipelines
- [ ] Add data-warehouse examples
- [ ] Explore streaming with Apache Kafka
- [ ] Expand cloud-oriented data-engineering examples
- [ ] Add richer project-level documentation and architecture diagrams

## Contributing

Contributions are welcome when they improve clarity, correctness, reproducibility, or learning value.

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening an issue or pull request.

## License

This repository is licensed under the [MIT License](LICENSE).

## Contact

**Mukesh Karn**

- GitHub: https://github.com/Mukeshkarn-DS
- Repository: https://github.com/Mukeshkarn-DS/Data-Engineering-Practical

If you find an issue with a practical, please open a GitHub issue with the relevant practical number, environment, reproduction steps, and expected behavior.
