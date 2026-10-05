# 📊 Data Engineering Practicals 01–10

![Python](https://img.shields.io/badge/Python-3.x-blue?logo=python)
![SQL](https://img.shields.io/badge/SQL-SQLite-orange?logo=sqlite)
![Power BI](https://img.shields.io/badge/Power%20BI-Data%20Visualization-F2C811?logo=powerbi)
![PySpark](https://img.shields.io/badge/PySpark-Big%20Data-E25A1C?logo=apachespark)
![Apache Airflow](https://img.shields.io/badge/Apache%20Airflow-Orchestration-017CEE?logo=apacheairflow)
![MongoDB](https://img.shields.io/badge/MongoDB-NoSQL-47A248?logo=mongodb)
![GitHub](https://img.shields.io/badge/GitHub-Version%20Control-181717?logo=github)

## 📌 About

This repository contains my **Data Engineering Practical work from Practical 01 to Practical 10**, completed as part of academic coursework.

The repository demonstrates a progressive Data Engineering workflow covering **file processing, data quality, databases, Business Intelligence, API extraction, workflow orchestration, ETL, PySpark, incremental loading, testing, and data warehousing**.

Each practical is organized in its own folder with source files, datasets, documentation, and **execution/output evidence where applicable**.

---

## 🎯 Objectives

- Understand core Data Engineering concepts and workflows.
- Extract and process data from different file formats and APIs.
- Perform data cleaning, validation, anomaly detection, and transformation.
- Work with SQLite and MongoDB databases.
- Build a Business Intelligence dashboard using Power BI.
- Understand workflow orchestration with Apache Airflow.
- Implement ETL and incremental-loading pipelines.
- Process data using PySpark DataFrames.
- Apply testing and validation to data pipelines.
- Document and organize practical work professionally using GitHub.

---

## 📚 Practical Overview

| # | Practical | Main Work | Technologies | Evidence |
|---|---|---|---|---|
| 01 | [File Processing & Database Operations](./Practical-01/) | Parsing, anomaly detection, binary files, regex, SQLite CRUD | Python, SQLite | ✅ Output screenshots |
| 02 | [Business Intelligence Dashboard](./Practical-02/) | Retail sales analysis, visualization and forecasting | Power BI, Excel | ✅ Dashboard screenshots |
| 03 | [MongoDB Operations](./Practical-03/) | Insert, retrieve and multiple-document operations | MongoDB, mongosh | ✅ Query screenshots |
| 04 | [Noise Elimination, Feature Selection & EDA](./Practical-04/) | Data analysis, distributions and outlier visualization | Python, Jupyter | ✅ EDA screenshots |
| 05 | [API & CSV Data Extraction](./Practical-05/) | API extraction, cleaning and CSV merging | Python, Pandas, Requests | ✅ Execution screenshots |
| 06 | [Workflow Orchestration](./Practical-06/) | DAGs, tasks and workflow orchestration | Apache Airflow, Python | 🟡 Airflow evidence |
| 07 | [CSV/JSON ETL & Incremental Loading](./Practical-07/) | Validation, transformation and SQLite incremental loading | Python, Pandas, SQLite | ✅ ETL + database screenshots |
| 08 | [PySpark CSV Processing](./Practical-08/) | Filtering, aggregation, deduplication and joins | PySpark, Spark | ✅ Execution screenshots |
| 09 | [Incremental E-commerce ETL](./Practical-09/) | Historical/incremental ETL, reports and testing | Python, Pandas, SQLite | ✅ ETL + report + test screenshots |
| 10 | [End-to-End Star-Schema ETL](./Practical-10/) | Ingestion, cleaning, transformation, warehouse loading and reporting | Python, Pandas, SQLite, unittest | ✅ Pipeline + dashboard + test screenshots |

---

# 🔹 Practical 01 — File Processing, Data Extraction & Database Operations

📁 **Folder:** Practical-01

### Topics Covered

- Parsing CSV, HTML, XML, JSON and TXT data
- Data-quality and anomaly checking
- Binary/pickle file processing
- Regular-expression operations
- SQLite CRUD operations

### Main Files

- ex1_parsing_and_anomalies.py
- ex2_binary_files.py
- ex3_regex_operations.py
- ex4_database_crud.py
- setup_data.py

### Output Evidence

The practical includes screenshots demonstrating:

- Parsing and anomaly-checking output
- Regular-expression operations
- SQLite database CRUD execution

[Go to Practical 01 →](./Practical-01/)

---

# 🔹 Practical 02 — Business Intelligence & Power BI

📁 **Folder:** Practical-02

### Objective

To analyze retail sales data and create an interactive Business Intelligence dashboard.

### Dashboard Areas

- Sales Overview
- Sales Channel Performance
- Product Analysis
- Forecast Summary

### Main Files

- business intelligence practical.pbix
- Meridian_Retail_Sales_Dataset.xlsx
- Dashboard/output screenshots

### Output Evidence

The repository contains screenshots of the completed:

- Sales Overview
- Sales Channel Performance
- Product Analysis
- Forecast Summary

**Technologies:** Power BI · Excel · Data Visualization · Business Intelligence

[Go to Practical 02 →](./Practical-02/)

---

# 🔹 Practical 03 — MongoDB Document Operations

📁 **Folder:** Practical-03

### Objective

To perform single and multiple document insertion and retrieval operations using MongoDB shell (mongosh).

### Operations Covered

1. Insert one document
2. Find documents
3. Insert multiple documents
4. Display formatted query results

### Output Evidence

The practical includes screenshots for each MongoDB operation:

- step1_insertOne.png.png
- step2_find.png.png
- step3_insertMany.png.png
- step4_find_pretty.png.png

**Technology:** MongoDB · mongosh · JavaScript

[Go to Practical 03 →](./Practical-03/)

---

# 🔹 Practical 04 — Noise Elimination, Feature Selection & EDA

📁 **Folder:** Practical-04

### Topics Covered

- Dataset inspection
- Noise elimination
- Feature selection
- Exploratory Data Analysis
- Distribution analysis
- Outlier identification
- Histogram visualization
- Boxplot visualization

### Main Resource

notebooks_Practical_4_Noise_Elimination_Feature_Selection_EDA.ipynb

### Output Evidence

The repository includes visual evidence for:

- Dataset/code execution
- Original dataset
- Histogram
- Boxplot

**Technologies:** Python · Jupyter Notebook · Pandas · Matplotlib

[Go to Practical 04 →](./Practical-04/)

---

# 🔹 Practical 05 — API & CSV Data Extraction

📁 **Folder:** Practical-05

### Objective

To extract data from a REST API, combine it with local CSV data, clean the result, and produce a structured output.

### Workflow

~~~
REST API + CSV
      ↓
Data Extraction
      ↓
Data Cleaning
      ↓
Data Merging
      ↓
Cleaned Warehouse Profiles
~~~

### Main Files

- data_extraction.py
- locations.csv
- cleaned_warehouse_profiles.csv

### Output Evidence

Screenshots are included for the Python execution, source data, location data, and cleaned output.

**Technologies:** Python · Pandas · Requests · REST API · CSV

[Go to Practical 05 →](./Practical-05/)

---

# 🔹 Practical 06 — Workflow Orchestration with Apache Airflow

📁 **Folder:** Practical-06

### Objective

To understand workflow orchestration by creating and managing an Apache Airflow DAG.

### Main Resources

~~~
Practical-06/
└── dags/
    ├── data_extraction.py
    └── data_pipeline_dag.py
~~~

### Concepts Covered

- DAG creation
- Tasks
- Task dependencies
- Workflow execution
- ETL-style orchestration

### Output Evidence

Airflow execution evidence should include screenshots showing:

- DAG visible in Airflow
- Successful DAG/task execution
- DAG task graph or Grid/Graph view

**Technology:** Apache Airflow 3.x · Python

[Go to Practical 06 →](./Practical-06/)

---

# 🔹 Practical 07 — CSV/JSON ETL & Incremental Loading

📁 **Folder:** Practical-07

### Objective

To implement an ETL workflow using CSV and JSON customer data with validation and incremental SQLite loading.

### Workflow

~~~
EXTRACT
   ↓
VALIDATE
   ↓
TRANSFORM
   ↓
INCREMENTAL LOAD
   ↓
SQLite Database
~~~

### Concepts Covered

- CSV and JSON extraction
- Data validation
- Invalid-record handling
- Transformation
- Record comparison
- Incremental loading
- SQLite database operations

### Output Evidence

Verified execution evidence includes:

- ETL execution result
- SQLite database output
- Loaded and invalid-record information

**Technologies:** Python · Pandas · SQLite · CSV · JSON

[Go to Practical 07 →](./Practical-07/)

---

# 🔹 Practical 08 — PySpark CSV Processing

📁 **Folder:** Practical-08

### Objective

To process CSV data using PySpark DataFrames and perform common data-engineering transformations.

### Workflow

~~~
CSV Files
   ↓
SparkSession
   ↓
DataFrames
   ↓
Filtering
   ↓
Aggregation
   ↓
Deduplication
   ↓
Joins
   ↓
Results
~~~

### Concepts Covered

- SparkSession
- CSV reading
- DataFrames
- Filtering
- Grouping and aggregation
- Deduplication
- Joins
- Category-level analysis

### Output Evidence

The repository includes screenshots showing:

- PySpark execution
- Aggregation results
- Join results

**Technologies:** Python · PySpark · Apache Spark

[Go to Practical 08 →](./Practical-08/)

---

# 🔹 Practical 09 — Incremental E-commerce ETL

📁 **Folder:** Practical-09

### Objective

To build an e-commerce ETL pipeline supporting historical/incremental loading, data validation, reporting, and automated tests.

### Workflow

~~~
Source CSV Data
      ↓
Validation
      ↓
Cleaning
      ↓
Transformation
      ↓
SQLite Warehouse
      ↓
Sales Report
      ↓
Testing
~~~

### Concepts Covered

- Historical loading
- Incremental loading
- Data validation
- Upsert logic
- Data-quality tracking
- Idempotent processing
- Report generation
- Unit testing

### Output Evidence

Verified screenshots include:

- ETL execution result
- Generated sales report
- Successful unit-test execution

**Technologies:** Python · Pandas · SQLite · unittest

[Go to Practical 09 →](./Practical-09/)

---

# 🔹 Practical 10 — End-to-End Star-Schema ETL

📁 **Folder:** Practical-10

### Objective

To implement a complete ETL pipeline from source data ingestion to cleaning, transformation, database loading, reporting, dashboard generation, and testing.

### Pipeline Architecture

~~~
SOURCE DATA
     ↓
INGESTION
     ↓
CLEANING
     ↓
TRANSFORMATION
     ↓
STAR-SCHEMA WAREHOUSE
     ↓
REPORT / DASHBOARD
     ↓
TESTING
~~~

### Project Structure

~~~
Practical-10/
├── data/
├── scripts/
│   ├── cleaning.py
│   ├── ingestion.py
│   ├── load_database.py
│   ├── pipeline.py
│   └── transformation.py
├── tests/
│   └── test_pipeline.py
├── requirements.txt
└── run_pipeline.py
~~~

### Concepts Covered

- Data ingestion
- Data cleaning
- Data transformation
- Star-schema data warehouse
- Database loading
- Analytical reporting
- Dashboard generation
- Unit testing

### Output Evidence

Verified screenshots include:

- Successful ETL pipeline execution
- Generated dashboard/report
- Successful unit-test execution

**Technologies:** Python · Pandas · SQLite · unittest

[Go to Practical 10 →](./Practical-10/)

---

# 🖼️ Output & Verification

A major focus of this repository is **execution evidence**, not only source code.

| Practical | Output Evidence |
|---|---|
| Practical 01 | Parsing, regex and SQLite execution screenshots |
| Practical 02 | Power BI dashboard screenshots |
| Practical 03 | MongoDB operation screenshots |
| Practical 04 | EDA, histogram and boxplot screenshots |
| Practical 05 | API extraction and cleaned-data screenshots |
| Practical 06 | Airflow DAG/execution screenshots |
| Practical 07 | ETL and SQLite database screenshots |
| Practical 08 | PySpark execution, aggregation and join screenshots |
| Practical 09 | ETL, report and test screenshots |
| Practical 10 | Pipeline, dashboard and test screenshots |

> Screenshots are included as practical evidence so that execution results can be reviewed directly from the repository.

---

# 🧰 Technologies Used

### Programming & Data Processing

- Python
- Pandas
- Requests
- Regular Expressions
- CSV
- JSON
- XML
- HTML

### Databases

- SQLite
- MongoDB
- CRUD operations
- Incremental loading
- Upserts

### Business Intelligence

- Microsoft Power BI
- Microsoft Excel
- Data visualization
- Retail sales analysis

### Data Engineering

- ETL
- Data pipelines
- Data extraction
- Data transformation
- Data quality
- Data validation
- Data warehousing
- Star schema

### Big Data

- Apache Spark
- PySpark
- Spark DataFrames

### Workflow Orchestration

- Apache Airflow
- DAGs
- Task dependencies

### Testing & Version Control

- unittest
- Git
- GitHub

---

# 📁 Repository Structure

~~~
Data-Engineering-Practical/
│
├── Practical-01/    # File processing & SQLite
├── Practical-02/    # Power BI retail dashboard
├── Practical-03/    # MongoDB operations
├── Practical-04/    # EDA & visualization
├── Practical-05/    # API & CSV extraction
├── Practical-06/    # Airflow workflow orchestration
├── Practical-07/    # CSV/JSON ETL
├── Practical-08/    # PySpark processing
├── Practical-09/    # Incremental e-commerce ETL
├── Practical-10/    # End-to-end star-schema ETL
└── README.md
~~~

---

# 🔄 Overall Data Engineering Journey

~~~
File Processing
      ↓
Data Quality & Anomaly Checking
      ↓
Database Operations
      ↓
Business Intelligence
      ↓
API & Data Extraction
      ↓
Cleaning & Transformation
      ↓
ETL
      ↓
Workflow Orchestration
      ↓
PySpark
      ↓
Incremental Loading
      ↓
Data Warehousing
      ↓
End-to-End Pipeline
      ↓
Testing & Documentation
~~~

---

# 🎓 Learning Outcomes

After completing these practicals, I gained hands-on exposure to:

- Python-based data processing
- File-format parsing
- Data extraction and cleaning
- Data-quality and anomaly checking
- SQLite CRUD operations
- MongoDB document operations
- Power BI dashboard development
- REST API integration
- ETL pipeline development
- Incremental data loading
- Apache Airflow workflow orchestration
- PySpark DataFrame processing
- Data warehouse concepts
- Star-schema design
- Pipeline testing and validation
- Git and GitHub documentation

---

# ▶️ Running the Repository

Clone the repository:

~~~bash
git clone https://github.com/Mukeshkarn-DS/Data-Engineering-Practical.git
cd Data-Engineering-Practical
~~~

For Python-based practicals:

~~~bash
python filename.py
~~~

For projects with dependencies:

~~~bash
pip install -r requirements.txt
~~~

### Practical 09

~~~bash
cd Practical-09
python etl_pipeline.py
python -m unittest tests/test_pipeline.py
~~~

### Practical 10

~~~bash
cd Practical-10
python run_pipeline.py
python -m unittest tests/test_pipeline.py
~~~

> Read the README inside each practical before execution because dependencies, input files and commands vary by practical.

---

# 🧹 Repository Organization

The repository is intentionally limited to **Practical 01–10**.

- Standardized practical folders from Practical-01 through Practical-10.
- Removed unnecessary duplicate/unwanted files.
- Kept source code, required datasets, notebooks, dashboards, screenshots, tests and documentation.
- Avoided committing unnecessary generated databases/cache files where they can be recreated.
- Included execution/output evidence for practical verification.
- Maintained a separate README inside each practical for detailed instructions.

---

# 👨‍💻 Author

**Mukesh Karn**

**B.Sc. Data Science Student**

### Areas of Interest

- Data Engineering
- Data Analytics
- Data Science
- Python
- SQL
- Power BI
- Big Data
- Machine Learning

---

# 🔗 Repository

https://github.com/Mukeshkarn-DS/Data-Engineering-Practical

---

# ⭐ Conclusion

This repository represents my hands-on learning journey through **Data Engineering Practicals 01–10**.

The work progresses from basic file and database operations to Business Intelligence, API-based extraction, ETL, Airflow orchestration, PySpark processing, incremental data loading, data warehousing, automated testing, and end-to-end pipeline development.

The inclusion of execution screenshots provides practical evidence of the implemented workflows and results.

**Learn → Build → Process → Test → Document → Improve 🚀**
