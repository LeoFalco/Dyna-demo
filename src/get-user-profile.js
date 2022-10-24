const { dynamo, TABLE_NAME } = require('./core/dynamo')

function getUserById({ userId }){
  return dynamo.get({
    TableName: TABLE_NAME,
    Key: {
      pk: `USER#${userId}`,
      sk: userId
    }
  }).promise()
}

async function run (){
  const getUserByIdResponse = await getUserById({
    userId: 'fd98a33b-24d1-4288-a494-777527ecd185'
  })

  console.log('getUserByIdResponse', getUserByIdResponse)
}


run()