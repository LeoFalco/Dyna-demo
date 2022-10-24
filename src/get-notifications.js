const { dynamo, TABLE_NAME } = require('./core/dynamo')

function getNotifications({ subscriptionId, afterKey }){
  return dynamo.query({
    TableName: TABLE_NAME,
    KeyConditionExpression: 'pk = :pk',
    ExclusiveStartKey: afterKey,
    ExpressionAttributeValues: {
      ':pk': `NOTIFICATION#${subscriptionId}`
    },
    Limit: 2
  }).promise()
}


async function run (){

  const getNotificationsResponse = await getNotifications({
    subscriptionId: '5c93b003-36c6-484c-9ba1-67f134fc59f1'
  })

  console.log('getNotificationsResponse', getNotificationsResponse)

  const getNotificationsLastPageResponse = await getNotifications({
    subscriptionId: '5c93b003-36c6-484c-9ba1-67f134fc59f1',
    afterKey: getNotificationsResponse.LastEvaluatedKey
  })
  console.log('getNotificationsLastPageResponse', getNotificationsLastPageResponse)

}


run()