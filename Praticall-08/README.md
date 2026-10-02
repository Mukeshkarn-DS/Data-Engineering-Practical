# Practical 08 - PySpark CSV Processing

## Objective
Process sales and product CSV files using PySpark DataFrame operations (filtering, aggregation, deduplication, joins).

## Contents
- `pyspark_practical/pyspark_csv_operations.py`
- `pyspark_practical/sales.csv`
- `pyspark_practical/products.csv`

## Prerequisites
- Python 3.10+
- Java runtime (required by Spark)
- Apache Spark / PySpark installed

## Dependency notes
This practical is environment-heavy and not expected to run in lightweight CI without Spark/Java setup.

## Execution guidance
```bash
cd Praticall-08/pyspark_practical
python pyspark_csv_operations.py sales.csv products.csv
```

## Expected/available outputs
Terminal output for:
- schema printout
- filtered completed orders
- grouped totals by product
- deduplication row counts
- joined sales + products
- average sales by category

## Troubleshooting
- `JAVA_HOME` errors: install Java and configure environment variables.
- `ModuleNotFoundError: pyspark`: install PySpark (`pip install pyspark`).

## Verification status
- PySpark runtime execution was **not re-run in this documentation stage**.

## Learning outcomes
- Apply core Spark DataFrame transformations and aggregations on CSV sources.
