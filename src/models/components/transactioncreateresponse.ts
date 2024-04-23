/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    InstantTransactionCreateResponse,
    InstantTransactionCreateResponse$,
    InstantTransactionCreateResponseResponseType,
} from "./instanttransactioncreateresponse";
import { ResponseType, Transaction, Transaction$ } from "./transaction";
import * as z from "zod";

export type TransactionCreateResponse =
    | (Transaction & { responseType: ResponseType.Standard })
    | (InstantTransactionCreateResponse & {
          responseType: InstantTransactionCreateResponseResponseType.Instant;
      });

/** @internal */
export namespace TransactionCreateResponse$ {
    export type Inbound =
        | (Transaction$.Inbound & { responseType: ResponseType.Standard })
        | (InstantTransactionCreateResponse$.Inbound & {
              responseType: InstantTransactionCreateResponseResponseType.Instant;
          });

    export type Outbound =
        | (Transaction$.Outbound & { responseType: ResponseType.Standard })
        | (InstantTransactionCreateResponse$.Outbound & {
              responseType: InstantTransactionCreateResponseResponseType.Instant;
          });
    export const inboundSchema: z.ZodType<TransactionCreateResponse, z.ZodTypeDef, Inbound> =
        z.union([
            Transaction$.inboundSchema.and(
                z
                    .object({ responseType: z.literal(ResponseType.Standard) })
                    .transform((v) => ({ responseType: v.responseType }))
            ),
            InstantTransactionCreateResponse$.inboundSchema.and(
                z
                    .object({
                        responseType: z.literal(
                            InstantTransactionCreateResponseResponseType.Instant
                        ),
                    })
                    .transform((v) => ({ responseType: v.responseType }))
            ),
        ]);
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TransactionCreateResponse> =
        z.union([
            Transaction$.outboundSchema.and(
                z
                    .object({ responseType: z.literal(ResponseType.Standard) })
                    .transform((v) => ({ responseType: v.responseType }))
            ),
            InstantTransactionCreateResponse$.outboundSchema.and(
                z
                    .object({
                        responseType: z.literal(
                            InstantTransactionCreateResponseResponseType.Instant
                        ),
                    })
                    .transform((v) => ({ responseType: v.responseType }))
            ),
        ]);
}