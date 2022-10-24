const { DocumentClient } = require('aws-sdk/clients/dynamodb')

const TABLE_NAME =  'dev-dyna-demo'

const dynamo = new DocumentClient({
  region: 'localhost',
  endpoint: 'http://localhost:8000',
  accessKeyId: 'local',
  secretAccessKey: 'local'
})

module.exports = {
  dynamo,
  TABLE_NAME
}