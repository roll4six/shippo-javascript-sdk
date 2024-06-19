/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

/**
 * Specify the department number field on the label (FedEx and UPS only).
 */
export type DepartmentNumber = {
    /**
     * Custom prefix for department number field (ZPL labels only). Up to 11 characters, including trailing
     *
     * @remarks
     * spaces. Empty string indicates removal of default prefix. To use the default prefix, do not include
     * this property.
     */
    prefix?: string | undefined;
    /**
     * Optional text to be printed on the shipping label for department number. Up to 40 characters.
     */
    value?: string | undefined;
    /**
     * Order UPS reference fields are printed on ZPL labels. For UPS shipments, if you choose to set `ref_sort` for one reference, you must set `ref_sort` for all other supported UPS references using unique integers.
     */
    refSort?: number | undefined;
};

/** @internal */
export namespace DepartmentNumber$ {
    export const inboundSchema: z.ZodType<DepartmentNumber, z.ZodTypeDef, unknown> = z
        .object({
            prefix: z.string().optional(),
            value: z.string().optional(),
            ref_sort: z.number().int().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ref_sort: "refSort",
            });
        });

    export type Outbound = {
        prefix?: string | undefined;
        value?: string | undefined;
        ref_sort?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DepartmentNumber> = z
        .object({
            prefix: z.string().optional(),
            value: z.string().optional(),
            refSort: z.number().int().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                refSort: "ref_sort",
            });
        });
}
