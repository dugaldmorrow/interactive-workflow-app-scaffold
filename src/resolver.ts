/**
 * Backend resolver for the Interactive Workflow app.
 *
 * This scaffold is the starting point for work item 1.
 * Subsequent work items will add resolver functions here to support
 * creating, reading, updating, and deleting workflows and their steps.
 *
 * Storage (Forge KVS) will be added in work item 8.
 */
import Resolver from '@forge/resolver';

const resolver = new Resolver();

// Placeholder resolver — returns a simple acknowledgement.
// Future work items will replace this with real data operations.
resolver.define('ping', () => {
  return { status: 'ok' };
});

export const handler = resolver.getDefinitions();
