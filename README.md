# Data Engineering Practical Portfolio

A curated learning repository by **Mukesh Karn** that documents 10 practical exercises across Python data processing, SQLite ETL, MongoDB fundamentals, Power BI reporting, Airflow concepts, and PySpark transformations.

## Purpose

This repository preserves original coursework exactly as submitted while adding professional documentation and repository standards for maintainability and review.

## Learning Objectives

- Build confidence with Python-based data parsing, cleaning, and ETL.
- Practice relational modeling and CRUD workflows with SQLite.
- Explore document-oriented operations with MongoDB.
- Create BI artifacts with Power BI and Excel data.
- Understand orchestration and pipeline structure with Airflow and PySpark.
- Apply testing and incremental pipeline patterns in later practicals.

## Technology Map (Verified from repository files)

- **Languages:** Python, JavaScript (Mongo shell commands documented in DOCX)
- **Data formats:** CSV, JSON, XML, HTML, TXT, binary (`.bin`), pickle (`.pkl`)
- **Databases:** SQLite (`.db`), MongoDB practical documentation
- **Analytics/BI:** Microsoft Power BI (`.pbix`), Excel (`.xlsx`), Jupyter Notebook (`.ipynb`)
- **Pipeline tools:** Pandas, requests, Apache Airflow DAG files, PySpark script
- **Testing:** `unittest` suites in Practical 09 and Practical 10

## Practical Index

| Practical | Folder | Focus |
|---|---|---|
| 01 | [`Practical-01`](Practical-01) | Parsing, anomaly checks, binary/pickle files, regex, SQLite CRUD |
| 02 | [`Pratical-02`](Pratical-02) | Power BI dashboard and Excel dataset |
| 03 | [`Practical-3`](Practical-3) | MongoDB operations evidence (DOCX + screenshots) |
| 04 | [`Pratical-04`](Pratical-04) | EDA notebook and visualization screenshots |
| 05 | [`Pratical-05`](Pratical-05) | API + CSV extraction/merge using Pandas |
| 06 | [`Pratical-06`](Pratical-06) | Airflow DAG structure (duplicate nested coursework retained) |
| 07 | [`Pratical-07`](Pratical-07) | CSV/JSON ETL with validation and incremental loading |
| 08 | [`Praticall-08`](Praticall-08) | PySpark CSV processing practical |
| 09 | [`Pratical-09`](Pratical-09) | Incremental e-commerce ETL, SQLite warehouse, tests |
| 10 | [`Pratical-10`](Pratical-10) | End-to-end star-schema ETL with reports and tests |

## Repository Structure

```text
Data-Engineering-Practical/
├── Practical-01/
├── Practical-3/
├── Pratical-02/
├── Pratical-04/
├── Pratical-05/
├── Pratical-06/
├── Pratical-07/
├── Praticall-08/
├── Pratical-09/
├── Pratical-10/
├── docs/
└── .github/
```

## Practical Summaries

### Practical-01
Python scripts for file parsing, anomaly detection, regex operations, binary/pickle operations, and SQLite CRUD. Scripts currently reference `data/...` relative paths; see [`Practical-01/README.md`](Practical-01/README.md) for safe execution notes.

### Pratical-02
Power BI practical containing `business intelligence practical.pbix`, `Meridian_Retail_Sales_Dataset.xlsx`, and dashboard screenshots.

### Practical-3
MongoDB practical evidence in `Practical_3_MongoDB.docx` with step screenshots (`insertOne`, `find`, `insertMany`, `find().pretty()`).

### Pratical-04
EDA notebook (`notebooks_Practical_4_Noise_Elimination_Feature_Selection_EDA.ipynb`) and visualization screenshots.

### Pratical-05
`data_extraction.py` fetches API data (`jsonplaceholder.typicode.com`) and merges with generated `locations.csv` to produce `cleaned_warehouse_profiles.csv`.

### Pratical-06
Airflow DAG files in both `Pratical-06/dags` and `Pratical-06/pratical-06/dags`. Duplicate coursework structure intentionally preserved.

### Pratical-07
ETL pipeline(s) load CSV/JSON customer data, validate and hash records, and perform incremental SQLite loading. Duplicate nested project retained.

### Praticall-08
PySpark practical under `pyspark_practical/` processing `sales.csv` and `products.csv`.

### Pratical-09
Incremental e-commerce ETL (`etl_pipeline.py`), input CSVs, SQLite DB, report CSV, and `unittest` tests. Duplicate top-level and nested practical data retained, including tracked caches.

### Pratical-10
Full ETL with modular scripts, star-schema SQLite load, generated reports, dashboard HTML, and test suite.

## Setup Guidance

### Baseline

```bash
git clone https://github.com/Mukeshkarn-DS/Data-Engineering-Practical.git
cd Data-Engineering-Practical
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
python -m pip install --upgrade pip
```

### Practical-specific dependencies

- **Practical 01:** `beautifulsoup4`
- **Practical 05:** `pandas`, `requests`
- **Pratical-07 data pipeline:** `pandas`
- **Practical 08:** Java runtime + Apache Spark/PySpark
- **Practical 09:** see `Pratical-09/pratical no 9/requirements.txt`
- **Practical 10:** see `Pratical-10/praticalno-10/requirements.txt`

## Execution Guidance

Run commands from each practical directory unless noted otherwise.

Examples:

```bash
cd Practical-01
python setup_data.py
python ex1_parsing_and_anomalies.py
```

```bash
cd Pratical-09/pratical\ no\ 9
python etl_pipeline.py
python -m unittest tests/test_pipeline.py
```

```bash
cd Pratical-10/praticalno-10
python run_pipeline.py
python -m unittest tests/test_pipeline.py
```

## Screenshots & Visual Outputs

- Practical 02: dashboard screenshots in [`Pratical-02`](Pratical-02)
- Practical 03: MongoDB operation screenshots in [`Practical-3`](Practical-3)
- Practical 04: EDA screenshots in [`Pratical-04`](Pratical-04)
- Practical 05: script and output screenshots in [`Pratical-05`](Pratical-05)
- Practical 10: generated dashboard at `Pratical-10/praticalno-10/output/dashboard.html`

## Testing Status

- Automated unit tests exist in Practical 09 and Practical 10.
- Other practicals are primarily script/notebook/BI artifacts and are not uniformly test-driven.
- Repository-level CI is intentionally lightweight (docs checks + Python syntax checks only) to avoid forcing Airflow/Spark/MongoDB/Power BI environments.

## Known Limitations

- Some scripts require running from specific working directories and rely on relative paths.
- Practical 01 uses pickle files; never load untrusted pickle content.
- Practical 05 requires outbound network access for API extraction.
- Practical 08 needs Java + Spark/PySpark runtime unavailable in minimal CI.
- Duplicate and nested structures are preserved intentionally as part of original coursework history.

## Contribution

Please see [`CONTRIBUTING.md`](CONTRIBUTING.md), [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md), and [`SECURITY.md`](SECURITY.md).

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE).

## Author

**Mukesh Karn**  
Third-year Bachelor of Data Science student  
GitHub: [@Mukeshkarn-DS](https://github.com/Mukeshkarn-DS)
