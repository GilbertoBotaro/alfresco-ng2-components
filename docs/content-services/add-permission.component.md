---
Added: v2.4.0
Status: Active
Last reviewed: 2018-05-03
---

# Add Permission Component

Searches for people or groups to add to the current node permissions.

![Add Permission Component](../docassets/images/add-permission-component.png)

## Basic Usage

```html
<adf-add-permission
    [nodeId]="nodeId"
    (success)="onSuccess($event)"
    (error)="onError($event)">
</adf-add-permission>
```

## Class members

### Properties

| Name | Type | Default value | Description |
| -- | -- | -- | -- |
| nodeId | `string` |  | ID of the target node. |

### Events

| Name | Type | Description |
| -- | -- | -- |
| error | [`EventEmitter`](https://angular.io/api/core/EventEmitter)`<any>` | Emitted when an error occurs during the update. |
| success | [`EventEmitter`](https://angular.io/api/core/EventEmitter)`<`[`MinimalNodeEntryEntity`](../content-services/document-library.model.md)`>` | Emitted when the node is updated successfully. |

## Details

This component extends the [Add permission panel component](../content-services/add-permission-panel.component.md)
to apply the chosen selection of permissions when they are accepted. You can also
use the [Add permission dialog component](../content-services/add-permission-dialog.component.md) to perform the same action using a dialog.

## See also

-   [Add permission panel component](../content-services/add-permission-panel.component.md)
-   [Add permission dialog component](../content-services/add-permission-dialog.component.md)
