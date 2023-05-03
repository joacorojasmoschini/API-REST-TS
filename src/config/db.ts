import { connect } from 'mongoose';
require('dotenv').config();

const mongoDB = async (): Promise <void> => {
  const DB_URL = <string> process.env.DB_URL;
  await connect(DB_URL);
}

export default mongoDB;
