---
Added: v2.0.0
Status: Active
---

# Task Standalone component

This component can be used when there is no form attached to a task.

## Basic Usage

```html
<adf-task-standalone
    [taskName]= "taskname">
</adf-task-standalone>
```

## Class members

### Properties

| Name | Type | Default value | Description |
| -- | -- | -- | -- |
| hasCompletePermission | `boolean` | true | Toggles rendering of the `Complete` button. |
| hideCancelButton | `boolean` | true | Toggles rendering of the `Cancel` button. |
| isCompleted | `boolean` | false | If true then Task completed message is shown and `Complete` and `Cancel` buttons are hidden. |
| taskName | `string` |  | Name of the task. |

### Events

| Name | Type | Description |
| -- | -- | -- |
| cancel | [`EventEmitter`](https://angular.io/api/core/EventEmitter)`<void>` | Emitted when the "Cancel" button is clicked. |
| complete | [`EventEmitter`](https://angular.io/api/core/EventEmitter)`<void>` | Emitted when the form associated with the task is completed. |
