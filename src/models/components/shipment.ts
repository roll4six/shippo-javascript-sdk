/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Address, Address$ } from "./address";
import { Parcel, Parcel$ } from "./parcel";
import { Rate, Rate$ } from "./rate";
import { ShipmentExtra, ShipmentExtra$ } from "./shipmentextra";
import * as z from "zod";

export type Messages = {
    code?: string | undefined;
    source?: string | undefined;
    text?: string | undefined;
};

/**
 * `Waiting` shipments have been successfully submitted but not yet been processed.
 *
 * @remarks
 * `Queued` shipments are currently being processed.
 * `Success` shipments have been processed successfully, meaning that rate generation has concluded.
 * `Error` does not occur currently and is reserved for future use.
 */
export enum ShipmentStatus {
    Error = "ERROR",
    Queued = "QUEUED",
    Success = "SUCCESS",
    Status = "STATUS",
}

/**
 * Shipment represents the parcel as retrieved from the database
 */
export type Shipment = {
    /**
     * ID of the Customs Declarations object for an international shipment.
     */
    customsDeclaration?: string | undefined;
    /**
     * An object holding optional extra services to be requested.
     */
    extra?: ShipmentExtra | undefined;
    /**
     * A string of up to 100 characters that can be filled with any additional information you want to attach to the object.
     */
    metadata: string;
    /**
     * Date the shipment will be tendered to the carrier. Must be in the format `2014-01-18T00:35:03.463Z`.
     *
     * @remarks
     * Defaults to current date and time if no value is provided. Please note that some carriers require this value to
     * be in the future, on a working day, or similar.
     */
    shipmentDate?: string | undefined;
    /**
     * <a href="#tag/Addresses">Address</a> object of the sender / seller. Will be returned expanded by default.
     */
    addressFrom: Address;
    /**
     * ID of the Address object where the shipment will be sent back to if it is not delivered
     *
     * @remarks
     * (Only available for UPS, USPS, and Fedex shipments). <br/>
     * If this field is not set, your shipments will be returned to the address_from.
     */
    addressReturn?: Address | undefined;
    /**
     * <a href="#tag/Addresses">Address</a> object of the recipient / buyer. Will be returned expanded by default.
     */
    addressTo: Address;
    /**
     * An array of object_ids of the carrier account objects to be used for getting shipping rates for this shipment.
     *
     * @remarks
     * If no carrier account object_ids are set in this field, Shippo will attempt to generate rates using all the
     * carrier accounts that have the `active` field set.
     */
    carrierAccounts: Array<string>;
    /**
     * An array containing elements of the following schema:<br>`code` (string): an identifier for the corresponding message
     *
     * @remarks
     * (not always available)<br>`message` (string): a publishable message containing further information.
     */
    messages: Array<Messages>;
    /**
     * Date and time of Shipment creation.
     */
    objectCreated: Date;
    /**
     * Unique identifier of the given Shipment object.
     */
    objectId: string;
    /**
     * Username of the user who created the Shipment object.
     */
    objectOwner: string;
    /**
     * Date and time of last Shipment update.
     */
    objectUpdated: Date;
    /**
     * List of Parcel objects to be shipped.
     */
    parcels: Array<Parcel>;
    /**
     * An array with all available rates. If <code>async</code> has been set to <code>false</code> in the request,
     *
     * @remarks
     * this will be populated with all available rates in the response. Otherwise rates will be created
     * asynchronously and this array will initially be empty.
     */
    rates: Array<Rate>;
    /**
     * `Waiting` shipments have been successfully submitted but not yet been processed.
     *
     * @remarks
     * `Queued` shipments are currently being processed.
     * `Success` shipments have been processed successfully, meaning that rate generation has concluded.
     * `Error` does not occur currently and is reserved for future use.
     */
    status: ShipmentStatus;
    /**
     * Indicates whether the object has been created in test mode.
     */
    test?: boolean | undefined;
};

/** @internal */
export namespace Messages$ {
    export type Inbound = {
        code?: string | undefined;
        source?: string | undefined;
        text?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Messages, z.ZodTypeDef, Inbound> = z
        .object({
            code: z.string().optional(),
            source: z.string().optional(),
            text: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.code === undefined ? null : { code: v.code }),
                ...(v.source === undefined ? null : { source: v.source }),
                ...(v.text === undefined ? null : { text: v.text }),
            };
        });

    export type Outbound = {
        code?: string | undefined;
        source?: string | undefined;
        text?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Messages> = z
        .object({
            code: z.string().optional(),
            source: z.string().optional(),
            text: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.code === undefined ? null : { code: v.code }),
                ...(v.source === undefined ? null : { source: v.source }),
                ...(v.text === undefined ? null : { text: v.text }),
            };
        });
}

