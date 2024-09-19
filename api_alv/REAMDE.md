CRIANDO API

# CONFIGURANDO API

```
PS C:\dev\sys\api_alv> python -m venv venv

PS C:\dev\sys\api_alv> venv\Scripts\activate       
(venv) PS C:\dev\sys\api_alv> pip install Flask psycopg2-binary
Collecting Flask
  Downloading flask-3.0.3-py3-none-any.whl.metadata (3.2 kB)
Collecting psycopg2-binary
  Downloading psycopg2_binary-2.9.9-cp311-cp311-win_amd64.whl.metadata (4.6 kB)
Collecting Werkzeug>=3.0.0 (from Flask)
  Downloading werkzeug-3.0.4-py3-none-any.whl.metadata (3.7 kB)
Collecting Jinja2>=3.1.2 (from Flask)
  Downloading jinja2-3.1.4-py3-none-any.whl.metadata (2.6 kB)
Collecting itsdangerous>=2.1.2 (from Flask)
  Downloading itsdangerous-2.2.0-py3-none-any.whl.metadata (1.9 kB)
Collecting click>=8.1.3 (from Flask)
  Downloading click-8.1.7-py3-none-any.whl.metadata (3.0 kB)
Collecting blinker>=1.6.2 (from Flask)
  Downloading blinker-1.8.2-py3-none-any.whl.metadata (1.6 kB)
Collecting colorama (from click>=8.1.3->Flask)
  Downloading colorama-0.4.6-py2.py3-none-any.whl.metadata (17 kB)
Collecting MarkupSafe>=2.0 (from Jinja2>=3.1.2->Flask)
  Downloading MarkupSafe-2.1.5-cp311-cp311-win_amd64.whl.metadata (3.1 kB)
Downloading flask-3.0.3-py3-none-any.whl (101 kB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 101.7/101.7 kB 973.4 kB/s eta 0:00:00
Downloading psycopg2_binary-2.9.9-cp311-cp311-win_amd64.whl (1.2 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 1.2/1.2 MB 187.3 kB/s eta 0:00:00
Downloading blinker-1.8.2-py3-none-any.whl (9.5 kB)
Downloading click-8.1.7-py3-none-any.whl (97 kB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 97.9/97.9 kB 57.3 kB/s eta 0:00:00
Downloading itsdangerous-2.2.0-py3-none-any.whl (16 kB)
Downloading jinja2-3.1.4-py3-none-any.whl (133 kB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 133.3/133.3 kB 133.6 kB/s eta 0:00:00
Downloading werkzeug-3.0.4-py3-none-any.whl (227 kB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 227.6/227.6 kB 147.9 kB/s eta 0:00:00
Downloading MarkupSafe-2.1.5-cp311-cp311-win_amd64.whl (17 kB)
Downloading colorama-0.4.6-py2.py3-none-any.whl (25 kB)
Installing collected packages: psycopg2-binary, MarkupSafe, itsdangerous, colorama, blinker, Werkzeug, Jinja2, click, Flask
Successfully installed Flask-3.0.3 Jinja2-3.1.4 MarkupSafe-2.1.5 Werkzeug-3.0.4 blinker-1.8.2 click-8.1.7 colorama-0.4.6 itsdangerous-2.2.0 psycopg2-binary-2.9.9

[notice] A new release of pip is available: 24.0 -> 24.2
[notice] To update, run: python.exe -m pip install --upgrade pip
(venv) PS C:\dev\sys\api_alv> 
```

# CRIANDO A API

```
from flask import Flask, request, jsonify
import psycopg2

app = Flask(__name__)

# Conexão com o banco de dados
def get_db_connection():
    conn = psycopg2.connect(host='localhost', database='seu_banco', user='seu_usuario', password='sua_senha')
    return conn

@app.route('/api/items', methods=['GET'])
def get_items():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM items;')  # Substitua pelo seu nome de tabela
    items = cur.fetchall()
    cur.close()
    conn.close()
    return jsonify(items)

if __name__ == '__main__':
    app.run(debug=True)

```


# COMENTANDO EM PYTHON
```
api_alv
│
├── venv
│   ├── include
│   ├── lib
│   ├── scripts
│   └── pyvenv.cfg
│
└── app.py
```