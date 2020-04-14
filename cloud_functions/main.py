import requests
from bs4 import BeautifulSoup as bs
import json

def main(request):
    data = request.json
    intent = data['queryResult']['intent']['displayName']
    if intent == "Global Covid Intent - Cases":
        result = scrapeFromWebsite()
    else:
        result = json.dumps({'fulfillmentText': "Unknown intent"})
    return (result)

def scrapeFromWebsite():
    response = requests.get("https://www.worldometers.info/coronavirus/")
    text_data = response.text
    soup = bs(text_data, features="lxml")
    cases = soup.find("div", class_="maincounter-number").get_text().strip()
    cases_dict = {'fulfillmentText': "There are currently " + str(cases) + " cases of COVID-19 globally. This information was pulled from 'https://www.worldometers.info/coronavirus/' via BeautifulSoup (https://pypi.org/project/beautifulsoup4/), hosted on a Serverless Python Cloud Function (https://cloud.google.com/functions)"}
    cases_json = json.dumps(cases_dict)
    return(cases_json)