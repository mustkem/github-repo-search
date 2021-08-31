// @js-nocheck
/* eslint-disable */
export default {
  __esModule: true,
  get: jest.fn().mockImplementation(() => {
    return Promise.resolve({ data: {} });
  }),
};
