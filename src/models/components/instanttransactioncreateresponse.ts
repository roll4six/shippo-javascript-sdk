/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { InstantTransactionRate, InstantTransactionRate$ } from "./instanttransactionrate";
import { LabelFileTypeEnum, LabelFileTypeEnum$ } from "./labelfiletypeenum";
import { ObjectStateEnum, ObjectStateEnum$ } from "./objectstateenum";
import { TrackingStatusEnum, TrackingStatusEnum$ } from "./trackingstatusenum";
import { TransactionStatusEnum, TransactionStatusEnum$ } from "./transactionstatusenum";
import * as z from "zod";

export type InstantTransactionCreateResponseMessages = {};

export enum InstantTransactionCreateResponseResponseType {
    Instant = "instant",
}

export type InstantTransactionCreateResponse = {
    /**
     * A URL pointing to the commercial invoice as a 8.5x11 inch PDF file.
     *
     * @remarks
     * A value will only be returned if the Transactions has been processed successfully and if the shipment is international.
     */
    commercialInvoiceUrl?: string | undefined;
    /**
     * The estimated time of arrival according to the carrier.
     */
    eta?: string | undefined;
    /**
     * Print format of the <a href="https://docs.goshippo.com/docs/shipments/shippinglabelsizes/">label</a>. If empty, will use the default format set from
     *
     * @remarks
     * <a href="https://apps.goshippo.com/settings/labels">the Shippo dashboard.</a>
     */
    labelFileType?: LabelFileTypeEnum | undefined;
    /**
     * A URL pointing directly to the label in the format you've set in your settings.
     *
     * @remarks
     * A value will only be returned if the Transactions has been processed successfully.
     */
    labelUrl?: string | undefined;
    /**
     * An array containing elements of the following schema:<br>
     *
     * @remarks
     * `code` (string): an identifier for the corresponding message (not always available)<br>
     * `message` (string): a publishable message containing further information.
     */
    messages?: Array<InstantTransactionCreateResponseMessages> | undefined;
    /**
     * A string of up to 100 characters that can be filled with any additional information you want to
     *
     * @remarks
     * attach to the object.
     */
    metadata?: string | undefined;
    /**
     * Date and time of Transaction creation.
     */
    objectCreated?: Date | undefined;
    /**
     * Unique identifier of the given Transaction object.
     */
    objectId?: string | undefined;
    /**
     * Username of the user who created the Transaction object.
     */
    objectOwner?: string | undefined;
    /**
     * Indicates the validity of the enclosing object
     */
    objectState?: ObjectStateEnum | undefined;
    /**
     * Date and time of last Transaction update.
     */
    objectUpdated?: Date | undefined;
    /**
     * A URL pointing directly to the QR code in PNG format.
     *
     * @remarks
     * A value will only be returned if requested using qr_code_requested flag and the carrier provides such an option.
     */
    qrCodeUrl?: string | undefined;
    /**
     * Indicates the status of the Transaction.
     */
    status?: TransactionStatusEnum | undefined;
    /**
     * Indicates whether the object has been created in test mode.
     */
    test?: boolean | undefined;
    /**
     * The carrier-specific tracking number that can be used to track the Shipment.
     *
     * @remarks
     * A value will only be returned if the Rate is for a trackable Shipment and if the Transactions has been processed successfully.
     */
    trackingNumber?: string | undefined;
    /**
     * Indicates the high level status of the shipment.
     */
    trackingStatus?: TrackingStatusEnum | undefined;
    /**
     * A link to track this item on the carrier-provided tracking website.
     *
     * @remarks
     * A value will only be returned if tracking is available and the carrier provides such a service.
     */
    trackingUrlProvider?: string | undefined;
    rate?: InstantTransactionRate | undefined;
    responseType?: InstantTransactionCreateResponseResponseType | undefined;
};

/** @internal */
export namespace InstantTransactionCreateResponseMessages$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<
        InstantTransactionCreateResponseMessages,
        z.ZodTypeDef,
        Inbound
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        InstantTransactionCreateResponseMessages
    > = z.object({});
}

/** @internal */
export const InstantTransactionCreateResponseResponseType$: z.ZodNativeEnum<
    typeof InstantTransactionCreateResponseResponseType
> = z.nativeEnum(InstantTransactionCreateResponseResponseType);

/** @internal */
export namespace InstantTransactionCreateResponse$ {
    export type Inbound = {
        commercial_invoice_url?: string | undefined;
        eta?: string | undefined;
        label_file_type?: LabelFileTypeEnum | undefined;
        label_url?: string | undefined;
        messages?: Array<InstantTransactionCreateResponseMessages$.Inbound> | undefined;
        metadata?: string | undefined;
        object_created?: string | undefined;
        object_id?: string | undefined;
        object_owner?: string | undefined;
        object_state?: ObjectStateEnum | undefined;
        object_updated?: string | undefined;
        qr_code_url?: string | undefined;
        status?: TransactionStatusEnum | undefined;
        test?: boolean | undefined;
        tracking_number?: string | undefined;
        tracking_status?: TrackingStatusEnum | undefined;
        tracking_url_provider?: string | undefined;
        rate?: InstantTransactionRate$.Inbound | undefined;
        responseType?: InstantTransactionCreateResponseResponseType | undefined;
    };

