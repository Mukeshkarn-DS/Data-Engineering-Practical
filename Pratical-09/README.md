# Practical 09 - Incremental E-commerce ETL with SQLite

## Objective
Implement historical + incremental loads for e-commerce CSV datasets with data-quality tracking and reporting.

## Contents
Top-level practical includes:
- `data/*.csv`
- `reports/sales_report.csv`
- `warehouse/ecommerce.db`
- `tests/test_pipeline.py`

Nested duplicate project retained in:
- `pratical no 9/etl_pipeline.py`
- `pratical no 9/requirements.txt`
- `pratical no 9/data/*`
- `pratical no 9/tests/test_pipeline.py`
- `pratical no 9/reports/sales_report.csv`
- `pratical no 9/warehouse/ecommerce.db`

## Prerequisites
- Python 3.10+
- `pandas` (see `pratical no 9/requirements.txt`)

## Dependency install
```bash
cd "Pratical-09/pratical no 9"
pip install -r requirements.txt
```

## Execution guidance
```bash
cd "Pratical-09/pratical no 9"
python etl_pipeline.py
python -m unittest tests/test_pipeline.py
```

## Expected/available outputs
- SQLite tables for dimensions/state/issues/runs
- Incremental watermark behavior via `pipeline_state`
- CSV report at `reports/sales_report.csv`
- Unit test coverage for historical/incremental and invalid-row behavior

## Troubleshooting
- Missing input files: confirm all four CSVs exist under selected `data/` path.
- Path confusion: use one structure consistently (top-level or nested) per run.

## Verification status
- Existing tests and pipeline execution are available but were **not re-run before this documentation-only change set**.

## Learning outcomes
- Build idempotent ETL with validation rules, upserts, and quality issue logging.
