/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ServiceLevelWithParent, ServiceLevelWithParent$ } from "./servicelevelwithparent.js";
import { TrackingStatus, TrackingStatus$ } from "./trackingstatus.js";
import {
    TrackingStatusLocationBase,
    TrackingStatusLocationBase$,
} from "./trackingstatuslocationbase.js";
import * as z from "zod";

export type Track = {
    /**
     * The sender address with city, state, zip and country information.
     */
    addressFrom?: TrackingStatusLocationBase | undefined;
    /**
     * The recipient address with city, state, zip and country information.
     */
    addressTo?: TrackingStatusLocationBase | undefined;
    /**
     * Name of the carrier of the shipment to track. See <a href="#tag/Carriers">Carriers</a>.
     */
    carrier: string;
    /**
     * The estimated time of arrival according to the carrier, this might be updated by carriers during the life of the shipment.
     */
    eta?: Date | undefined;
    messages: Array<string>;
    /**
     * A string of up to 100 characters that can be filled with any additional information you want to attach to the object.
     */
    metadata?: string | undefined;
    /**
     * The estimated time of arrival according to the carrier at the time the shipment first entered the system.
     */
    originalEta?: Date | undefined;
    servicelevel?: ServiceLevelWithParent | undefined;
    /**
     * A list of tracking events, following the same structure as <code>tracking_status</code>.
     *
     * @remarks
     * It contains a full history of all tracking statuses, starting with the earlier tracking event first.
     */
    trackingHistory: Array<TrackingStatus>;
    /**
     * Tracking number to track.
     */
    trackingNumber: string;
    /**
     * The latest tracking information of this shipment.
     */
    trackingStatus?: TrackingStatus | undefined;
    /**
     * The <code>object_id</code> of the transaction associated with this tracking object.
     *
     * @remarks
     * This field is visible only to the object owner of the transaction.
     */
    transaction?: string | undefined;
};

/** @internal */
export namespace Track$ {
    export const inboundSchema: z.ZodType<Track, z.ZodTypeDef, unknown> = z
        .object({
            address_from: TrackingStatusLocationBase$.inboundSchema.optional(),
            address_to: TrackingStatusLocationBase$.inboundSchema.optional(),
            carrier: z.string(),
            eta: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            messages: z.array(z.string()),
            metadata: z.string().optional(),
            original_eta: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            servicelevel: ServiceLevelWithParent$.inboundSchema.optional(),
            tracking_history: z.array(TrackingStatus$.inboundSchema),
            tracking_number: z.string(),
            tracking_status: TrackingStatus$.inboundSchema.optional(),
            transaction: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                address_from: "addressFrom",
                address_to: "addressTo",
                original_eta: "originalEta",
                tracking_history: "trackingHistory",
                tracking_number: "trackingNumber",
                tracking_status: "trackingStatus",
            });
        });

    export type Outbound = {
        address_from?: TrackingStatusLocationBase$.Outbound | undefined;
        address_to?: TrackingStatusLocationBase$.Outbound | undefined;
        carrier: string;
        eta?: string | undefined;
        messages: Array<string>;
        metadata?: string | undefined;
        original_eta?: string | undefined;
        servicelevel?: ServiceLevelWithParent$.Outbound | undefined;
        tracking_history: Array<TrackingStatus$.Outbound>;
        tracking_number: string;
        tracking_status?: TrackingStatus$.Outbound | undefined;
        transaction?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Track> = z
        .object({
            addressFrom: TrackingStatusLocationBase$.outboundSchema.optional(),
            addressTo: TrackingStatusLocationBase$.outboundSchema.optional(),
            carrier: z.string(),
            eta: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            messages: z.array(z.string()),
            metadata: z.string().optional(),
            originalEta: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            servicelevel: ServiceLevelWithParent$.outboundSchema.optional(),
            trackingHistory: z.array(TrackingStatus$.outboundSchema),
            trackingNumber: z.string(),
            trackingStatus: TrackingStatus$.outboundSchema.optional(),
            transaction: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                addressFrom: "address_from",
                addressTo: "address_to",
                originalEta: "original_eta",
                trackingHistory: "tracking_history",
                trackingNumber: "tracking_number",
                trackingStatus: "tracking_status",
            });
        });
}
