/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Address, Address$ } from "./address.js";
import * as z from "zod";

export type AddressPaginatedList = {
    next?: string | undefined;
    previous?: string | undefined;
    results?: Array<Address> | undefined;
};

/** @internal */
export namespace AddressPaginatedList$ {
    export const inboundSchema: z.ZodType<AddressPaginatedList, z.ZodTypeDef, unknown> = z.object({
        next: z.string().optional(),
        previous: z.string().optional(),
        results: z.array(Address$.inboundSchema).optional(),
    });

    export type Outbound = {
        next?: string | undefined;
        previous?: string | undefined;
        results?: Array<Address$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddressPaginatedList> = z.object(
        {
            next: z.string().optional(),
            previous: z.string().optional(),
            results: z.array(Address$.outboundSchema).optional(),
        }
    );
}
