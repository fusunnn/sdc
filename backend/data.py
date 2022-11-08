import json

def open_file(path):
    with open(path) as f:
        data = json.load(f)
        return data

