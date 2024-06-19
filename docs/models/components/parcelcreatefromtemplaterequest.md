# ParcelCreateFromTemplateRequest


## Fields

| Field                                                                                                                                                                                                   | Type                                                                                                                                                                                                    | Required                                                                                                                                                                                                | Description                                                                                                                                                                                             | Example                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `extra`                                                                                                                                                                                                 | [components.ParcelExtra](../../models/components/parcelextra.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                      | An object holding optional extra services to be requested for each parcel in a multi-piece shipment. <br/>See the <a href="#section/Parcel-Extras">Parcel Extra table below</a> for all available services. |                                                                                                                                                                                                         |
| `metadata`                                                                                                                                                                                              | *string*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                      | N/A                                                                                                                                                                                                     | Customer ID 123456                                                                                                                                                                                      |
| `massUnit`                                                                                                                                                                                              | [components.WeightUnitEnum](../../models/components/weightunitenum.md)                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                      | The unit used for weight.                                                                                                                                                                               | lb                                                                                                                                                                                                      |
| `weight`                                                                                                                                                                                                | *string*                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                      | Weight of the parcel. Up to six digits in front and four digits after the decimal separator are accepted.                                                                                               | 1                                                                                                                                                                                                       |
| `template`                                                                                                                                                                                              | *components.ParcelTemplateEnumSet*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                      | If template is passed, `length`, `width`, `height`, and `distance_unit` are not required                                                                                                                |                                                                                                                                                                                                         |