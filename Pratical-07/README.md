# Practical 07 - CSV/JSON ETL with Incremental SQLite Loading

## Objective
Load CSV and JSON customer records, validate/clean data, track invalid records, and apply incremental updates in SQLite.

## Contents
Primary structure:
- `data/etl_pipeline.py`
- `data/customers.csv`
- `data/customers_additional.csv`
- `data/customer_updates.json`

Duplicate nested structure retained:
- `etl_project/Practical 7/data/etl_pipeline.py`
- corresponding duplicated input files

Additional file:
- `etl-specialist.agent.md`

## Prerequisites
- Python 3.10+
- `pandas`

## Dependency install
```bash
pip install pandas
```

## Execution guidance
Run from either retained structure (paths differ by location). Example with top-level version:

```bash
cd Pratical-07/data
python etl_pipeline.py --input-dir . --database etl.db
```

## Expected/available outputs
- SQLite database with `customers` and `invalid_records` tables
- Console summary of loaded/updated/skipped/invalid counts

## Troubleshooting
- Header mismatch: ensure CSV headers match expected columns exactly.
- JSON parsing failures: verify file structure (`list` or `customers` list).

## Verification status
- ETL run was **not re-executed in this documentation stage**.

## Learning outcomes
- Build validation-first ETL logic.
- Apply record hashing and idempotent incremental loading.
