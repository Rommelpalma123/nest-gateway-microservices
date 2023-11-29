export enum RabbitMQ {
  AccountQueue = 'accounts',
}

export enum AccountMSG {
  CREATE = 'CREATE_ACCOUNT',
  FIND_ALL = 'FIND_ACCOUNTS',
  FIND_ONE = 'FIND_ACCOUNT',
  UPDATE = 'UPDATE_ACCOUNT',
  DELETE = 'DELETE_ACCOUNT',
  VALID_USER = 'VALID_ACCOUNT',
}
