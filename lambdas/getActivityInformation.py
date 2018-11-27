import json
import boto3
from boto3.dynamodb.conditions import Key, Attr


RESOURCE = boto3.resource('dynamodb', region_name= 'us-east-1')
TABLE = RESOURCE.Table('activity')



def lambda_handler(event, context):
    #gets all the activities made by the current user_name
    results = TABLE.query(KeyConditionExpression=Key('user_name').eq(event['user_name']))
    
    #returns a string to be parsed of an array of JSON objects
    json_string = json.dumps([ob for ob in results['Items']])
    return json_string