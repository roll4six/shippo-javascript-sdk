/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as errors from "../models/errors/index.js";
import * as operations from "../models/operations/index.js";

export class CarrierAccounts extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * List all carrier accounts
     *
     * @remarks
     * Returns a list of all carrier accounts connected to your Shippo account. These carrier accounts include both Shippo carrier accounts and your own carrier accounts that you have connected to your Shippo account.
     *
     * Additionally, you can get information about the service levels associated with each carrier account by passing in the `?service_levels=true` query parameter. <br>
     * Using it appends the property `service_levels` to each carrier account. <br>
     * By default, if the query parameter is omitted, the `service_levels` property will not be included in the response.
     */
    async list(
        request: operations.ListCarrierAccountsRequest,
        options?: RequestOptions
    ): Promise<components.CarrierAccountPaginatedList> {
        const input$ = typeof request === "undefined" ? {} : request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ListCarrierAccountsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/carrier_accounts")();

        const query$ = encodeFormQuery$({
            account_id: payload$.account_id,
            carrier: payload$.carrier,
            page: payload$.page,
            results: payload$.results,
            service_levels: payload$.service_levels,
        });

        headers$.set(
            "SHIPPO-API-VERSION",
            encodeSimple$("SHIPPO-API-VERSION", this.options$.shippoApiVersion, {
                explode: false,
                charEncoding: "none",
            })
        );

        let security$;
        if (typeof this.options$.apiKeyHeader === "function") {
            security$ = { apiKeyHeader: await this.options$.apiKeyHeader() };
        } else if (this.options$.apiKeyHeader) {
            security$ = { apiKeyHeader: this.options$.apiKeyHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "ListCarrierAccounts",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<components.CarrierAccountPaginatedList>()
            .json(200, components.CarrierAccountPaginatedList$)
            .fail([400, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Create a new carrier account
     *
     * @remarks
     * Creates a new carrier account or connects an existing carrier account to the Shippo account.
     */
    async create(
        request: components.ConnectExistingOwnAccountRequest,
        options?: RequestOptions
    ): Promise<components.CarrierAccount> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => components.ConnectExistingOwnAccountRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/carrier_accounts")();

        const query$ = "";

        headers$.set(
            "SHIPPO-API-VERSION",
            encodeSimple$("SHIPPO-API-VERSION", this.options$.shippoApiVersion, {
                explode: false,
                charEncoding: "none",
            })
        );

        let security$;
        if (typeof this.options$.apiKeyHeader === "function") {
            security$ = { apiKeyHeader: await this.options$.apiKeyHeader() };
        } else if (this.options$.apiKeyHeader) {
            security$ = { apiKeyHeader: this.options$.apiKeyHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "CreateCarrierAccount",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<components.CarrierAccount>()
            .json(201, components.CarrierAccount$)
            .fail([400, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Retrieve a carrier account
     *
     * @remarks
     * Returns an existing carrier account using an object ID.
     */
    async get(
        carrierAccountId: string,
        options?: RequestOptions
    ): Promise<components.CarrierAccount> {
        const input$: operations.GetCarrierAccountRequest = {
            carrierAccountId: carrierAccountId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetCarrierAccountRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            CarrierAccountId: encodeSimple$("CarrierAccountId", payload$.CarrierAccountId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/carrier_accounts/{CarrierAccountId}")(
            pathParams$
        );

        const query$ = "";

        headers$.set(
            "SHIPPO-API-VERSION",
            encodeSimple$("SHIPPO-API-VERSION", this.options$.shippoApiVersion, {
                explode: false,
                charEncoding: "none",
            })
        );

        let security$;
        if (typeof this.options$.apiKeyHeader === "function") {
            security$ = { apiKeyHeader: await this.options$.apiKeyHeader() };
        } else if (this.options$.apiKeyHeader) {
            security$ = { apiKeyHeader: this.options$.apiKeyHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "GetCarrierAccount",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<components.CarrierAccount>()
            .json(200, components.CarrierAccount$)
            .fail([400, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Update a carrier account
     *
     * @remarks
     * Updates an existing carrier account object. The account_id and carrier can't be updated. This is because they form the unique identifier together.
     */
    async update(
        carrierAccountId: string,
        carrierAccountBase?: components.CarrierAccountBase | undefined,
        options?: RequestOptions
    ): Promise<components.CarrierAccount> {
        const input$: operations.UpdateCarrierAccountRequest = {
            carrierAccountId: carrierAccountId,
            carrierAccountBase: carrierAccountBase,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.UpdateCarrierAccountRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.CarrierAccountBase, { explode: true });

        const pathParams$ = {
            CarrierAccountId: encodeSimple$("CarrierAccountId", payload$.CarrierAccountId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/carrier_accounts/{CarrierAccountId}")(
            pathParams$
        );

        const query$ = "";

        headers$.set(
            "SHIPPO-API-VERSION",
            encodeSimple$("SHIPPO-API-VERSION", this.options$.shippoApiVersion, {
                explode: false,
                charEncoding: "none",
            })
        );

        let security$;
        if (typeof this.options$.apiKeyHeader === "function") {
            security$ = { apiKeyHeader: await this.options$.apiKeyHeader() };
        } else if (this.options$.apiKeyHeader) {
            security$ = { apiKeyHeader: this.options$.apiKeyHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "UpdateCarrierAccount",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PUT",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<components.CarrierAccount>()
            .json(200, components.CarrierAccount$)
            .fail([400, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Connect an existing carrier account using OAuth 2.0
     *
     * @remarks
     * Used by client applications to setup or reconnect an existing carrier account with carriers that support OAuth 2.0
     */
    async initiateOauth2Signin(
        carrierAccountObjectId: string,
        redirectUri: string,
        state?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.InitiateOauth2SigninResponse | undefined> {
        const input$: operations.InitiateOauth2SigninRequest = {
            carrierAccountObjectId: carrierAccountObjectId,
            redirectUri: redirectUri,
            state: state,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.InitiateOauth2SigninRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            CarrierAccountObjectId: encodeSimple$(
                "CarrierAccountObjectId",
                payload$.CarrierAccountObjectId,
                { explode: false, charEncoding: "percent" }
            ),
        };
        const path$ = this.templateURLComponent(
            "/carrier_accounts/{CarrierAccountObjectId}/signin/initiate"
        )(pathParams$);

        const query$ = encodeFormQuery$({
            redirect_uri: payload$.redirect_uri,
            state: payload$.state,
        });

        headers$.set(
            "SHIPPO-API-VERSION",
            encodeSimple$("SHIPPO-API-VERSION", this.options$.shippoApiVersion, {
                explode: false,
                charEncoding: "none",
            })
        );

        let security$;
        if (typeof this.options$.apiKeyHeader === "function") {
            security$ = { apiKeyHeader: await this.options$.apiKeyHeader() };
        } else if (this.options$.apiKeyHeader) {
            security$ = { apiKeyHeader: this.options$.apiKeyHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "InitiateOauth2Signin",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "404", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.InitiateOauth2SigninResponse | undefined>()
            .void(302, operations.InitiateOauth2SigninResponse$.inboundSchema.optional(), {
                hdrs: true,
            })
            .json(400, errors.InitiateOauth2SigninResponseBody$, { err: true })
            .json(401, errors.InitiateOauth2SigninCarrierAccountsResponseBody$, { err: true })
            .json(404, errors.InitiateOauth2SigninCarrierAccountsResponseResponseBody$, {
                err: true,
            })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Add a Shippo carrier account
     *
     * @remarks
     * Adds a Shippo carrier account
     */
    async register(
        request: operations.RegisterCarrierAccountRequestBody,
        options?: RequestOptions
    ): Promise<components.CarrierAccount> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.RegisterCarrierAccountRequestBody$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/carrier_accounts/register/new")();

        const query$ = "";

        headers$.set(
            "SHIPPO-API-VERSION",
            encodeSimple$("SHIPPO-API-VERSION", this.options$.shippoApiVersion, {
                explode: false,
                charEncoding: "none",
            })
        );

        let security$;
        if (typeof this.options$.apiKeyHeader === "function") {
            security$ = { apiKeyHeader: await this.options$.apiKeyHeader() };
        } else if (this.options$.apiKeyHeader) {
            security$ = { apiKeyHeader: this.options$.apiKeyHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "RegisterCarrierAccount",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<components.CarrierAccount>()
            .json(201, components.CarrierAccount$)
            .fail([400, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Get Carrier Registration status
     *
     * @remarks
     * Returns the registration status for the given account for the given carrier
     */
    async getRegistrationStatus(
        carrier: operations.Carrier,
        options?: RequestOptions
    ): Promise<components.CarrierAccountRegistrationStatus> {
        const input$: operations.GetCarrierRegistrationStatusRequest = {
            carrier: carrier,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.GetCarrierRegistrationStatusRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/carrier_accounts/reg-status")();

        const query$ = encodeFormQuery$({
            carrier: payload$.carrier,
        });

        headers$.set(
            "SHIPPO-API-VERSION",
            encodeSimple$("SHIPPO-API-VERSION", this.options$.shippoApiVersion, {
                explode: false,
                charEncoding: "none",
            })
        );

        let security$;
        if (typeof this.options$.apiKeyHeader === "function") {
            security$ = { apiKeyHeader: await this.options$.apiKeyHeader() };
        } else if (this.options$.apiKeyHeader) {
            security$ = { apiKeyHeader: this.options$.apiKeyHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "GetCarrierRegistrationStatus",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<components.CarrierAccountRegistrationStatus>()
            .json(200, components.CarrierAccountRegistrationStatus$)
            .fail([400, "4XX", "5XX"])
            .match(response);

        return result$;
    }
}
