import json
import boto3

RESOURCE = boto3.resource('dynamodb', region_name='us-east-1')
TABLE = RESOURCE.Table('user')


def lambda_handler(event, context):
    var = gender = ""
    var = age = ""
    var = height = ""
    var = weight = ""

    results = TABLE.scan()

    # Checks the database username against given username
    # if there varifies password
    for user in results['Items']:
        if user['user_name'] == event['username']:
            gender = user['user_gender']
            age = user['user_age']
            height = user['user_height']
            weight = user['user_weight']
            fname = user['user_fname']
            lname = user['user_lname']
    return {
        'gender': gender,
        'age': age,
        'height': height,
        'weight': weight,
        'fname': fname,
        'lname': lname
    }