/** @internal */
export const ShipmentStatus$: z.ZodNativeEnum<typeof ShipmentStatus> = z.nativeEnum(ShipmentStatus);

/** @internal */
export namespace Shipment$ {
    export type Inbound = {
        customs_declaration?: string | undefined;
        extra?: ShipmentExtra$.Inbound | undefined;
        metadata: string;
        shipment_date?: string | undefined;
        address_from: Address$.Inbound;
        address_return?: Address$.Inbound | undefined;
        address_to: Address$.Inbound;
        carrier_accounts: Array<string>;
        messages: Array<Messages$.Inbound>;
        object_created: string;
        object_id: string;
        object_owner: string;
        object_updated: string;
        parcels: Array<Parcel$.Inbound>;
        rates: Array<Rate$.Inbound>;
        status: ShipmentStatus;
        test?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<Shipment, z.ZodTypeDef, Inbound> = z
        .object({
            customs_declaration: z.string().optional(),
            extra: ShipmentExtra$.inboundSchema.optional(),
            metadata: z.string(),
            shipment_date: z.string().optional(),
            address_from: Address$.inboundSchema,
            address_return: Address$.inboundSchema.optional(),
            address_to: Address$.inboundSchema,
            carrier_accounts: z.array(z.string()),
            messages: z.array(z.lazy(() => Messages$.inboundSchema)),
            object_created: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            object_id: z.string(),
            object_owner: z.string(),
            object_updated: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            parcels: z.array(Parcel$.inboundSchema),
            rates: z.array(Rate$.inboundSchema),
            status: ShipmentStatus$,
            test: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.customs_declaration === undefined
                    ? null
                    : { customsDeclaration: v.customs_declaration }),
                ...(v.extra === undefined ? null : { extra: v.extra }),
                metadata: v.metadata,
                ...(v.shipment_date === undefined ? null : { shipmentDate: v.shipment_date }),
                addressFrom: v.address_from,
                ...(v.address_return === undefined ? null : { addressReturn: v.address_return }),
                addressTo: v.address_to,
                carrierAccounts: v.carrier_accounts,
                messages: v.messages,
                objectCreated: v.object_created,
                objectId: v.object_id,
                objectOwner: v.object_owner,
                objectUpdated: v.object_updated,
                parcels: v.parcels,
                rates: v.rates,
                status: v.status,
                ...(v.test === undefined ? null : { test: v.test }),
            };
        });

    export type Outbound = {
        customs_declaration?: string | undefined;
        extra?: ShipmentExtra$.Outbound | undefined;
        metadata: string;
        shipment_date?: string | undefined;
        address_from: Address$.Outbound;
        address_return?: Address$.Outbound | undefined;
        address_to: Address$.Outbound;
        carrier_accounts: Array<string>;
        messages: Array<Messages$.Outbound>;
        object_created: string;
        object_id: string;
        object_owner: string;
        object_updated: string;
        parcels: Array<Parcel$.Outbound>;
        rates: Array<Rate$.Outbound>;
        status: ShipmentStatus;
        test?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Shipment> = z
        .object({
            customsDeclaration: z.string().optional(),
            extra: ShipmentExtra$.outboundSchema.optional(),
            metadata: z.string(),
            shipmentDate: z.string().optional(),
            addressFrom: Address$.outboundSchema,
            addressReturn: Address$.outboundSchema.optional(),
            addressTo: Address$.outboundSchema,
            carrierAccounts: z.array(z.string()),
            messages: z.array(z.lazy(() => Messages$.outboundSchema)),
            objectCreated: z.date().transform((v) => v.toISOString()),
            objectId: z.string(),
            objectOwner: z.string(),
            objectUpdated: z.date().transform((v) => v.toISOString()),
            parcels: z.array(Parcel$.outboundSchema),
            rates: z.array(Rate$.outboundSchema),
            status: ShipmentStatus$,
            test: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.customsDeclaration === undefined
                    ? null
                    : { customs_declaration: v.customsDeclaration }),
                ...(v.extra === undefined ? null : { extra: v.extra }),
                metadata: v.metadata,
                ...(v.shipmentDate === undefined ? null : { shipment_date: v.shipmentDate }),
                address_from: v.addressFrom,
                ...(v.addressReturn === undefined ? null : { address_return: v.addressReturn }),
                address_to: v.addressTo,
                carrier_accounts: v.carrierAccounts,
                messages: v.messages,
                object_created: v.objectCreated,
                object_id: v.objectId,
                object_owner: v.objectOwner,
                object_updated: v.objectUpdated,
                parcels: v.parcels,
                rates: v.rates,
                status: v.status,
                ...(v.test === undefined ? null : { test: v.test }),
            };
        });
}
