# Repository Guide (Audit-Aligned)

## 1) Practical Folder Map (source of truth)

- `Practical-01`
- `Practical-3`
- `Pratical-02`
- `Pratical-04`
- `Pratical-05`
- `Pratical-06`
- `Pratical-07`
- `Praticall-08`
- `Pratical-09`
- `Pratical-10`

> Folder names are intentionally preserved exactly, including spelling variants.

## 2) Dependency Matrix

| Area | Main files | Dependencies / tooling |
|---|---|---|
| Practical-01 | `ex1_*.py`, `ex2_*.py`, `ex3_*.py`, `ex4_*.py` | Python stdlib + `beautifulsoup4` |
| Pratical-02 | `.pbix`, `.xlsx` | Power BI Desktop, Excel |
| Practical-3 | `Practical_3_MongoDB.docx` + screenshots | MongoDB shell concepts (documented, not scripted here) |
| Pratical-04 | notebook + PNG outputs | Jupyter + Python data/plotting stack |
| Pratical-05 | `data_extraction.py` | `pandas`, `requests`, internet access |
| Pratical-06 | DAG files in two locations | Apache Airflow runtime |
| Pratical-07 | ETL scripts/data in duplicated structures | `pandas`, SQLite |
| Praticall-08 | `pyspark_csv_operations.py` | Java runtime, Apache Spark/PySpark |
| Pratical-09 | `etl_pipeline.py`, tests | `pandas`, SQLite, `unittest` |
| Pratical-10 | modular scripts, tests, outputs | `pandas`, SQLite, `unittest` |

## 3) Testing & Verification Policy

- Keep claims factual: do not claim execution/test status unless actually run.
- Existing tests are practical-specific (`unittest` in 09 and 10).
- Repository CI is scoped to lightweight checks only:
  - Essential documentation/community file presence
  - Python syntax compilation of tracked `.py` files
- CI intentionally does **not** install or execute Airflow, Spark, MongoDB, Power BI, or network-dependent practical workflows.

## 4) Generated Artifacts Policy

- Existing generated coursework artifacts (databases, reports, notebooks outputs, screenshots, cache files) remain preserved.
- New housekeeping config (`.gitignore`) prevents accidental addition of future transient artifacts.
- Because some generated artifacts are already tracked historically, this stage does not remove them.

## 5) Duplicate / Nested Coursework Structures

The following duplicated structures are known and intentionally retained:

- `Pratical-06/dags` and `Pratical-06/pratical-06/dags`
- `Pratical-07/data` and `Pratical-07/etl_project/Practical 7/data`
- `Pratical-09/*` and `Pratical-09/pratical no 9/*`

Do not normalize or delete these paths in documentation-only stages.
