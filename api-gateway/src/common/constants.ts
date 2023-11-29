export enum RabbitMQ {
  UserQueue = 'users',
  PassengerQueue = 'passengers',
  CountryQueue = 'countries',
  ClientQueue = 'clients',
  AccountQueue = 'accounts',
}

export enum UserMSG {
  CREATE = 'CREATE_USER',
  FIND_ALL = 'FIND_USERS',
  FIND_ONE = 'FIND_USER',
  UPDATE = 'UPDATE_USER',
  DELETE = 'DELETE_USER',
  VALID_USER = 'VALID_USER',
}

export enum ClientMSG {
  CREATE = 'CREATE_CLIENT',
  FIND_ALL = 'FIND_CLIENTS',
  FIND_ONE = 'FIND_CLIENT',
  UPDATE = 'UPDATE_CLIENT',
  DELETE = 'DELETE_CLIENT',
  VALID_USER = 'VALID_CLIENT',
}

export enum AccountMSG {
  CREATE = 'CREATE_ACCOUNT',
  FIND_ALL = 'FIND_ACCOUNTS',
  FIND_ONE = 'FIND_ACCOUNT',
  UPDATE = 'UPDATE_ACCOUNT',
  DELETE = 'DELETE_ACCOUNT',
  VALID_USER = 'VALID_ACCOUNT',
}

export enum PassengerMSG {
  CREATE = 'CREATE_PASSENGER',
  FIND_ALL = 'FIND_PASSENGERS',
  FIND_ONE = 'FIND_PASSENGER',
  UPDATE = 'UPDATE_PASSENGER',
  DELETE = 'DELETE_PASSENGER',
}

export enum CountryMSG {
  CREATE = 'CREATE_COUNTRY',
  FIND_ALL = 'FIND_COUNTRYS',
  FIND_ONE = 'FIND_COUNTRY',
  UPDATE = 'UPDATE_COUNTRY',
  DELETE = 'DELETE_COUNTRY',
}
