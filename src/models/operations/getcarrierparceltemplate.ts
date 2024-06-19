/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type GetCarrierParcelTemplateGlobals = {
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

export type GetCarrierParcelTemplateRequest = {
    /**
     * The unique string representation of the carrier parcel template
     */
    carrierParcelTemplateToken: string;
};

/** @internal */
export namespace GetCarrierParcelTemplateGlobals$ {
    export const inboundSchema: z.ZodType<GetCarrierParcelTemplateGlobals, z.ZodTypeDef, unknown> =
        z
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

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetCarrierParcelTemplateGlobals
    > = z
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
export namespace GetCarrierParcelTemplateRequest$ {
    export const inboundSchema: z.ZodType<GetCarrierParcelTemplateRequest, z.ZodTypeDef, unknown> =
        z
            .object({
                CarrierParcelTemplateToken: z.string(),
            })
            .transform((v) => {
                return remap$(v, {
                    CarrierParcelTemplateToken: "carrierParcelTemplateToken",
                });
            });

    export type Outbound = {
        CarrierParcelTemplateToken: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetCarrierParcelTemplateRequest
    > = z
        .object({
            carrierParcelTemplateToken: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                carrierParcelTemplateToken: "CarrierParcelTemplateToken",
            });
        });
}
