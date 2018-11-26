import json
import boto3

RESOURCE = boto3.resource('dynamodb', region_name='us-east-1')
TABLE = RESOURCE.Table('user')


def lambda_handler(event, context):
    response = "failed"
    # Username and password to be validated
    check_username = event['username']
    check_password = event['password']

    # Scans user table to retrieve all the usernames
    results = TABLE.scan()

    # Checks the database username against given username
    # if there varifies password
    for user in results['Items']:
        if user['user_name'] == check_username:
            response = "username correct"
            if user['user_password'] == check_password:
                response = "validation succeeded"

    return response
