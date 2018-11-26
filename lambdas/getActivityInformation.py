import json
import boto3
import decimal
from boto3.dynamodb.conditions import Key, Attr

RESOURCE = boto3.resource('dynamodb', region_name='us-east-1')
TABLE = RESOURCE.Table('activity')


class DecimalEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, decimal.Decimal):
            return float(o)
        return super(DecimalEncoder, self).default(o)


def lambda_handler(event, context):

    results = TABLE.query(KeyConditionExpression=Key('user_name').eq(event['user_name']))

    return json.dumps(results['Items'], cls=DecimalEncoder)

    #  return {
    #     'statusCode': 200,
    #     'body': json.dumps('Hello from Lambda!')
    # }
