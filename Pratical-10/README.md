# Practical 10 - End-to-End Star-Schema ETL

## Objective
Run a complete CSV-to-warehouse pipeline using Pandas and SQLite, then generate analytical CSV reports and an HTML dashboard.

## Contents
Main project path:
- `praticalno-10/run_pipeline.py`
- `praticalno-10/requirements.txt`
- `praticalno-10/data/*.csv`
- `praticalno-10/scripts/*.py`
- `praticalno-10/tests/test_pipeline.py`
- `praticalno-10/database/ecommerce.db`
- `praticalno-10/output/*` (reports + `dashboard.html`)

## Prerequisites
- Python 3.10+
- Dependencies in `praticalno-10/requirements.txt`

## Dependency install
```bash
cd Pratical-10/praticalno-10
pip install -r requirements.txt
```

## Execution guidance
Run from `Pratical-10/praticalno-10` to match expected default paths:

```bash
python run_pipeline.py
python -m unittest tests/test_pipeline.py
```

## Expected/available outputs
- Star-schema SQLite tables (`dim_*`, `fact_sales`)
- Output CSV reports:
  - `sales_by_category.csv`
  - `sales_by_product.csv`
  - `sales_by_city.csv`
  - `monthly_sales.csv`
  - `payment_method_distribution.csv`
  - `cleaned_sales.csv`
  - `rejected_orders.csv`
- HTML dashboard: `output/dashboard.html`

## Known limitations
- Default pipeline paths in code are rooted to `praticalno-10` package location.
- Existing generated DB/output artifacts are intentionally tracked and preserved.

## Troubleshooting
- Missing files: verify `data/customers.csv`, `products.csv`, `orders.csv`, `payments.csv`.
- Test import issues: run tests from project directory so `scripts` imports resolve.

## Verification status
- Unit tests exist but were **not re-run prior to this documentation-only update**.

## Learning outcomes
- Build a reproducible ETL flow with cleaning, transformation, warehouse loading, and report generation.
