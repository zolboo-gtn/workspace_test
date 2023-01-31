//
import { initClient } from "@ts-rest/core";

//
import { contracts } from "@gtnjob/contract";

export const client = initClient(contracts, {
  baseUrl: "https://jsonplaceholder.typicode.com",
  baseHeaders: {},
  api: async ({ path, method, headers, body }) => {
    try {
      const _response = await fetch(path, {
        method,
        body,
        headers,
      });

      const response = {
        status: _response.status,
        body: await _response.json(),
      };

      return response;
    } catch (error) {
      return { status: 400, body: {} };
    }
  },
});
