/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type ListShipmentRatesGlobals = {
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

export type ListShipmentRatesRequest = {
    /**
     * Object ID of the shipment to update
     */
    shipmentId: string;
    /**
     * The page number you want to select
     */
    page?: number | undefined;
    /**
     * The number of results to return per page (max 100)
     */
    results?: number | undefined;
};

/** @internal */
export namespace ListShipmentRatesGlobals$ {
    export const inboundSchema: z.ZodType<ListShipmentRatesGlobals, z.ZodTypeDef, unknown> = z
        .object({
            "SHIPPO-API-VERSION": z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                "SHIPPO-API-VERSION": "shippoApiVersion",
            });
        });

    export type Outbound = {
        "SHIPPO-API-VERSION"?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListShipmentRatesGlobals> = z
        .object({
            shippoApiVersion: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                shippoApiVersion: "SHIPPO-API-VERSION",
            });
        });
}

/** @internal */
export namespace ListShipmentRatesRequest$ {
    export const inboundSchema: z.ZodType<ListShipmentRatesRequest, z.ZodTypeDef, unknown> = z
        .object({
            ShipmentId: z.string(),
            page: z.number().int().default(1),
            results: z.number().int().default(25),
        })
        .transform((v) => {
            return remap$(v, {
                ShipmentId: "shipmentId",
            });
        });

    export type Outbound = {
        ShipmentId: string;
        page: number;
        results: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListShipmentRatesRequest> = z
        .object({
            shipmentId: z.string(),
            page: z.number().int().default(1),
            results: z.number().int().default(25),
        })
        .transform((v) => {
            return remap$(v, {
                shipmentId: "ShipmentId",
            });
        });
}
