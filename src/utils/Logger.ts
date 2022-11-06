// imports 
import { Signale } from 'signale';

// Flawed logger 
export const FlawedLogger = new Signale().scope('FlawedLogger').config({
    displayFilename: true,
    displayTimestamp: true,
    displayDate: true,
    uppercaseLabel: true
  });