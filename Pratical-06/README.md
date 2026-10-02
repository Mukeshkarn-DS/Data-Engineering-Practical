# Practical 06 - Airflow DAG Orchestration Structure

## Objective
Represent an ETL-like workflow in Apache Airflow DAG format.

## Contents
Two retained coursework DAG locations:
- `dags/data_extraction.py`
- `dags/data_pipeline_dag.py`
- `pratical-06/dags/data_extraction.py`
- `pratical-06/dags/data_pipeline_dag.py`

## Prerequisites
- Apache Airflow environment
- Python environment compatible with installed Airflow version

## Execution guidance
Typical local Airflow flow:

```bash
cd Pratical-06
# Place the desired dags/ folder in your AIRFLOW_HOME/dags or configure mount paths
```

`data_pipeline_dag.py` runs `python3 data_extraction.py` relative to the DAG folder.

## Expected/available outputs
- Airflow DAG named `university_etl_orchestration`
- JSON output file under DAG-local `output/extracted_data.json` when extraction task runs

## Troubleshooting
- DAG import errors usually indicate missing Airflow installation.
- Ensure `data_extraction.py` exists in the same folder as the DAG using `cwd={{ dag.folder }}`.

## Verification status
- Airflow runtime execution was **not re-verified in this documentation stage**.

## Learning outcomes
- Understand task dependencies, scheduling, and simple BashOperator orchestration.
