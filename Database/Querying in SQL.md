# Topic: Querying in SQL
## Sub Topics: Basics of Querying

### Basics of Querying
#### 1. SELECT and FROM
- This is how we get the data from the database. SELECT tells which columns to fetch and FROM tells from which table do we need to get the data.
- Thing to remember, when the data is being fetched, FROM executes first and then SELECT.

**Logical Flow:** FROM -> SELECT

#### 2. WHERE
- Where is used to filter rows based on conditions. 

Eg:
``` sql
SELECT name, salary 
FROM employees
WHERE salary > 60000;
```
**Logical Flow**: FROM -> WHERE -> SELECT

##### Comparision operators in WHERE
- = -> Equals 
- !=/<> -> Not Equals
- Few comparisions: > <, >=, <=
- IS NULL, IS NOT NULL - Checks if the column is null or not
- BETWEEN x AND Y - Range Match
- LIKE: https://www.w3schools.com/sql/sql_like.asp and https://www.w3schools.com/sql/sql_wildcards.asp. LIKE is case-sensitive.
- ILIKE: Same as LIKE but its case insensitive
- IN:

###### IN Clause
- In is used for multi value matching. It is used inside WHERE clause.

Eg 1:
``` sql
SELECT name, dept 
FROM employees
WHERE dept IN ('HR', 'Finance', 'IT');
``` 
- Keeps only rows where dept is either HR, Finance, or IT.

It is equivalent to 
``` sql
WHERE dept = 'HR' OR dept = 'Finance' OR dept = 'IT';
```

Eg 2: NOT IN
``` sql
SELECT name, dept 
FROM employees
WHERE dept NOT IN ('HR', 'Finance');
```
This is equivalent to
``` sql 
SELECT name, dept 
FROM employees
WHERE dept != 'HR' AND dept != 'Finance';
```

This is all well and good but when it gets tricky is when we wanna include NULL in the IN clause.

🔑 How `NULL` Works in SQL

- `NULL` means **“unknown / missing value”**, not 0, not empty string.
- Any comparison with `NULL` (`=`, `!=`, `<`, etc.) gives **unknown**.
- SQL only returns rows where the condition evaluates to **true**.
- So if it’s **false** or **unknown**, the row gets filtered out.

🟢 Case 1: `IN`

```sql
WHERE dept IN ('HR', NULL)
```

For each row:
- If `dept = 'HR'` → ✅ true → included.
- If `dept = 'Finance'` → ❌ false → excluded.
- If `dept = NULL` → ❓ unknown → excluded (since unknown ≠ true).

👉 Result: Rows with `dept = HR` are included, but rows where `dept IS NULL` are not.

🔴 Case 2: `NOT IN`

```sql
WHERE dept NOT IN ('HR', NULL)
```

This expands logically to:

```sql
WHERE dept != 'HR' AND dept != NULL
```

Here’s the problem:
- If `dept = 'Finance'`:
  - `dept != 'HR'` → ✅ true
  - `dept != NULL` → ❓ unknown
  - `true AND unknown` → ❓ unknown → excluded

- If `dept = NULL`:
  - `dept != 'HR'` → ❓ unknown
  - `dept != NULL` → ❓ unknown
  - `unknown AND unknown` → ❓ unknown → excluded

👉 **Result:** `NOT IN` with a `NULL` in the list filters out _all rows_, because every comparison ends up with an `unknown`.

✅ How to Handle NULL Safely

If your data may contain `NULL`s, you should handle them explicitly:

Example: Safe `IN`
```sql
WHERE dept IN ('HR', 'Finance') OR dept IS NULL;
```

Example: Safe `NOT IN`
```sql
WHERE (dept NOT IN ('HR', 'Finance')) OR dept IS NULL;
```

Or better, use **`IS NULL` / `IS NOT NULL`** when you really care about missing values.