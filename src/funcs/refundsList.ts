/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ShippoCore } from "../core.js";
import { encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * List all refunds
 *
 * @remarks
 * Returns a list all refund objects.
 */
export async function refundsList(
  client: ShippoCore,
  options?: RequestOptions,
): Promise<
  Result<
    components.RefundPaginatedList,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input: operations.ListRefundsRequest = {};
  void input; // request input is unused

  const path = pathToFunc("/refunds/")();

  const headers = new Headers({
    Accept: "application/json",
    "SHIPPO-API-VERSION": encodeSimple(
      "SHIPPO-API-VERSION",
      client._options.shippoApiVersion,
      { explode: false, charEncoding: "none" },
    ),
  });

  const secConfig = await extractSecurity(client._options.apiKeyHeader);
  const securityInput = secConfig == null ? {} : { apiKeyHeader: secConfig };
  const context = {
    operationID: "ListRefunds",
    oAuth2Scopes: [],
    securitySource: client._options.apiKeyHeader,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    path: path,
    headers: headers,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "4XX", "5XX"],
    retryConfig: options?.retries
      || client._options.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result] = await M.match<
    components.RefundPaginatedList,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, components.RefundPaginatedList$inboundSchema),
    M.fail([400, "4XX", "5XX"]),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
}