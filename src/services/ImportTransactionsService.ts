import csv from 'csvtojson';
import path from 'path';
// import { getRepository } from 'typeorm';

// import Category from '../models/Category';
import Transaction from '../models/Transaction';

class ImportTransactionsService {
  async execute(): Promise<Transaction[]> {
    // const transactionsRepository = getRepository(Transaction);
    // const categoryRepository = getRepository(Category);

    const csvFilePath = path.resolve(__dirname, '../../tmp/transactions.csv');

    const transactions = await csv().fromFile(csvFilePath);

    const categories = transactions.map(transaction => {
      return transaction.category;
    });
    console.log(categories);
    // await transactionsRepository.save(transactions);

    return transactions;
  }
}

export default ImportTransactionsService;
