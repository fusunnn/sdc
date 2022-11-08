import hashlib
from data import *

def open_pass():
    return open_file('./assets/pass.txt')

def auth(passwordAtt):
    hashedAtt = hashlib.sha256(passwordAtt.encode('utf-8')).hexdigest()
    passw = open_pass()
    if (hashedAtt == passw):
        return True
    
    return False
