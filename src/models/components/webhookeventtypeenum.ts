/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const WebhookEventTypeEnum = {
    TransactionCreated: "transaction_created",
    TransactionUpdated: "transaction_updated",
    TrackUpdated: "track_updated",
    BatchCreated: "batch_created",
    BatchPurchased: "batch_purchased",
} as const;
export type WebhookEventTypeEnum = ClosedEnum<typeof WebhookEventTypeEnum>;

/** @internal */
export namespace WebhookEventTypeEnum$ {
    export const inboundSchema: z.ZodNativeEnum<typeof WebhookEventTypeEnum> =
        z.nativeEnum(WebhookEventTypeEnum);
    export const outboundSchema: z.ZodNativeEnum<typeof WebhookEventTypeEnum> = inboundSchema;
}