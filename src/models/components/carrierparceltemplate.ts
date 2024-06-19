/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { DistanceUnitEnum, DistanceUnitEnum$ } from "./distanceunitenum.js";
import * as z from "zod";

export type CarrierParcelTemplate = {
    /**
     * The name of the carrier that provides this parcel template
     */
    carrier?: string | undefined;
    /**
     * The measure unit used for length, width and height.
     */
    distanceUnit?: DistanceUnitEnum | undefined;
    /**
     * The height of the package, in units specified by the distance_unit attribute
     */
    height?: string | undefined;
    /**
     * True if the carrier parcel template allows custom dimensions, such as USPS Softpack.
     */
    isVariableDimensions?: string | undefined;
    /**
     * The length of the package, in units specified by the distance_unit attribute
     */
    length?: string | undefined;
    /**
     * The name of the carrier parcel template
     */
    name?: string | undefined;
    /**
     * The unique string representation of the carrier parcel template
     */
    token?: string | undefined;
    /**
     * The width of the package, in units specified by the distance_unit attribute
     */
    width?: string | undefined;
};

/** @internal */
export namespace CarrierParcelTemplate$ {
    export const inboundSchema: z.ZodType<CarrierParcelTemplate, z.ZodTypeDef, unknown> = z
        .object({
            carrier: z.string().optional(),
            distance_unit: DistanceUnitEnum$.inboundSchema.optional(),
            height: z.string().optional(),
            is_variable_dimensions: z.string().optional(),
            length: z.string().optional(),
            name: z.string().optional(),
            token: z.string().optional(),
            width: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                distance_unit: "distanceUnit",
                is_variable_dimensions: "isVariableDimensions",
            });
        });

    export type Outbound = {
        carrier?: string | undefined;
        distance_unit?: string | undefined;
        height?: string | undefined;
        is_variable_dimensions?: string | undefined;
        length?: string | undefined;
        name?: string | undefined;
        token?: string | undefined;
        width?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CarrierParcelTemplate> = z
        .object({
            carrier: z.string().optional(),
            distanceUnit: DistanceUnitEnum$.outboundSchema.optional(),
            height: z.string().optional(),
            isVariableDimensions: z.string().optional(),
            length: z.string().optional(),
            name: z.string().optional(),
            token: z.string().optional(),
            width: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                distanceUnit: "distance_unit",
                isVariableDimensions: "is_variable_dimensions",
            });
        });
}
