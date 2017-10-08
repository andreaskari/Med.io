
# Import statements

# import pymongo
# import json
# from pymongo import MongoClient
# from pprint import pprint
from flask import Flask
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config['MONGO_DBNAME'] = 'med_io'
app.config['MONGO_URI'] = 'mongodb://rohamghotbi:123456qwerty@ds040877.mlab.com:40877/med_io' 
mongo = PyMongo(app)

@app.route('/add')
def add():
	user = mongo.db.users
	user.insert({'name':'Roham'})
	return 'Patient Added'

if __name__ == '__main__':
	app.run(debug = True)


Connectinog with a specific host and port
client = MongoClient('localhost', 27017)
				or URL Format
client = MongoClient('mongodb://localhost:27017/')
db = client.test_database
collection = db.test_collection



# Helper Methods
import random
def uniqueid():
    seed = random.getrandbits(64)
    while true:
       yield seed++  
        
class Patient:
	def __init__(self, name, height, age, weight):
		patient_id = uniqueid()
		basic_information = {}
        basic_information["name"] = name
        basic_information["height"] = height
        basic_information["weight"] = weight
        basic_information["age"] = age

		cases = {}
	
	def makeCase(self, case_id, description, symptom):
		case = {}
        case["description"] = description
		case["symptom"] = symptom
		self.cases[case_id] = case

	def makeSymptom():
		
    def getCases(self):
      	return self.cases
    
	def get_symptoms(self, case_id):
    	return self.cases[case_id]["symptom"]

def insertPatient(patient):
	assert (isinstance(patient, Patient)), "Invalid Patient Input. Cannot add information into database"
	if (!(patient.patient_id in db.keys())):
		db[patient.patient_id] = patient
	else:
    	print("Patient already exists in the System! Please Contact your Admin.")
    
    
def getPatient(patient_id):
	if (patient.patient_id in db.keys()):
		return db[patient.patient_id]
	else:
    	return "Patient not Found"
    
 