from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

@app.get("/")
def pagina_inicial():
    return render_template("index.html")       

# @app.get("/sensores")
# def ler_sensores():
#     dados = {
#         "temperatura":round(random.uniform(20,80),2),
#         "umidade":round(random.uniform(30,90),2),
#         "pressao":round(random.uniform(900,1100),2),
#     }
#     return jsonify(dados)


if(__name__=='__main__'):
    app.run(host="0.0.0.0", port=3030)
    
       