    export const inboundSchema: z.ZodType<InstantTransactionCreateResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                commercial_invoice_url: z.string().optional(),
                eta: z.string().optional(),
                label_file_type: LabelFileTypeEnum$.optional(),
                label_url: z.string().optional(),
                messages: z
                    .array(z.lazy(() => InstantTransactionCreateResponseMessages$.inboundSchema))
                    .optional(),
                metadata: z.string().optional(),
                object_created: z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
                    .optional(),
                object_id: z.string().optional(),
                object_owner: z.string().optional(),
                object_state: ObjectStateEnum$.optional(),
                object_updated: z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
                    .optional(),
                qr_code_url: z.string().optional(),
                status: TransactionStatusEnum$.optional(),
                test: z.boolean().optional(),
                tracking_number: z.string().optional(),
                tracking_status: TrackingStatusEnum$.optional(),
                tracking_url_provider: z.string().optional(),
                rate: InstantTransactionRate$.inboundSchema.optional(),
                responseType: InstantTransactionCreateResponseResponseType$.optional(),
            })
            .transform((v) => {
                return {
                    ...(v.commercial_invoice_url === undefined
                        ? null
                        : { commercialInvoiceUrl: v.commercial_invoice_url }),
                    ...(v.eta === undefined ? null : { eta: v.eta }),
                    ...(v.label_file_type === undefined
                        ? null
                        : { labelFileType: v.label_file_type }),
                    ...(v.label_url === undefined ? null : { labelUrl: v.label_url }),
                    ...(v.messages === undefined ? null : { messages: v.messages }),
                    ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                    ...(v.object_created === undefined
                        ? null
                        : { objectCreated: v.object_created }),
                    ...(v.object_id === undefined ? null : { objectId: v.object_id }),
                    ...(v.object_owner === undefined ? null : { objectOwner: v.object_owner }),
                    ...(v.object_state === undefined ? null : { objectState: v.object_state }),
                    ...(v.object_updated === undefined
                        ? null
                        : { objectUpdated: v.object_updated }),
                    ...(v.qr_code_url === undefined ? null : { qrCodeUrl: v.qr_code_url }),
                    ...(v.status === undefined ? null : { status: v.status }),
                    ...(v.test === undefined ? null : { test: v.test }),
                    ...(v.tracking_number === undefined
                        ? null
                        : { trackingNumber: v.tracking_number }),
                    ...(v.tracking_status === undefined
                        ? null
                        : { trackingStatus: v.tracking_status }),
                    ...(v.tracking_url_provider === undefined
                        ? null
                        : { trackingUrlProvider: v.tracking_url_provider }),
                    ...(v.rate === undefined ? null : { rate: v.rate }),
                    ...(v.responseType === undefined ? null : { responseType: v.responseType }),
                };
            });

    export type Outbound = {
        commercial_invoice_url?: string | undefined;
        eta?: string | undefined;
        label_file_type?: LabelFileTypeEnum | undefined;
        label_url?: string | undefined;
        messages?: Array<InstantTransactionCreateResponseMessages$.Outbound> | undefined;
        metadata?: string | undefined;
        object_created?: string | undefined;
        object_id?: string | undefined;
        object_owner?: string | undefined;
        object_state?: ObjectStateEnum | undefined;
        object_updated?: string | undefined;
        qr_code_url?: string | undefined;
        status?: TransactionStatusEnum | undefined;
        test?: boolean | undefined;
        tracking_number?: string | undefined;
        tracking_status?: TrackingStatusEnum | undefined;
        tracking_url_provider?: string | undefined;
        rate?: InstantTransactionRate$.Outbound | undefined;
        responseType?: InstantTransactionCreateResponseResponseType | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        InstantTransactionCreateResponse
    > = z
        .object({
            commercialInvoiceUrl: z.string().optional(),
            eta: z.string().optional(),
            labelFileType: LabelFileTypeEnum$.optional(),
            labelUrl: z.string().optional(),
            messages: z
                .array(z.lazy(() => InstantTransactionCreateResponseMessages$.outboundSchema))
                .optional(),
            metadata: z.string().optional(),
            objectCreated: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            objectId: z.string().optional(),
            objectOwner: z.string().optional(),
            objectState: ObjectStateEnum$.optional(),
            objectUpdated: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            qrCodeUrl: z.string().optional(),
            status: TransactionStatusEnum$.optional(),
            test: z.boolean().optional(),
            trackingNumber: z.string().optional(),
            trackingStatus: TrackingStatusEnum$.optional(),
            trackingUrlProvider: z.string().optional(),
            rate: InstantTransactionRate$.outboundSchema.optional(),
            responseType: InstantTransactionCreateResponseResponseType$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.commercialInvoiceUrl === undefined
                    ? null
                    : { commercial_invoice_url: v.commercialInvoiceUrl }),
                ...(v.eta === undefined ? null : { eta: v.eta }),
                ...(v.labelFileType === undefined ? null : { label_file_type: v.labelFileType }),
                ...(v.labelUrl === undefined ? null : { label_url: v.labelUrl }),
                ...(v.messages === undefined ? null : { messages: v.messages }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.objectCreated === undefined ? null : { object_created: v.objectCreated }),
                ...(v.objectId === undefined ? null : { object_id: v.objectId }),
                ...(v.objectOwner === undefined ? null : { object_owner: v.objectOwner }),
                ...(v.objectState === undefined ? null : { object_state: v.objectState }),
                ...(v.objectUpdated === undefined ? null : { object_updated: v.objectUpdated }),
                ...(v.qrCodeUrl === undefined ? null : { qr_code_url: v.qrCodeUrl }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.test === undefined ? null : { test: v.test }),
                ...(v.trackingNumber === undefined ? null : { tracking_number: v.trackingNumber }),
                ...(v.trackingStatus === undefined ? null : { tracking_status: v.trackingStatus }),
                ...(v.trackingUrlProvider === undefined
                    ? null
                    : { tracking_url_provider: v.trackingUrlProvider }),
                ...(v.rate === undefined ? null : { rate: v.rate }),
                ...(v.responseType === undefined ? null : { responseType: v.responseType }),
            };
        });
}