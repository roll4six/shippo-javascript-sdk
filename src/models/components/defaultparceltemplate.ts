/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { UserParcelTemplate, UserParcelTemplate$ } from "./userparceltemplate.js";
import * as z from "zod";

export type DefaultParcelTemplate = {
    result?: UserParcelTemplate | undefined;
};

/** @internal */
export namespace DefaultParcelTemplate$ {
    export const inboundSchema: z.ZodType<DefaultParcelTemplate, z.ZodTypeDef, unknown> = z.object({
        result: UserParcelTemplate$.inboundSchema.optional(),
    });

    export type Outbound = {
        result?: UserParcelTemplate$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DefaultParcelTemplate> =
        z.object({
            result: UserParcelTemplate$.outboundSchema.optional(),
        });
}
