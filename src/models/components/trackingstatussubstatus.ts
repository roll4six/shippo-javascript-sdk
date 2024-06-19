/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

/**
 * A finer-grained classification of the tracking event.
 */
export type TrackingStatusSubstatus = {
    /**
     * A code that represents the substatus of the shipment. See the <a href="https://docs.goshippo.com/docs/tracking/tracking/#event-definitions">Event Definitions</a> for more information.
     */
    code: string;
    /**
     * A human-readable description of the substatus. See the <a href="https://docs.goshippo.com/docs/tracking/tracking/#event-definitions">Event Definitions</a> for more information.
     */
    text: string;
    /**
     * Indicates whether the substatus requires action from the shipper or recipient to complete delivery.
     */
    actionRequired: boolean;
};

/** @internal */
export namespace TrackingStatusSubstatus$ {
    export const inboundSchema: z.ZodType<TrackingStatusSubstatus, z.ZodTypeDef, unknown> = z
        .object({
            code: z.string(),
            text: z.string(),
            action_required: z.boolean(),
        })
        .transform((v) => {
            return remap$(v, {
                action_required: "actionRequired",
            });
        });

    export type Outbound = {
        code: string;
        text: string;
        action_required: boolean;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TrackingStatusSubstatus> = z
        .object({
            code: z.string(),
            text: z.string(),
            actionRequired: z.boolean(),
        })
        .transform((v) => {
            return remap$(v, {
                actionRequired: "action_required",
            });
        });
}
