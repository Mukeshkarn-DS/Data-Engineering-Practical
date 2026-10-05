# Practical 01 - Data Parsing, Quality Checks, Binary Files, Regex and SQLite CRUD

## Objective

To perform basic data-engineering operations using Python, including:

- Parsing and extracting data from TXT, CSV, HTML, XML and JSON files
- Checking retrieved data for missing values and common anomalies
- Reading and writing binary files
- Searching, splitting and replacing text using regular expressions
- Designing a small relational database and performing SQL CRUD operations

---

## Exercise 1 - File Parsing and Data Quality Checking

### Aim

To parse different file formats, extract relevant data, and identify missing values and invalid data.

### File Formats Covered

| Format | Program | Purpose |
|---|---|---|
| TXT | `parse_text()` | Parse key-value text data |
| CSV | `parse_csv()` | Read tabular CSV records |
| HTML | `parse_html()` | Extract records from an HTML table |
| XML | `parse_xml()` | Extract user records from XML |
| JSON | `parse_json()` | Read structured JSON records |

### Data Quality Checks

The program checks the extracted records for:

- Missing or blank fields
- Invalid age values (below 0 or above 120)
- Non-numeric age values
- Negative salary values
- Non-numeric salary values
- Negative timeout values
- Non-numeric timeout values

### Files Used

The sample input files are stored in the `data/` folder:

- `data/sample.txt`
- `data/sample.csv`
- `data/sample.html`
- `data/sample.xml`
- `data/sample.json`

### Program

`ex1_parsing_and_anomalies.py`

### Data Generation

`setup_data.py` creates the sample input files used by Exercise 1.

### Execution

```bash
python setup_data.py
python ex1_parsing_and_anomalies.py
```

The program performs a quality audit for each supported file format.

---

## Exercise 2 - Reading and Writing Binary Files

### Aim

To demonstrate reading and writing binary files using Python.

The program also demonstrates Python pickle serialization.

### Program

`ex2_binary_files.py`

### Operations Covered

- Write binary records
- Read binary records
- Write a Python object using pickle
- Read the serialized object

### Generated Files

- `data/records.bin`
- `data/app.pkl`

### Execution

```bash
python ex2_binary_files.py
```

---

## Exercise 3 - Regular Expression Operations

### Aim

To perform searching, splitting and replacing strings using regular expressions.

### Operations Covered

- Search and extract valid email addresses
- Search and extract phone numbers
- Split a delimited string
- Replace/mask email usernames
- Match a keyword pattern

### Program

`ex3_regex_operations.py`

### Execution

```bash
python ex3_regex_operations.py
```

---

## Exercise 4 - Relational Database and SQL CRUD

### Aim

To design a small relational database, populate it with data, and perform SQL CRUD operations.

### Database

SQLite database:

`data/app.db`

### Tables

- `departments`
- `employees`

The `employees` table is related to the `departments` table using a foreign key.

### CRUD Operations

| Operation | Implementation |
|---|---|
| Create | Create relational tables and insert records |
| Read | Retrieve employee and department data using SQL SELECT/JOIN |
| Update | Update an employee salary |
| Delete | Delete an employee record |

### Program

`ex4_database_crud.py`

### Execution

```bash
python ex4_database_crud.py
```

---

## Project Structure

```text
Practical-01/
├── README.md
├── setup_data.py
├── ex1_parsing_and_anomalies.py
├── ex2_binary_files.py
├── ex3_regex_operations.py
├── ex4_database_crud.py
└── data/
    ├── sample.txt
    ├── sample.csv
    ├── sample.html
    ├── sample.xml
    └── sample.json
```

Generated runtime files such as the binary file, pickle file and SQLite database are created inside `data/` when the corresponding programs are executed.

---

## Result

Practical 01 demonstrates the required data-engineering fundamentals:

1. Multi-format file parsing and data extraction
2. Missing-value and anomaly detection
3. Binary file reading and writing
4. Regular-expression search, split and replace operations
5. Relational database design and SQL CRUD operations
