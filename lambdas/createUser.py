import json
import boto3
from datetime import datetime

RESOURCE = boto3.resource('dynamodb', region_name='us-east-1')


def lambda_handler(event, context):
    print(event)
    response = "failed"
    table = RESOURCE.Table('user')
    usernames = table.scan()
    if event['part'] == "1":
        for user in usernames["Items"]:
            print(user['user_name'])
            if user['user_name'] == event['username']:
                return "username already used"
        response = table.put_item(
            Item={
                'user_name': event['username'],
                'user_password': event['password'],
                'user_fname': event['fname'],
                'user_lname': event['lname'],
            })

    if event['part'] == '2':
        response = table.update_item(
            Key={
                'user_name': event['username']
            },
            UpdateExpression="set user_age = :r, user_height = :b, user_weight = :w, user_gender = :g",
            ExpressionAttributeValues={
                ':r': event['age'],
                ':b': event['height'],
                ':w': event['weight'],
                ':g': event['gender'],
            },
            ReturnValues="UPDATED_NEW"
        )
    return response
