import json
import boto3
from boto3.dynamodb.conditions import Key, Attr

RESOURCE = boto3.resource('dynamodb', region_name='us-east-1')
TABLE = RESOURCE.Table('activity')


def lambda_handler(event, context):

    starttime = event['activity_starttime']
    endtime = event['activity_endtime']
    title = event['activity_title']
    desc = event['activity_desc']
    username = event['user_name']
    date = event['activity_ISO']

    currentActivities = TABLE.query(KeyConditionExpression=Key('user_name').eq(event['user_name']))

    for i in currentActivities['Items']:
        if i['activity_title'] == title:
            return "This activity has already been created"

    response = TABLE.put_item(
        Item={
            'activity_title': title,
            'user_name': username,
            'activity_desc': desc,
            'activity_ISO': date,
            'activity_starttime': starttime,
            'activity_endtime': endtime
        })
    return {
        'statusCode': 200,
        'response': response,
        'body': json.dumps('Added the activity')

    }
