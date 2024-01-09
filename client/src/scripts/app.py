from flask import Flask
from flask_cors import CORS
import pandas as pd
from json import loads, dumps

data = pd.read_csv("../assets/ProductDetails.csv")
df1 = data.copy()
df2 = data.copy()


## Original data format
df1.index = df1["ID"]
df1 = df1.drop("ID", axis=1).transpose()
d = loads(df1.to_json())


## Formatted data
f = lambda x: pd.Series({i: dict(x[i]) for i in x.columns if i != "Brand"})
df2 = df2.groupby("Brand").apply(f).transpose()
d_formatted = loads(df2.to_json())

## Brands
b = dict(enumerate(df2.columns))


## Host data on network
app = Flask(__name__)
CORS(app)


@app.route("/data")
def data():
    return dumps(d)


@app.route("/formatted-data")
def formatted_data():
    return dumps(d_formatted)


@app.route("/brands")
def brands():
    return dumps(b)


if __name__ == "__main__":
    app.run(port=5004)
