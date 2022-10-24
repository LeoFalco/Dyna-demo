const { dynamo, TABLE_NAME } = require('./core/dynamo')

function getSubscriptions({ userId }){
  return dynamo.query({
    TableName: TABLE_NAME,
    KeyConditionExpression: 'pk = :pk',
    ExpressionAttributeValues: {
      ':pk': `SUBSCRIPTION#${userId}`
    }
  }).promise()
}

function getSubscription({ userId, type }){
  return dynamo.get({
    TableName: TABLE_NAME,
    Key: {
      pk: `SUBSCRIPTION#${userId}`,
      sk: type
    },
  }).promise()
}

async function run (){

  const getSubscriptionsResponse = await getSubscriptions({
    userId: 'fd98a33b-24d1-4288-a494-777527ecd185'
  })

  console.log('getSubscriptionsResponse', getSubscriptionsResponse)

  const getSubscriptionResponse = await getSubscription({
    userId: 'fd98a33b-24d1-4288-a494-777527ecd185',
    type: 'browser'
  })

  console.log('getSubscriptionResponse', getSubscriptionResponse)
}


run()