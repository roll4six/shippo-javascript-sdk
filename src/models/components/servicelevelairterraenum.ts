/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * |Token | Service name|
 *
 * @remarks
 * |:---|:---|
 * | airterra_ground | GroundXC|
 * | airterra_postal | FastPost|
 */
export const ServiceLevelAirterraEnum = {
  AirterraGround: "airterra_ground",
  AirterraPostal: "airterra_postal",
} as const;
/**
 * |Token | Service name|
 *
 * @remarks
 * |:---|:---|
 * | airterra_ground | GroundXC|
 * | airterra_postal | FastPost|
 */
export type ServiceLevelAirterraEnum = ClosedEnum<
  typeof ServiceLevelAirterraEnum
>;

/** @internal */
export const ServiceLevelAirterraEnum$inboundSchema: z.ZodNativeEnum<
  typeof ServiceLevelAirterraEnum
> = z.nativeEnum(ServiceLevelAirterraEnum);

/** @internal */
export const ServiceLevelAirterraEnum$outboundSchema: z.ZodNativeEnum<
  typeof ServiceLevelAirterraEnum
> = ServiceLevelAirterraEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ServiceLevelAirterraEnum$ {
  /** @deprecated use `ServiceLevelAirterraEnum$inboundSchema` instead. */
  export const inboundSchema = ServiceLevelAirterraEnum$inboundSchema;
  /** @deprecated use `ServiceLevelAirterraEnum$outboundSchema` instead. */
  export const outboundSchema = ServiceLevelAirterraEnum$outboundSchema;
}