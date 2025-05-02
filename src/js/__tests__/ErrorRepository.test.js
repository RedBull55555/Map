import ErrorRepository from '../ErrorRepository';

describe('ErrorRepository', () => {
  let repo;

  beforeEach(() => {
    repo = new ErrorRepository();
  });

  test('returns correct error message for known code', () => {
    expect(repo.translate(100)).toBe('Invalid request');
    expect(repo.translate(200)).toBe('User not found');
    expect(repo.translate(300)).toBe('Server unavailable');
  });

  test('returns "Unknown error" for unknown code', () => {
    expect(repo.translate(404)).toBe('Unknown error');
    expect(repo.translate(null)).toBe('Unknown error');
    expect(repo.translate(undefined)).toBe('Unknown error');
  });
});
