# Practical 05 - API and CSV Data Extraction

## Objective
Extract data from an external API and local CSV, merge records, and save cleaned output.

## Contents
- `data_extraction.py`
- `locations.csv`
- `cleaned_warehouse_profiles.csv`
- Supporting screenshots of script execution/output

## Prerequisites
- Python 3.10+
- `pandas`
- `requests`
- Internet connectivity for API call to `https://jsonplaceholder.typicode.com/users`

## Dependency install
```bash
pip install pandas requests
```

## Execution guidance
```bash
cd Pratical-05
python data_extraction.py
```

## Expected/available outputs
- Printed API and CSV tables in terminal
- `cleaned_warehouse_profiles.csv` created/updated in folder

## Troubleshooting
- API failures: check internet/proxy/firewall and retry.
- Empty output: confirm API endpoint availability.

## Verification status
- External API execution was **not re-run in this documentation stage**.

## Learning outcomes
- Practice basic extraction from REST + CSV and merge into cleaned analytical output.
