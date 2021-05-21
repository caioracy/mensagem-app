import { Model } from 'mongoose';
import MessageRepository from './message.repository';

describe('MessageRepository', () => {
  it('should be defined', () => {
    expect(new MessageRepository(Model)).toBeDefined();
  });
});
